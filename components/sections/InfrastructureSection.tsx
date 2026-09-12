import Image from "next/image";
import Link from "next/link";
import { machinesList } from "@/lib/company";

export function InfrastructureSection() {
  return (
    <section className="section-shell bg-slate-900 text-white">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow text-slate-400">Machines & Infrastructure</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
              A dedicated setup for broach manufacturing and regrinding
            </h2>
          </div>
          <Link href="/infrastructure" className="text-sm font-medium text-amber-400 hover:text-amber-300">
            Explore the machine setup →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {machinesList.map((machine) => (
            <article key={machine.name} className="overflow-hidden border border-slate-700/80 bg-slate-950/60">
              <div className="relative h-44 bg-slate-800">
                <Image src={machine.image} alt={`${machine.name} at Varad Engineering`} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-amber-400">{machine.count}</span>
                  <span className="text-right text-xs text-slate-400">{machine.makes}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{machine.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{machine.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
