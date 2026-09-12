import Link from "next/link";
import { ArrowUpRight, Factory, Ruler, Settings2 } from "lucide-react";
import { machinesList } from "@/lib/company";

const capabilities = [
  {
    title: "Broach Manufacturing",
    text: "Flat and round broaches across key, surface, spline, across-flat, double-D, hexagonal and special profiles.",
    icon: Settings2,
  },
  {
    title: "Broach Resharpening",
    text: "Four dedicated re-sharpening / regrinding machines, including equipment for flat and round broaches.",
    icon: Factory,
  },
  {
    title: "Grinding Capabilities",
    text: "Cylindrical, surface and spline grinding equipment with the capacities listed in the company profile.",
    icon: Ruler,
  },
  {
    title: "Contract Broaching",
    text: "Contract broaching is included in the company's product and service portfolio for customer requirements.",
    icon: ArrowUpRight,
  },
];

export function ManufacturingFlow() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Manufacturing Capabilities</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              A specialized setup for broach and tooling requirements
            </h2>
          </div>
          <Link href="/infrastructure" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600">
            View machinery <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
          {capabilities.map(({ title, text, icon: Icon }) => (
            <article key={title} className="bg-white p-7 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center bg-slate-900 text-amber-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <span className="font-semibold text-slate-700">Listed machine groups:</span>{" "}
          {machinesList.map((machine) => machine.name).join(" · ")}
        </div>
      </div>
    </section>
  );
}
