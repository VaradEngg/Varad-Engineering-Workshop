import Image from "next/image";
import Link from "next/link";
import { inspectionFacilities, qualityPolicy } from "@/lib/company";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function QualitySection() {
  return (
    <section className="section-shell bg-slate-100">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <span className="eyebrow">Quality Policy</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Quality supported by inspection and measurement
            </h2>
            <blockquote className="mt-6 border-l-4 border-amber-500 bg-white p-5 text-base leading-relaxed text-slate-700 shadow-sm">
              “{qualityPolicy.statement}”
            </blockquote>
            <p className="mt-5 text-sm leading-6 text-slate-600">{qualityPolicy.commitment}</p>
            <Link href="/quality" className="mt-7 inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
              View inspection facilities <ShieldCheck className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {inspectionFacilities.slice(0, 4).map((facility) => (
              <article key={`${facility.name}-${facility.spec}`} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="relative h-32 bg-slate-200">
                  <Image src={facility.image} alt={facility.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-slate-900">{facility.name}</h3>
                    <span className="text-[10px] font-semibold text-slate-500">{facility.spec}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{facility.details}</p>
                  <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
                    Listed inspection facility
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
