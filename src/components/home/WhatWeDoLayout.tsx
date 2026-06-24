import Button from "@/components/Button";
import { homeWhatWeDo } from "@/lib/content";

export default function WhatWeDoLayout() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="max-w-xl">
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.75]">
          {homeWhatWeDo.subtitle}
        </p>
        <p className="text-sm font-semibold text-muted-foreground">{homeWhatWeDo.groundedInLabel}</p>
        <ul className="mt-4 space-y-3">
          {homeWhatWeDo.groundedIn.map((item) => (
            <li
              key={item}
              className="marker-dash text-sm leading-relaxed text-foreground md:text-[0.9375rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-center gap-8 lg:pl-4">
        <blockquote className="border-t-2 border-brand-gold pt-6">
          <p className="text-pretty font-serif text-xl font-semibold leading-snug text-foreground md:text-2xl md:leading-[1.35]">
            &ldquo;{homeWhatWeDo.closing}&rdquo;
          </p>
        </blockquote>
        <Button href={homeWhatWeDo.cta.href} variant="secondary" className="w-fit">
          {homeWhatWeDo.cta.label}
        </Button>
      </div>
    </div>
  );
}
