import type { Metadata } from "next";
import Button from "@/components/Button";
import ComparisonSection from "@/components/ComparisonSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import WhyClientsSection from "@/components/home/WhyClientsSection";
import Hero from "@/components/Hero";
import WhatWeDoLayout from "@/components/home/WhatWeDoLayout";
import Section from "@/components/Section";
import ServiceOverviewGrid from "@/components/ServiceOverviewGrid";
import {
  homeCoreServices,
  homeFinalCta,
  homeHero,
  homeWhatWeDo,
  homeWhoWeServe,
  homeWhyClients,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Governance-forward advisory for mission-driven organizations — institutional readiness, operating models, and decision systems.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        title={homeHero.title}
        subtitle={homeHero.subtitle}
        primaryCta={homeHero.primaryCta}
        secondaryCta={homeHero.secondaryCta}
        imageSrc={homeHero.imageSrc}
        imageAlt={homeHero.imageAlt}
      />

      <Section title={homeWhatWeDo.title}>
        <WhatWeDoLayout />
      </Section>

      <ComparisonSection />

      <Section band="surface" title={homeCoreServices.title}>
        <ServiceOverviewGrid services={homeCoreServices.services} />
        <div className="mt-10">
          <Button href={homeCoreServices.cta.href} variant="teal">
            {homeCoreServices.cta.label}
          </Button>
        </div>
      </Section>

      <Section title={homeWhoWeServe.title}>
        <WhoWeServeSection />
      </Section>

      <Section band="surface" title={homeWhyClients.title}>
        <WhyClientsSection />
      </Section>

      <Section dark size="cta" title={homeFinalCta.title} subtitle={homeFinalCta.subtitle}>
        <div className="flex flex-wrap gap-4">
          <Button
            href={homeFinalCta.primaryCta.href}
            className="bg-white text-primary hover:bg-white/90"
          >
            {homeFinalCta.primaryCta.label}
          </Button>
          <Button
            href={homeFinalCta.secondaryCta.href}
            variant="secondary"
            className="border-white/35 bg-white/5 text-white hover:bg-white/10"
          >
            {homeFinalCta.secondaryCta.label}
          </Button>
        </div>
      </Section>
    </>
  );
}
