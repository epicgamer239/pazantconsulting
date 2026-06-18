import { NarrativeEngagement } from "@/components/NarrativeEngagement";
import Button from "@/components/Button";
import CalloutPanel from "@/components/CalloutPanel";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import StrengthsList from "@/components/StrengthsList";
import GroundingGrid from "@/components/GroundingGrid";
import ServiceGrid from "@/components/ServiceGrid";
import {
  clientOutcomes,
  coreServices,
  groundedIn,
  howWeWork,
  narrativeCapabilities,
  site,
  whoWeServe,
  whyClientsChooseHome,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Governance-Forward Advisory for Small Federal Contractors"
        subtitle="Strengthening the operating structures, decision-making systems, and institutional readiness small businesses need to compete and grow in the federal marketplace."
        primaryCta={{ label: "Book a Consultation", href: "/contact#consultation" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      <NarrativeEngagement
        whoWeServe={whoWeServe}
        howWeWork={howWeWork}
        clientOutcomes={clientOutcomes}
        capabilities={narrativeCapabilities}
      />

      <Section
        headerWide
        title="We Build the Infrastructure Behind Federal Growth"
        subtitle={`${site.name} helps small federal contractors build the governance, operating models, and organizational discipline required to win and deliver federal work.`}
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.9fr] lg:items-start lg:gap-16">
          <GroundingGrid items={groundedIn} />
          <div className="flex flex-col gap-10 lg:sticky lg:top-24">
            <CalloutPanel
              variant="inline"
              lines={[
                "We don't write proposals.",
                "We build the institutional maturity that makes winning possible.",
              ]}
            />
            <Button href="/about" variant="secondary">
              Learn How We Work
            </Button>
          </div>
        </div>
      </Section>

      <Section band="surface" title="Advisory Built for Federal Growth">
        <ServiceGrid services={coreServices} />
        <div className="mt-10">
          <Button href="/services" variant="teal">
            View All Services
          </Button>
        </div>
      </Section>

      <Section title="Advisory That Reduces Risk and Strengthens Readiness">
        <StrengthsList items={whyClientsChooseHome} />
      </Section>

      <Section
        band="teal"
        size="cta"
        title="Strengthen Your Federal Strategy"
        subtitle="Let's build the governance, structure, and readiness your business needs to compete with confidence."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contact#consultation">Book a Consultation</Button>
        </div>
      </Section>
    </>
  );
}
