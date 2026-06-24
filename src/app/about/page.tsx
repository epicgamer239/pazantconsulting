import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutIntroLayout from "@/components/about/AboutIntroLayout";
import ApproachPillars from "@/components/about/ApproachPillars";
import DeliverablesMission from "@/components/about/DeliverablesMission";
import FounderBio from "@/components/about/FounderBio";
import NarrativeTimeline from "@/components/about/NarrativeTimeline";
import Button from "@/components/Button";
import Section from "@/components/Section";
import {
  aboutApproach,
  aboutDeliverables,
  aboutFinalCta,
  aboutIntro,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "A governance-forward approach to organizational readiness. Learn about Pazant Consulting Services and founder Alecia Pazant.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <Section title={aboutIntro.title}>
        <AboutIntroLayout />
      </Section>

      <Section band="teal" title="Narrative Positioning Statement">
        <NarrativeTimeline />
      </Section>

      <Section id="founder" title="Founder Bio">
        <FounderBio />
      </Section>

      <Section band="surface" title={aboutApproach.title}>
        <ApproachPillars
          subtitle={aboutApproach.subtitle}
          approachLead={aboutApproach.approachLead}
          pillars={aboutApproach.pillars}
          closing={aboutApproach.closing}
        />
      </Section>

      <Section band="teal-strong" size="cta" title={aboutDeliverables.title}>
        <DeliverablesMission
          items={aboutDeliverables.items}
          cta={aboutDeliverables.cta}
        />
      </Section>

      <Section dark size="cta" title={aboutFinalCta.title} subtitle={aboutFinalCta.subtitle}>
        <Button
          href={aboutFinalCta.primaryCta.href}
          className="bg-white text-primary hover:bg-white/90"
        >
          {aboutFinalCta.primaryCta.label}
        </Button>
      </Section>
    </>
  );
}
