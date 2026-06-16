import NarrativeSection from "@/components/NarrativeSection";
import Button from "@/components/Button";
import CalloutPanel from "@/components/CalloutPanel";
import CredentialStrip from "@/components/CredentialStrip";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import StrengthsBrief from "@/components/StrengthsBrief";
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
  whyClientsChooseBrief,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Governance-Forward Advisory for Small Federal Contractors"
        subtitle="Strengthening the operating structures, decision-making systems, and institutional readiness small businesses need to compete and grow in the federal marketplace."
        primaryCta={{ label: "Book a Consultation", href: "/contact#consultation" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <CredentialStrip />

      <Section
        id="narrative"
        band="surface"
        size="spacious"
        title="How I Work"
        subtitle="Governance-forward advisory for leaders navigating federal growth, compliance, and institutional change."
      >
        <NarrativeSection
          capabilities={narrativeCapabilities}
          whoWeServe={whoWeServe}
          howWeWork={howWeWork}
          clientOutcomes={clientOutcomes}
        />
      </Section>

      <Section
        headerWide
        title="We Build the Infrastructure Behind Federal Growth"
        subtitle={`${site.name} helps small federal contractors build the governance, operating models, and organizational discipline required to win and deliver federal work.`}
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.9fr] lg:items-start lg:gap-12">
          <GroundingGrid items={groundedIn} />
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">
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

      <Section
        band="surface"
        title="Advisory Built for Federal Growth"
        subtitle="Six practices that strengthen governance, readiness, and delivery discipline."
      >
        <ServiceGrid services={coreServices} />
        <div className="mt-8">
          <Button href="/services" variant="teal">
            View All Services
          </Button>
        </div>
      </Section>

      <Section
        size="compact"
        title="Advisory That Reduces Risk and Strengthens Readiness"
        subtitle="Executive-level clarity grounded in federal, prime-contractor, and organizational effectiveness experience."
      >
        <StrengthsBrief
          lead={whyClientsChooseBrief.lead}
          groups={whyClientsChooseBrief.groups}
          supporting="The through-line across every engagement — institutional maturity, not one-off fixes."
        />
      </Section>

      <Section
        band="teal"
        size="cta"
        title="Strengthen Your Federal Strategy"
        subtitle="Let's build the governance, structure, and readiness your business needs to compete with confidence."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/contact#consultation">Book a Consultation</Button>
          <Button href="/services" variant="secondary">
            Explore Services
          </Button>
        </div>
      </Section>
    </>
  );
}
