import { CarFront, Factory, Gauge, Wrench } from "lucide-react";

const industries = [
  {
    title: "Mechanical Industry",
    description: "High-precision tooling solutions developed to fulfill mechanical industry requirements.",
    icon: CarFront,
  },
  {
    title: "Automotive & Drivetrain",
    description: "Broach and tooling requirements represented across the company's customer base and applications.",
    icon: Gauge,
  },
  {
    title: "Gear & Transmission",
    description: "Broach and inspection capabilities relevant to spline, keyway and gear-related manufacturing requirements.",
    icon: Factory,
  },
  {
    title: "Domestic & Export Market",
    description: "The company's mission includes meeting customer aspirations in both domestic and export markets.",
    icon: Wrench,
  },
];

export function IndustriesSection() {
  return (
    <section className="section-shell bg-white">
      <div className="container-shell">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Industries</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
            Application-focused manufacturing for core industrial sectors
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {industries.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-stone-50 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-3 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
