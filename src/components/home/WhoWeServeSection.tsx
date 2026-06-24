import { homeWhoWeServe } from "@/lib/content";

export default function WhoWeServeSection() {
  return (
    <div className="space-y-10">
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

      <p className="max-w-2xl text-pretty text-base leading-relaxed text-foreground md:text-lg">
        {homeWhoWeServe.closing}
      </p>
    </div>
  );
}
