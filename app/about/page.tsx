import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Award, Target, Eye } from "lucide-react";
import { company, vision, mission, coreValues } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  title: "About Us | Varad Engineering Broach Manufacturing Unit",
  description:
    "Learn about Varad Engineering, incorporated in 2018-2019 by Mr. Abhishek Tayade as a specialized Broach Manufacturing Unit in Chakan, Pune.",
  alternates: { canonical: "/about" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "About", url: "https://" + company.domain + "/about" },
]);

export default function AboutPage() {
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
            <span className="text-slate-900">About Us</span>
          </div>
        </nav>

        <div className="mt-8 max-w-4xl">
          <span className="eyebrow">Company Profile</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Varad Engineering — Broach Manufacturing Unit
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Varad Engineering was incorporated in the year <strong>2018 – 2019</strong> as a sole proprietorship company owned by <strong>Mr. Abhishek Tayade</strong>. He started this firm with a vision to serve the various sectors of the mechanical industry by supplying high-precision toolings to fulfill their requirements with optimistic and economic solutions. Our mission at Varad Engineering is to provide complete tooling solutions with competitive pricing and minimal delivery lead time.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400 mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{vision.title}</h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                {vision.description}
              </p>
            </div>
            <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-700">
              {vision.bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-400 mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{mission.title}</h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                {mission.description}
              </p>
            </div>
            <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-700">
              {mission.bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Team Breakdown Section */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-stone-50 p-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">Our Team Structure</h2>
          </div>
          <p className="text-slate-600 max-w-3xl leading-relaxed">
            We have a team of highly skilled and professional personnel geared up for manufacturing of broaches, each one expertized in their field. We have <strong>11 employees in all</strong>:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <div className="text-3xl font-bold text-slate-900">{company.team.shopFloor}</div>
              <div className="text-sm font-semibold text-slate-700 mt-1">Shop Floor</div>
              <div className="text-xs text-slate-500 mt-1">Manufacturing personnel</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <div className="text-3xl font-bold text-slate-900">{company.team.salesMarketing}</div>
              <div className="text-sm font-semibold text-slate-700 mt-1">Marketing & Sales</div>
              <div className="text-xs text-slate-500 mt-1">Marketing and sales personnel</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
              <div className="text-3xl font-bold text-slate-900">{company.team.backOffice}</div>
              <div className="text-sm font-semibold text-slate-700 mt-1">Back Office</div>
              <div className="text-xs text-slate-500 mt-1">Back-office personnel</div>
            </div>
          </div>
        </div>

        {/* Our Values Grid */}
        <div className="mt-16">
          <div className="mb-8">
            <span className="eyebrow">Our Foundation</span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, idx) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-800 font-bold text-xs">
                  {idx + 1}
                </div>
                <span className="text-sm font-medium text-slate-800">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Partner with Varad Engineering Today
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300 text-base leading-relaxed">
            Located at Mhalunge, Chakan, Varad Engineering combines its broach manufacturing setup with dedicated personnel and precision grinding and inspection equipment to serve tooling requirements.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-amber-300 transition-colors"
          >
            Contact Mr. Abhishek Tayade <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
