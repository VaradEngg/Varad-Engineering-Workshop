import { Hero } from "@/components/sections/Hero";
import { CapabilityGrid } from "@/components/sections/CapabilityGrid";
import { ProductOverview } from "@/components/sections/ProductOverview";
import { ManufacturingFlow } from "@/components/sections/ManufacturingFlow";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";
import { company } from "@/lib/company";

export const metadata = {
  title: `${company.name} | High-Precision Broach & Tooling Manufacturer`,
  description:
    "Varad Engineering supplies high-precision tooling for the mechanical industry, with a focus on broach manufacturing, contract broaching and tooling solutions.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-shell bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <span className="eyebrow">About Varad Engineering</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl">
                High-precision tooling for the mechanical industry
              </h2>
            </div>
            <div>
              <p className="text-lg text-slate-600">
                Varad Engineering was incorporated in 2018–2019 as a sole proprietorship owned by Mr. Abhishek Tayade. The company was established with a vision to serve sectors of the mechanical industry with high-precision tooling and complete tooling solutions.
              </p>
              <a
                href="/about"
                className="mt-5 inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-600"
              >
                About Varad Engineering
              </a>
            </div>
          </div>
        </div>
      </section>

      <CapabilityGrid />
      <ProductOverview />
      <ManufacturingFlow />
      <IndustriesSection />
      <QualitySection />
      <InfrastructureSection />
      <WhyChooseUs />
      <CTASection
        title="Looking for a Reliable Engineering Manufacturing Partner?"
        buttonText="Discuss Your Requirement"
        href="/contact"
        description="Partner with a manufacturing-focused team that values precision, consistency and dependable communication."
      />
    </>
  );
}
