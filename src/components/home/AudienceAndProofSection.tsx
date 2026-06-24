import { ContentCard } from "@/components/ContentCard";
import { homeWhoWeServe, homeWhyClients } from "@/lib/content";

export default function AudienceAndProofSection() {
  return (
    <div className="space-y-14">
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {homeWhoWeServe.audiences.map((audience) => (
          <div key={audience.title} className="pillar-block">
            <h3 className="font-serif text-lg font-semibold text-foreground">{audience.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
              {audience.description}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-semibold text-foreground">
          {homeWhyClients.title}
        </h3>
        <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
          {homeWhyClients.pillars.map((pillar) => (
            <ContentCard key={pillar.title} className="flex h-full flex-col">
              <h4 className="font-serif text-lg font-semibold leading-snug text-foreground">
                {pillar.title}
              </h4>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem] md:leading-[1.65]">
                {pillar.description}
              </p>
            </ContentCard>
          ))}
        </div>
      </div>

      <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground md:text-lg">
        {homeWhoWeServe.closing}
      </p>
    </div>
  );
}
