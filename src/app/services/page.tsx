import type { Metadata } from "next";
import Button from "@/components/Button";
import PageIntro from "@/components/PageIntro";
import Section from "@/components/Section";
import ServiceProgramCards from "@/components/services/ServiceProgramCards";
import ServicesIntroPanels from "@/components/services/ServicesIntroPanels";
import { institutionalServices, servicesHero } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Governance-forward advisory services — operating model design, institutional readiness, AI governance, executive advisory, and decision systems.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro title={servicesHero.title} subtitle={servicesHero.subtitle}>
        <Button href="/contact#consultation">Book a Consultation</Button>
      </PageIntro>

      <Section band="teal-strong">
        <ServicesIntroPanels />
      </Section>

      <Section id="services-list" band="surface" title="Core services">
        <ServiceProgramCards services={institutionalServices} />
      </Section>
    </>
  );
}
