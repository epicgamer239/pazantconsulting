import Image from "next/image";
import { site, founderBio } from "@/lib/content";

export default function FounderBio() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="relative aspect-[4/5] min-h-[280px]">
          <Image
            src={site.founderImageSrc}
            alt={`${founderBio.title}, founder of ${site.name}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
        </div>
        <p className="border-t border-border bg-surface px-5 py-4 text-sm leading-relaxed text-muted-foreground md:px-6">
          {founderBio.imageCaption}
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="font-serif text-[clamp(1.375rem,2.5vw,1.75rem)] font-semibold text-foreground">
            {founderBio.title}
          </h3>
          {founderBio.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="mt-4 text-pretty text-base leading-relaxed text-foreground md:text-[1.0625rem] md:leading-[1.7]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <ul className="space-y-3">
            {founderBio.credentials.map((item) => (
              <li
                key={item}
                className="marker-teal-square text-sm leading-relaxed text-foreground md:text-[0.9375rem]"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {founderBio.focusAreas.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
