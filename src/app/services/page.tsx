import type { Metadata } from "next";
import Button from "@/components/Button";
import ScrollToButton from "@/components/ScrollToButton";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import ServicesFoundation from "@/components/services/ServicesFoundation";
import TypographicCallout from "@/components/services/TypographicCallout";
import ServicesAccordion from "@/components/services/ServicesAccordion";
import StrengthsList from "@/components/StrengthsList";
import {
  serviceDetails,
  servicesGroundedIn,
  site,
  whyClientsChooseServices,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Governance-forward advisory services for small federal contractors — readiness infrastructure, procurement governance, BD maturity, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        title="Governance-Forward Advisory for Small Federal Contractors"
        subtitle={`${site.name} is a selective, as-needed advisory practice that strengthens the internal systems, decision-making structures, and organizational discipline small federal contractors need to grow with confidence.`}
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contact#consultation">Book a Consultation</Button>
          <ScrollToButton targetId="services-list" variant="secondary">
            View Services
          </ScrollToButton>
        </div>
      </PageIntro>

      <Section title="Our Foundation" subtitle="Our work is grounded in:">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.85fr] lg:items-start lg:gap-16">
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
        title="Advisory Services"
        subtitle="Expand any service to review deliverables and next steps."
      >
        <ServicesAccordion services={serviceDetails} />
      </Section>

      <Section title="Why Clients Choose Pazant Consulting">
        <StrengthsList items={whyClientsChooseServices} />
      </Section>
    </>
  );
}
