"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * A stopwatch for the person reading the site, not a logging system.
 *
 * Onboarding hours still get logged by hand in ClickUp (see the Time
 * Tracking Policy in Overview > How We Work). The friction is remembering
 * when you started. This runs while you read, survives navigation between
 * modules and a page refresh, and hands back one number to paste into a
 * ClickUp time entry. Nothing is sent anywhere: the whole state lives in
 * this browser's localStorage under TIMER_KEY.
 *
 * The rounding is GPC's, not generic: the policy logs in 5-minute
 * increments and rounds anything shorter up to 5, so `roundedMinutes`
 * always reports the number the policy would accept, never raw seconds.
 *
 * Two renderings of the same state:
 * - `variant="bar"` sits in the top nav on every page, so the clock is
 *   visible wherever you are in the site.
 * - `variant="card"` is the panel on the Overview index, with the reset
 *   control and the paste-ready figure.
 * They share localStorage and a 1s tick, so starting in one moves both.
 */

const TIMER_KEY = "gpc-training-timer.v1";

type TimerState = {
  running: boolean;
  /** epoch ms when the current run started, null when paused */
  startedAt: number | null;
  /** completed time from every previous run, in ms */
  accumulatedMs: number;
};

const EMPTY: TimerState = { running: false, startedAt: null, accumulatedMs: 0 };

function readState(): TimerState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(TIMER_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<TimerState>;
    return {
      running: Boolean(parsed.running),
      startedAt: typeof parsed.startedAt === "number" ? parsed.startedAt : null,
      accumulatedMs: typeof parsed.accumulatedMs === "number" ? parsed.accumulatedMs : 0,
    };
  } catch {
    return EMPTY;
  }
}

function writeState(state: TimerState) {
  try {
    window.localStorage.setItem(TIMER_KEY, JSON.stringify(state));
  } catch {
    // Private windows and blocked site data both throw here. The timer
    // still runs for this page view; it just will not survive a reload.
  }
}

function elapsedMs(state: TimerState, now: number): number {
  if (state.running && state.startedAt !== null) {
    return state.accumulatedMs + Math.max(0, now - state.startedAt);
  }
  return state.accumulatedMs;
}

function clock(ms: number): string {
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

/** GPC's Time Tracking Policy: 5-minute increments, anything shorter rounds up to 5. */
export function roundedMinutes(ms: number): number {
  const minutes = ms / 60000;
  if (minutes <= 0) return 0;
  return Math.max(5, Math.ceil(minutes / 5) * 5);
}

function useTimer() {
  const [state, setState] = useState<TimerState>(EMPTY);
  const [now, setNow] = useState(() => Date.now());
  const [ready, setReady] = useState(false);

  // Hydration: the server renders 00:00 paused, then the real state lands
  // on mount. Rendering localStorage on the server is not possible, and
  // rendering it during the first client pass would mismatch.
  useEffect(() => {
    setState(readState());
    setReady(true);
  }, []);

  // One tick per second, only while running.
  useEffect(() => {
    if (!state.running) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [state.running]);

  // Both renderings of this component live on the same page, and a second
  // tab is a normal thing to have open. `storage` fires in the other
  // contexts; the custom event covers the same-document case.
  useEffect(() => {
    const sync = () => {
      setState(readState());
      setNow(Date.now());
    };
    window.addEventListener("storage", sync);
    window.addEventListener("gpc-training-timer", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("gpc-training-timer", sync);
    };
  }, []);

  const commit = useCallback((next: TimerState) => {
    setState(next);
    setNow(Date.now());
    writeState(next);
    window.dispatchEvent(new Event("gpc-training-timer"));
  }, []);

  const start = useCallback(() => {
    commit({ running: true, startedAt: Date.now(), accumulatedMs: readState().accumulatedMs });
  }, [commit]);

  const pause = useCallback(() => {
    const current = readState();
    commit({
      running: false,
      startedAt: null,
      accumulatedMs: elapsedMs(current, Date.now()),
    });
  }, [commit]);

  const reset = useCallback(() => {
    commit(EMPTY);
  }, [commit]);

  return { state, ready, ms: elapsedMs(state, now), start, pause, reset };
}

export function TrainingTimer({ variant = "bar" }: { variant?: "bar" | "card" }) {
  const { state, ready, ms, start, pause, reset } = useTimer();
  const [copied, setCopied] = useState(false);
  const copyTimeout = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (copyTimeout.current !== null) window.clearTimeout(copyTimeout.current);
    },
    [],
  );

  const minutes = roundedMinutes(ms);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${minutes}m`);
      setCopied(true);
      if (copyTimeout.current !== null) window.clearTimeout(copyTimeout.current);
      copyTimeout.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard permission denied. The figure is on screen either way.
    }
  };

  if (variant === "bar") {
    return (
      <div className="flex items-center gap-2" aria-label="Training session timer">
        <span
          aria-hidden
          className={`h-1.5 w-1.5 rounded-full ${
            state.running ? "bg-gpc-primary-red" : "bg-muted-foreground/40"
          }`}
        />
        <span
          className="font-mono text-[12px] tabular-nums text-foreground"
          aria-live="off"
          suppressHydrationWarning
        >
          {ready ? clock(ms) : "00:00"}
        </span>
        <button
          type="button"
          onClick={state.running ? pause : start}
          className="border border-border bg-background px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.08em] text-foreground uppercase transition-colors hover:border-gpc-primary-red"
        >
          {state.running ? "Pause" : "Start"}
        </button>
      </div>
    );
  }

  return (
    <div className="border border-border bg-card px-5 py-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
            Record your time
          </div>
          <p className="mt-2 max-w-[42ch] text-[13.5px] leading-snug text-muted-foreground">
            Runs while you read, keeps counting across modules, and stays in this
            browser only. Stop when you are done and log the rounded figure against
            your onboarding task in ClickUp.
          </p>
        </div>

        <div className="flex flex-col items-end gap-3">
          <div
            className="font-mono text-[38px] leading-none tabular-nums text-foreground"
            suppressHydrationWarning
          >
            {ready ? clock(ms) : "00:00"}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={state.running ? pause : start}
              className={`px-4 py-2 font-mono text-[11px] font-semibold tracking-[0.08em] uppercase transition-colors ${
                state.running
                  ? "border border-border bg-background text-foreground hover:border-gpc-primary-red"
                  : "bg-primary text-primary-foreground hover:bg-gpc-neutral-500"
              }`}
            >
              {state.running ? "Pause" : ms > 0 ? "Resume" : "Start"}
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={ms === 0}
              className="border border-border bg-background px-4 py-2 font-mono text-[11px] font-semibold tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:border-gpc-primary-red hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4">
        <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
          Log to ClickUp
        </span>
        <span
          className="font-mono text-[15px] font-semibold tabular-nums text-foreground"
          suppressHydrationWarning
        >
          {ready ? `${minutes}m` : "0m"}
        </span>
        <button
          type="button"
          onClick={copy}
          disabled={ms === 0}
          className="border border-border bg-background px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.08em] text-foreground uppercase transition-colors hover:border-gpc-primary-red disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <span className="text-[12.5px] text-muted-foreground">
          Rounded to the 5-minute increment the policy logs in.
        </span>
      </div>
    </div>
  );
}
