import Section from "@/components/Section";
import { homeComparison } from "@/lib/content";

export default function ComparisonSection() {
  const [lead, pivot, ...rest] = homeComparison.paragraphs;

  return (
    <Section band="teal-strong" title={homeComparison.title}>
      <div className="max-w-3xl space-y-6">
        <p className="text-pretty text-base leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.7]">
          {lead}
        </p>
        <p className="font-serif text-xl font-semibold leading-snug text-foreground md:text-2xl">
          {pivot}
        </p>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-[1.0625rem] md:leading-[1.7]">
          {rest.join(" ")}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
        <figure className="panel-contrast-muted p-6 md:p-8">
          <p className="text-sm font-semibold text-muted-foreground">Project management</p>
          <blockquote className="mt-4 font-serif text-lg font-semibold leading-snug text-foreground md:text-xl">
            {homeComparison.contrast.left}
          </blockquote>
        </figure>
        <figure className="panel-contrast-institutional p-6 md:p-8">
          <p className="text-sm font-semibold text-teal-light">Institutional governance</p>
          <blockquote className="mt-4 font-serif text-lg font-semibold leading-snug text-white md:text-xl">
            {homeComparison.contrast.right}
          </blockquote>
        </figure>
      </div>

      <p className="mt-10 max-w-3xl text-pretty text-base leading-relaxed text-foreground md:text-lg md:leading-[1.75]">
        {homeComparison.closing}
      </p>
    </Section>
  );
}
