import Image from "next/image";
import Link from "next/link";
import { company, machinesList } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { Cpu, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Machinery & Infrastructure | Varad Engineering",
  description:
    "Explore Varad Engineering's broach resharpening, cylindrical grinding, surface grinding, spline grinding, lathe and milling machine setup in Mhalunge, Chakan, Pune.",
  alternates: { canonical: "/infrastructure" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Infrastructure", url: "https://" + company.domain + "/infrastructure" },
]);

export default function InfrastructurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="container-shell section-shell">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <span className="text-slate-900">Infrastructure</span>
          </div>
        </nav>

        <div className="mt-8 max-w-4xl">
          <span className="eyebrow">Machines & Infrastructure</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Broach manufacturing, regrinding and grinding equipment
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            The Varad Engineering company profile lists a dedicated setup of broach resharpening / regrinding machines along with cylindrical, surface and spline grinding equipment, a lathe and milling machine.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-72 overflow-hidden bg-slate-900">
            <Image src="/images/varad/arthur-klink.jpg" alt="Arthur Klink broach resharpening machine" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center bg-slate-950 p-7 text-white md:p-9">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Broach Resharpening</span>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Four dedicated re-sharpening / regrinding machines</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              One machine is dedicated to flat broaches up to 1500 mm. One is dedicated to round broaches up to 200 mm diameter and 2000 mm length. The remaining two are dedicated to manufacturing new broaches.
            </p>
            <Link href="/contact" className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-amber-300 hover:text-amber-200">
              Discuss a requirement <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Cpu className="h-6 w-6 text-amber-600" /> Machine Inventory
            </h2>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">6 machine groups</span>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {machinesList.map((machine) => (
              <article key={machine.name} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="relative h-48 bg-slate-200">
                  <Image src={machine.image} alt={`${machine.name} at Varad Engineering`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-amber-700">{machine.count}</span>
                    <span className="text-right text-xs font-medium text-slate-500">{machine.makes}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{machine.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{machine.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
