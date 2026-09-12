import Link from "next/link";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "Industries",
  description:
    "Varad Engineering serves various sectors of the mechanical industry with high-precision broach and tooling solutions.",
  alternates: { canonical: "/industries" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Industries", url: "https://" + company.domain + "/industries" },
]);

const industries = [
  { title: "Mechanical Industry", text: "High-precision tooling solutions developed to fulfill mechanical industry requirements." },
  { title: "Automotive & Drivetrain", text: "Broach and tooling requirements represented across the company's customer base and product applications." },
  { title: "Gear & Transmission", text: "Broach and inspection capabilities relevant to spline, keyway and gear-related manufacturing requirements." },
  { title: "Domestic & Export Market", text: "The company's mission includes meeting customer aspirations in both domestic and export markets." },
];

export default function IndustriesPage() {
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
            <span className="text-slate-900">Industries</span>
          </div>
        </nav>

        <div className="mt-8 max-w-3xl">
          <span className="eyebrow">Industries</span>
          <h1 className="mt-4 text-4xl md:text-5xl">
            Application-driven manufacturing across core industrial sectors
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Varad Engineering was established to serve various sectors of the mechanical industry with high-precision tooling and complete tooling solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {industries.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
