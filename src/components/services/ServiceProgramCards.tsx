import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CardDivider, ContentCard } from "@/components/ContentCard";

interface InstitutionalService {
  id: string;
  title: string;
  summary: string;
  body: string;
  highlights: string[];
  learnMoreLabel: string;
}

export default function ServiceProgramCards({
  services,
}: {
  services: InstitutionalService[];
}) {
  return (
    <div className="space-y-6">
      {services.map((service, index) => (
        <article key={service.id} id={service.id} className="scroll-mt-24">
          <ContentCard className="stagger-enter" style={{ "--i": index } as CSSProperties}>
            <header className="program-card-header">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="value-tile-index">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-[clamp(1.25rem,2.25vw,1.625rem)] font-semibold leading-snug text-foreground">
                  {service.title}
                </h3>
              </div>
              <span className="program-badge">Advisory service</span>
            </header>

            <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {service.summary}
            </p>

            <ul className="mt-5">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="marker-check py-1.5 text-sm leading-relaxed text-foreground md:text-[0.9375rem]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <CardDivider className="my-6" />

            <p className="max-w-3xl text-pretty text-base leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.7]">
              {service.body}
            </p>

            <Link
              href="/contact#consultation"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
            >
              Learn more: {service.learnMoreLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </ContentCard>
        </article>
      ))}
    </div>
  );
}
