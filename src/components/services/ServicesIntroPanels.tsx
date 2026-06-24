import { servicesIntro } from "@/lib/content";

export default function ServicesIntroPanels() {
  return (
    <div className="services-intro-panels max-w-4xl">
      <div className="services-intro-panel">
        <p className="text-pretty text-base leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.7]">
          {servicesIntro.lead}
        </p>
      </div>

      <div className="services-intro-panel">
        <p className="font-serif text-xl font-semibold leading-snug text-foreground md:text-2xl">
          {servicesIntro.pivot}
        </p>
      </div>

      <div className="services-intro-panel">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-[1.0625rem] md:leading-[1.7]">
          {servicesIntro.body}
        </p>
      </div>
    </div>
  );
}
