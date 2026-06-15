import type { Metadata } from "next";
import Button from "@/components/Button";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import ServicesFoundation from "@/components/services/ServicesFoundation";
import TypographicCallout from "@/components/services/TypographicCallout";
import ServicesAccordion from "@/components/services/ServicesAccordion";
import ServicesWhyPanel from "@/components/services/ServicesWhyPanel";
import { serviceDetails, servicesWhyChooseBrief, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Governance-forward advisory services for small federal contractors — readiness infrastructure, procurement governance, BD maturity, and more.",
};

const servicesGroundedIn = [
  "Director-level organizational effectiveness expertise",
  "Senior SBA advisory experience",
  "SBLO experience inside a major federal prime",
  "Executive Certificate in AI Strategy — MIT Sloan & MIT CSAIL",
  "Deep understanding of federal procurement and compliance",
  "A governance-forward, strategically grounded approach",
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Six Advisory Practices Built for Federal Growth"
        subtitle={`${site.name} strengthens the internal systems, decision-making structures, and organizational discipline small federal contractors need to grow with confidence.`}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contact#consultation">Book a Consultation</Button>
          <Button href="#services-list" variant="secondary">
            View Services
          </Button>
        </div>
      </PageIntro>

      <Section title="Our Foundation" subtitle="The expertise behind every engagement.">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.85fr] lg:items-start lg:gap-12">
          <ServicesFoundation items={servicesGroundedIn} />
          <TypographicCallout
            className="lg:sticky lg:top-24"
            lines={[
              "We don't write proposals.",
              "We build the institutional maturity that makes winning — and delivering — possible.",
            ]}
          />
        </div>
      </Section>

      <Section
        id="services-list"
        band="surface"
        size="spacious"
        className="scroll-mt-24"
        title="Advisory Services"
        subtitle="Expand any service to review deliverables and next steps."
      >
        <ServicesAccordion services={serviceDetails} />
      </Section>

      <Section
        size="compact"
        title="Why Clients Choose Pazant Consulting"
        subtitle="Executive-level clarity grounded in federal, prime-contractor, and organizational effectiveness experience."
      >
        <ServicesWhyPanel
          lead={servicesWhyChooseBrief.lead}
          groups={servicesWhyChooseBrief.groups}
        />
      </Section>
    </>
  );
}
