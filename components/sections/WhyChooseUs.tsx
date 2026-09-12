import Image from "next/image";
import { Check, MessageSquareText, ShieldCheck, Wrench } from "lucide-react";
import { clientList } from "@/lib/company";

const reasons = [
  {
    title: "Complete Tooling Solutions",
    description:
      "A focus on complete tooling solutions with competitive pricing and minimal delivery lead time.",
    icon: Wrench,
  },
  {
    title: "High-Precision Tooling",
    description:
      "Broach manufacturing and sharpening capabilities built around the requirements of the mechanical industry.",
    icon: Check,
  },
  {
    title: "Quality Commitment",
    description:
      "A quality policy covering materials, workmanship, accuracies, timelines and service, with continual improvement through a quality system.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Team",
    description:
      "A team of 11 personnel, including 7 on the shop floor, 2 in marketing and sales, and 2 in the back office.",
    icon: MessageSquareText,
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-shell bg-white">
      <div className="container-shell">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Why Varad Engineering</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
            Built around precision, service and dependable delivery
          </h2>
          <p className="mt-3 text-slate-600">
            Varad Engineering combines a specialized broach manufacturing setup, inspection facilities and a dedicated team to support mechanical industry requirements.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map(({ title, description, icon: Icon }) => (
            <article key={title} className="border border-slate-200 bg-stone-50 p-6 shadow-sm transition-colors hover:border-amber-400">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-900 text-amber-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-slate-200 pt-16">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow">Our Customers</span>
            <h3 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Customers represented in our company profile
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The following customer names and logos are reproduced from the Varad Engineering company profile.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {clientList.map((client) => (
              <div key={client.name} className="flex min-h-28 items-center justify-center border border-slate-200 bg-white p-5">
                <Image src={client.logo} alt={client.name} width={150} height={90} className="max-h-16 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
