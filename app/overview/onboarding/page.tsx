import { ModuleShell } from "@/components/module-shell";
import { Checklist } from "@/components/checklist";
import { Callout } from "@/components/callout";
import { StatTiles } from "@/components/diagram";
import { readOnboarding, ONBOARDING_LIST_URL } from "@/lib/onboarding";

export const metadata = { title: "Onboarding at GPC · GPC Team Training" };

export default function Page() {
  const { phases } = readOnboarding();
  const total = phases.reduce((n, p) => n + p.items.length, 0);

  return (
    <ModuleShell
      track="overview"
      crumbs={[{ label: "Overview", href: "/" }, { label: "Onboarding at GPC" }]}
      eyebrow="Overview · Module 01"
      title="Onboarding at GPC"
      lede={
        <>
          Every task in your first two weeks, in the order it makes sense to do
          them. Each row opens its own ClickUp task, because the{" "}
          <a
            href={ONBOARDING_LIST_URL}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-2"
          >
            GPC General Onboarding list
          </a>{" "}
          is the record of what you have finished. This page is the reading
          order, not a second checklist.
        </>
      }
    >
      <StatTiles
        tiles={[
          { value: String(total), label: "Tasks in the list", note: "ClickUp owns the ticks" },
          { value: "7", label: "Phases", note: "Roughly in this order" },
          { value: "21", label: "ClickUp courses", note: "The longest phase by far" },
          { value: "2 wks", label: "Typical span", tone: "red", note: "Faster is fine" },
        ]}
      />

      <h2>How to work through this</h2>
      <p>
        Start the timer in the top bar when you sit down. Work top to bottom. The
        phases before ClickUp University are quick and unblock everything else:
        without the offer letter signed you have no accounts, and without Dashlane
        you have no credentials. The reading phase lines up one to one with modules
        02 through 07 on this site, so open the module, read it, then tick the
        ClickUp task.
      </p>

      <Callout>
        Log your onboarding hours the same way you will log client hours. The
        timer in the top bar rounds to the 5-minute increment the Time Tracking
        Policy logs in, so the figure it gives you is the figure you paste into
        ClickUp.
      </Callout>

      <h2>The list</h2>

      <div className="not-prose my-8">
        <Checklist phases={phases} />
      </div>

      <h2>What comes after</h2>
      <p>
        The last row sends you to your role handbook, which is where Overview ends
        and the{" "}
        <a href="/roles" className="text-primary underline underline-offset-2">
          Roles tab
        </a>{" "}
        starts. Overview is everything that is true regardless of which seat you
        sit in. Roles is the part that changes depending on what you were hired to
        do.
      </p>
      <p>
        If a task in ClickUp does not match what this page says, ClickUp is right
        and this page is stale. Tell the Project Manager so both get fixed.
      </p>
    </ModuleShell>
  );
}
