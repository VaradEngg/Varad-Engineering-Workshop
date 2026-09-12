import Link from "next/link";
import { ArrowUpRight, Cog, Cpu, Wrench } from "lucide-react";

const capabilities = [
  {
    title: "Flat Broaches",
    description:
      "Key broaches (with & without chamfer) and surface broaches engineered for flat surfaces up to 1500 mm length.",
    icon: Cog,
  },
  {
    title: "Round Broaches",
    description:
      "Combination & interspaced spline broaches, across flat, double-D, hexagonal & special profiles up to 200 mm Ø x 2000 mm.",
    icon: Cpu,
  },
  {
    title: "Contract Broaching",
    description:
      "Precision job-work and production run broaching services for internal keyways, splines, and complex profiles.",
    icon: Wrench,
  },
  {
    title: "Tooling & Resharpening",
    description:
      "Imported regrinding setup for broaches, gear shaving cutters, shaping cutters, hobs & CNC carbide tools.",
    icon: ArrowUpRight,
  },
  {
    title: "Gear & Profile Testing",
    description:
      "Advanced inspection using Hoffler ZP 260, KAPP NILES KNM 2X CNC gear testers, Profile Projectors & Slip Gauges.",
    icon: Cog,
  },
];

export function CapabilityGrid() {
  return (
    <section className="section-shell bg-slate-900 text-white">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow text-slate-400">Capabilities</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              Manufacturing support built for industrial requirements
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-slate-300"
          >
            View all products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-xl border border-slate-700 bg-slate-950/50 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
