import { Figure } from "./figure";

export type StepRailStep = {
  title: string;
  body: string;
  figure?: { id: string; caption: string; spec: string };
};

/**
 * StepRail: a numbered procedure rendered as a vertical rail instead of a
 * bare ordered list, one circled number per step. A step can carry its own
 * Figure when a screenshot documents that exact step rather than the module
 * in general. Built for a .tsx page that composes a procedure directly from
 * structured step data (see app/overview/github-basics/page.tsx for the
 * existing `sections` pattern this generalizes); it is not wired into the
 * markdown embedding pipeline the way Figure and Callout are, since a rail
 * needs structured step data up front, not inline prose.
 */
export function StepRail({ steps }: { steps: StepRailStep[] }) {
  return (
    <ol className="flex flex-col gap-5">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gpc-primary-red font-mono text-[12px] font-semibold text-gpc-primary-red">
            {i + 1}
          </span>
          <div className="flex-1 pt-0.5">
            <div className="text-[15px] leading-snug font-semibold text-foreground">{step.title}</div>
            <p className="mt-1 text-[14.5px] leading-relaxed text-muted-foreground">{step.body}</p>
            {step.figure && (
              <div className="mt-3">
                <Figure id={step.figure.id} caption={step.figure.caption} spec={step.figure.spec} />
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
