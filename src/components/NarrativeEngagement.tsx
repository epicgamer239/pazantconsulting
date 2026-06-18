import { narrativeCopy } from "@/lib/content";

interface Capability {
  label: string;
  description: string;
}

interface EngagementCompactProps {
  whoWeServe: string[];
  howWeWork: string[];
  clientOutcomes: string[];
}

const groups = [
  { key: "who", title: "Who I serve" },
  { key: "how", title: "How we work" },
  { key: "outcomes", title: "Client outcomes" },
] as const;

function EngagementCompact({
  whoWeServe,
  howWeWork,
  clientOutcomes,
}: EngagementCompactProps) {
  const itemsByKey = {
    who: whoWeServe,
    how: howWeWork,
    outcomes: clientOutcomes,
  };

  return (
    <div className="panel divide-y divide-border">
      {groups.map((group) => (
        <div key={group.key} className="p-5 md:p-6">
          <h3 className="font-serif text-lg font-semibold text-foreground">{group.title}</h3>
          <ul
            className={
              group.key === "outcomes"
                ? "mt-4 grid gap-2 sm:grid-cols-2"
                : "mt-4 flex flex-wrap gap-2"
            }
          >
            {itemsByKey[group.key].map((item) => (
              <li
                key={item}
                className={
                  group.key === "outcomes"
                    ? "rounded-md bg-surface px-3 py-3 text-sm leading-snug text-foreground min-h-11 flex items-center"
                    : "inline-flex min-h-11 items-center rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground"
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CapabilitiesRow({ capabilities }: { capabilities: Capability[] }) {
  return (
    <div className="border-t border-border pt-10 lg:col-span-2">
      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {capabilities.map((item) => (
          <div key={item.label}>
            <dt className="font-serif text-base font-semibold text-foreground md:text-lg">
              {item.label}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

interface NarrativeEngagementProps {
  whoWeServe: string[];
  howWeWork: string[];
  clientOutcomes: string[];
  capabilities: Capability[];
}

export function NarrativeEngagement({
  whoWeServe,
  howWeWork,
  clientOutcomes,
  capabilities,
}: NarrativeEngagementProps) {
  return (
    <section
      id="narrative"
      className="band-surface section-padding reveal-in snap-start border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <header className="mb-10 max-w-2xl lg:mb-12">
          <h2 className="text-balance font-serif text-[clamp(1.625rem,3vw,2.375rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground">
            A Human-Centered Approach to Institutional Readiness
          </h2>
          <div className="mt-3 h-1 w-12 rounded-sm bg-brand-gold" aria-hidden />
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="prose-readable space-y-5">
            <p className="text-pretty text-base leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.7]">
              {narrativeCopy.paragraph1}
            </p>
            <p className="text-pretty text-base leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.7]">
              {narrativeCopy.paragraph2}
            </p>
          </div>

          <EngagementCompact
            whoWeServe={whoWeServe}
            howWeWork={howWeWork}
            clientOutcomes={clientOutcomes}
          />

          <CapabilitiesRow capabilities={capabilities} />
        </div>
      </div>
    </section>
  );
}
