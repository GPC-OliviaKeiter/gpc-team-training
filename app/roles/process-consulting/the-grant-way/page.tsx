import { TopNav } from "@/components/top-nav";
import { GRANT_WAY_MODULES } from "@/lib/grant-way-modules";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-gpc-neutral-500 px-6 py-2 text-center font-mono text-[13px] text-gpc-neutral-100">
        <b className="font-medium tracking-[0.04em] text-gpc-secondary-yellow">
          INTERNAL DRAFT
        </b>{" "}
        · GPC-only. Nothing here goes public without Grant&rsquo;s approval.
      </div>

      <TopNav active="roles" />

      <main className="mx-auto max-w-[900px] px-6 pt-11 pb-20">
        <nav className="mb-6 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
          <a href="/roles/process-consulting" className="hover:text-foreground hover:underline">
            Process Consulting
          </a>{" "}
          / The Grant Way
        </nav>

        <header className="mb-11 border-b border-border pb-8">
          <div className="mb-4 font-mono text-[11.5px] tracking-[0.2em] text-muted-foreground uppercase">
            Process Consulting · The Grant Way
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-normal tracking-tight">
            The Grant Way, for this role
          </h1>
          <p className="mt-5 max-w-[64ch] text-[17px] leading-relaxed text-muted-foreground">
            Grant personally does every role at GPC at some point, and each role
            track gets its own doorway into the part of the Grant Way that
            shows how he does it. For Process Consulting, that&rsquo;s the
            whole playbook today: every module so far comes from Grant running
            this exact role. As Grant&rsquo;s method for other roles gets
            documented, they&rsquo;ll get their own version of this page.
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GRANT_WAY_MODULES.map((m) => (
              <a key={m.num} href={m.href} className="block h-full">
                <div
                  className={`relative flex h-full flex-col gap-2 border bg-card px-5 py-4 transition-colors hover:border-gpc-primary-red ${
                    m.flagship ? "border-foreground" : "border-border"
                  }`}
                >
                  {m.badge && (
                    <span className="absolute -top-2.5 right-4 rounded-sm bg-gpc-primary-red px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-gpc-neutral-100">
                      {m.badge}
                    </span>
                  )}
                  <span className="font-mono text-xs font-semibold text-muted-foreground">
                    {m.num}
                  </span>
                  <h3 className="font-display text-xl font-normal">{m.title}</h3>
                  <p className="text-[14.5px] leading-snug text-muted-foreground">
                    {m.blurb}
                  </p>
                  <span className="mt-auto pt-2 font-mono text-[11px] font-semibold tracking-[0.08em] text-gpc-primary-red uppercase">
                    Open module →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-14 border-t border-foreground pt-6">
          <p className="max-w-[60ch] text-[13.5px] text-muted-foreground">
            This is the only doorway into these modules: The Grant Way isn&rsquo;t
            a company-wide tab, since every module so far is sourced from Grant
            running this exact role. Each module&rsquo;s own page still lives at
            its own URL under <code className="rounded-sm bg-secondary px-1.5 py-0.5 font-mono text-[12px]">/grant-way/&lt;module&gt;</code>,
            so existing links keep working.
          </p>
        </footer>
      </main>
    </div>
  );
}
