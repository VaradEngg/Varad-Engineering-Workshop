import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Ruler, Settings2, ShieldCheck } from "lucide-react";
import { company } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-stone-100">
      <div className="absolute inset-0 bg-grid bg-[size:40px_40px] opacity-40" aria-hidden="true" />
      <div className="container-shell relative grid items-center gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div>
          <span className="eyebrow">Broach Manufacturing Unit · Chakan, Pune</span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-slate-900 md:text-5xl lg:text-6xl">
            High-Precision Broach & Tooling Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Varad Engineering was established in 2018–2019 to serve the mechanical industry with high-precision tooling, complete tooling solutions, competitive pricing and minimal delivery lead time.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3.5 text-sm font-medium text-white hover:bg-slate-800">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-900 hover:bg-slate-50">
              Contact Us
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            <div className="border-l-2 border-amber-500 bg-white px-4 py-3">
              <Ruler className="h-5 w-5 text-amber-700" />
              <p className="mt-2 text-sm font-semibold text-slate-900">Flat Broaches</p>
              <p className="text-xs text-slate-500">Up to 1500 mm length</p>
            </div>
            <div className="border-l-2 border-amber-500 bg-white px-4 py-3">
              <Settings2 className="h-5 w-5 text-amber-700" />
              <p className="mt-2 text-sm font-semibold text-slate-900">Round Broaches</p>
              <p className="text-xs text-slate-500">Up to 200 mm dia × 2000 mm</p>
            </div>
            <div className="border-l-2 border-amber-500 bg-white px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-amber-700" />
              <p className="mt-2 text-sm font-semibold text-slate-900">Inspection</p>
              <p className="text-xs text-slate-500">CNC gear testing & metrology</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-soft">
            <div className="relative h-[420px] overflow-hidden rounded-xl bg-slate-950">
              <Image src="/images/varad/broach-hero.jpg" alt="Precision broach tooling at Varad Engineering" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white sm:inset-x-8 sm:bottom-8">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Varad Engineering</span>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Precision tooling for demanding mechanical applications</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200">{company.unitName} · Mhalunge, Chakan, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
