import Link from "next/link";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Manufacturing & Broach Capabilities | Varad Engineering",
  description:
    "Explore Varad Engineering's listed broach manufacturing, resharpening, grinding and tooling capabilities in Mhalunge, Chakan, Pune.",
  alternates: { canonical: "/manufacturing" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  {
    name: "Manufacturing",
    url: "https://" + company.domain + "/manufacturing",
  },
]);

const steps = [
  { title: "Flat Broaches", text: "Key broaches with and without chamfer, and surface broaches up to 1500 mm length." },
  { title: "Round Broaches", text: "Spline, across-flat, double-D, hexagonal and special profile broaches; round broach sharpening up to 200 mm diameter and 2000 mm length." },
  { title: "Contract Broaching", text: "Contract broaching is included in the company's listed product and service portfolio." },
  { title: "Broach Resharpening", text: "Four dedicated re-sharpening / regrinding machines, including dedicated flat and round broach equipment." },
  { title: "Grinding", text: "Cylindrical grinding up to 125 mm diameter and 1800 mm length; surface grinding up to 1500 mm flat broach length; spline grinding up to 125 mm diameter and 2000 mm length." },
  { title: "Tooling Support", text: "The company profile also lists tooling accessories and a sister concern engaged in carbide tooling solutions and cutter sharpening." },
];

export default function ManufacturingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="container-shell section-shell">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900">Manufacturing</span>
          </div>
        </nav>

        <div className="mt-8 max-w-3xl">
          <span className="eyebrow">Manufacturing</span>
          <h1 className="mt-4 text-4xl md:text-5xl">
            Broach manufacturing and tooling capabilities
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            The company profile lists a focused manufacturing setup covering broaches, contract broaching, re-sharpening / regrinding and grinding capabilities, supported by inspection facilities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Step {index + 1}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-700">
                  {index + 1}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold">{step.title}</h2>
              <p className="mt-3 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
