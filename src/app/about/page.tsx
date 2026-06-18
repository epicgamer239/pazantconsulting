import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Section from "@/components/Section";
import FounderProfile from "@/components/about/FounderProfile";
import ApproachPillars from "@/components/about/ApproachPillars";
import DeliverablesMission from "@/components/about/DeliverablesMission";
import { founderCredentials, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "A governance-forward approach to federal growth. Learn about Pazant Consulting Services and founder Alecia Pazant Hall.",
};

const founderGrounding = [
  "Organizational effectiveness and operating model design",
  "Governance and decision-making systems",
  "Federal small business program insight",
  "Prime-contractor subcontracting and compliance expectations",
  "AI governance and strategic implications informed by MIT Sloan & CSAIL training",
  "Risk, accountability, and institutional readiness",
];

const approach = [
  { label: "Strategic", desc: "Grounded in federal and organizational realities" },
  { label: "Governance-forward", desc: "Focused on systems, not shortcuts" },
  { label: "Operationally grounded", desc: "Informed by real-world delivery environments" },
  { label: "Executive-level", desc: "Built for leaders making consequential decisions" },
  { label: "Future-ready", desc: "Aligned with emerging AI and compliance expectations" },
];

const deliverables = [
  "Build internal systems that signal readiness",
  "Strengthen governance and decision-making",
  "Mature BD and capture discipline",
  "Navigate subcontracting and compliance expectations",
  "Improve organizational alignment and performance",
  "Prepare for AI-era federal requirements",
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <Section title="About Pazant Consulting Services">
        <div className="max-w-2xl space-y-8">
          <p className="text-pretty text-lg leading-[1.8] text-muted-foreground md:text-xl md:leading-[1.75]">
            {site.name} is a selective, governance-forward advisory practice that helps small
            federal contractors build the internal systems, decision-making structures, and
            organizational discipline required to grow in the federal marketplace.
          </p>
          <p className="text-lg leading-relaxed text-foreground md:text-xl">
            We work with founders and executive teams who want clarity, structure, and readiness
            — <span className="font-semibold text-brand-gold">not noise.</span>
          </p>
        </div>
      </Section>

      <Section
        id="founder"
        band="surface"
        title={site.founderFullName}
        subtitle="Director-level Organizational Effectiveness & Strategic Operations Leader"
      >
        <FounderProfile credentials={founderCredentials} grounding={founderGrounding} />
      </Section>

      <Section title="A Different Kind of Advisory Practice" subtitle="Our approach is:">
        <ApproachPillars items={approach} />
      </Section>

      <Section band="teal" size="cta" title="Institutional Maturity That Enables Federal Growth" subtitle="We help organizations:">
        <DeliverablesMission items={deliverables} />
      </Section>
    </>
  );
}
