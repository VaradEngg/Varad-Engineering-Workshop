import Link from "next/link";
import { company } from "@/lib/company";
import { breadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, FileText, UserCheck, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Contact Us | Varad Engineering Broach Unit Chakan",
  description:
    "Contact Varad Engineering, Mhalunge, Chakan, Pune for broach manufacturing, contract broaching and tooling requirements.",
  alternates: { canonical: "/contact" },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://" + company.domain },
  { name: "Contact", url: "https://" + company.domain + "/contact" },
]);

export default function ContactPage() {
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
            <span className="text-slate-900">Contact Us</span>
          </div>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="eyebrow">Direct Contact & Plant Location</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Discuss Your Broach & Tooling Requirement
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Contact Varad Engineering at its Broach Manufacturing Unit in Mhalunge, Chakan, Pune for broach manufacturing, contract broaching and tooling requirements.
            </p>

            {/* Official Contact Details Card */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <UserCheck className="h-5 w-5 text-amber-600 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Proprietor & Contact Person</div>
                  <div className="text-lg font-bold text-slate-900">{company.proprietor}</div>
                  <div className="text-xs text-slate-500">Varad Engineering Broach Manufacturing Unit</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <Phone className="h-5 w-5 text-amber-600 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Direct Mobile / Contact No.</div>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-lg font-bold text-amber-700 hover:text-amber-800"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <MapPin className="h-5 w-5 text-amber-600 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Works Address</div>
                  <div className="text-sm font-medium text-slate-800 leading-relaxed">
                    {company.address}, {company.city}, {company.state} - {company.pincode}, {company.country}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-slate-100">
                <FileText className="h-5 w-5 text-amber-600 mt-1 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">GST Registration</div>
                  <div className="text-sm font-mono font-bold text-slate-900">{company.gstin}</div>
                </div>
              </div>

            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
