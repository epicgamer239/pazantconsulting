import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Section from "@/components/Section";
import FounderProfile from "@/components/about/FounderProfile";
import ApproachPillars from "@/components/about/ApproachPillars";
import DeliverablesMission from "@/components/about/DeliverablesMission";

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

const credentials = [
  { label: "Senior SBA Advisor", detail: "Presidential Appointment" },
  { label: "Former SBLO", detail: "Major Federal Prime" },
  { label: "MIT Sloan & CSAIL", detail: "AI Strategy Certificate" },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero credentials={credentials} />

      <Section
        id="founder"
        band="surface"
        size="spacious"
        className="scroll-mt-24"
        title="Alecia Pazant Hall"
        subtitle="Director-level Organizational Effectiveness & Strategic Operations Leader"
      >
        <FounderProfile grounding={founderGrounding} />
      </Section>

      <Section
        size="compact"
        title="A Different Kind of Advisory Practice"
        subtitle="Strategic, governance-forward, and built for leaders making consequential decisions."
      >
        <ApproachPillars items={approach} />
      </Section>

      <Section
        band="teal"
        title="Institutional Maturity That Enables Federal Growth"
        subtitle="We help organizations build readiness across governance, BD, compliance, and alignment."
      >
        <DeliverablesMission items={deliverables} />
      </Section>
    </>
  );
}
