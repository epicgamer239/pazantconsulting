import { aboutIntro } from "@/lib/content";

export default function AboutIntroLayout() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div className="max-w-xl space-y-5">
        {aboutIntro.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 40)}
            className={
              index === 0
                ? "text-pretty text-base leading-relaxed text-foreground md:text-lg md:leading-[1.75]"
                : "text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.75]"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-8 lg:border-l lg:border-border lg:pl-10">
        <div>
          <p className="text-sm font-semibold text-muted-foreground">
            We partner with leaders navigating
          </p>
          <ul className="mt-4">
            {aboutIntro.navigates.map((item) => (
              <li
                key={item}
                className="list-row marker-check-badge text-sm font-medium leading-relaxed text-foreground md:text-[0.9375rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-pretty text-base leading-relaxed text-foreground md:text-lg">
          {aboutIntro.closing}
        </p>
      </div>
    </div>
  );
}
