import Link from "next/link";

export function CTASection({
  title,
  description,
  buttonText,
  href,
}: {
  title: string;
  description?: string;
  buttonText: string;
  href: string;
}) {
  return (
    <section className="section-shell bg-slate-900 text-white">
      <div className="container-shell">
        <div className="rounded-3xl border border-slate-700 bg-slate-950/70 px-6 py-12 md:px-10 lg:px-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow text-slate-400">Partnership</span>
              <h2 className="mt-4 text-3xl md:text-4xl">{title}</h2>
              {description ? (
                <p className="mt-4 text-slate-300">{description}</p>
              ) : null}
            </div>
            <Link
              href={href}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3.5 text-sm font-medium text-slate-900 hover:bg-slate-200"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
