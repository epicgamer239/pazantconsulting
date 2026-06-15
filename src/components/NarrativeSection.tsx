import Image from "next/image";
import { ContentCard, FieldLabel } from "@/components/ContentCard";
import { cn } from "@/lib/utils";

interface NarrativeSectionProps {
  capabilities: { label: string; description: string }[];
  whoWeServe: string[];
  howWeWork: string[];
  clientOutcomes: string[];
}

export default function NarrativeSection({
  capabilities,
  whoWeServe,
  howWeWork,
  clientOutcomes,
}: NarrativeSectionProps) {
  return (
    <div className="flex flex-col gap-[var(--space-block)]">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <ContentCard padding="none" className="lg:col-span-5">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
              alt="Leadership team reviewing operating structure and decision pathways"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="border-t border-border bg-surface px-5 py-4 md:px-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Federal growth demands structure behind the work — not just more effort from
              talented teams.
            </p>
          </div>
        </ContentCard>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <ContentCard>
            <p className="font-serif text-[clamp(1.375rem,2.5vw,1.875rem)] font-semibold leading-snug text-foreground">
              I help leaders build the institutional readiness that allows people to do their
              best work with confidence.
            </p>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              There are moments when organizations feel stuck — when talented, committed people
              are working hard, yet progress feels slow, decisions feel unclear, or the path
              forward feels more complicated than it should.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Through governance, operating rhythms, and decision pathways, I support leaders
              during transition, growth, or strategic change.
            </p>
          </ContentCard>

          <ContentCard>
            <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
              <div>
                <FieldLabel>Who I serve</FieldLabel>
                <ul className="mt-2 space-y-1.5">
                  {whoWeServe.map((item) => (
                    <li key={item} className="text-sm font-medium leading-snug text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <FieldLabel>How we work</FieldLabel>
                <ul className="mt-2 space-y-1.5">
                  {howWeWork.map((item) => (
                    <li key={item} className="text-sm font-medium leading-snug text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <FieldLabel>Client outcomes</FieldLabel>
                <ul className="mt-2 space-y-1.5">
                  {clientOutcomes.map((item) => (
                    <li key={item} className="text-sm leading-snug text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 border-t border-border pt-6 font-serif text-base font-semibold leading-snug text-foreground md:text-lg">
              Selective engagements for founders who want clarity and readiness — not noise.
            </p>
          </ContentCard>
        </div>
      </div>

      <div className="rounded-lg bg-teal/[0.06] p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4 lg:self-start">
            <FieldLabel>What we strengthen</FieldLabel>
            <h3 className="mt-2 font-serif text-xl font-semibold text-foreground md:text-2xl">
              Core capabilities
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The institutional systems small federal contractors need to compete, partner with
              primes, and deliver with confidence.
            </p>
          </div>

          <div className="panel lg:col-span-8">
            <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {capabilities.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex flex-col p-5 md:p-6",
                    index >= 2 && "sm:border-t sm:border-border"
                  )}
                >
                  <span className="text-sm font-semibold tabular-nums text-teal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 font-semibold text-foreground">{item.label}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
