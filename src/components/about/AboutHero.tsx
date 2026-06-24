import Button from "@/components/Button";
import ScrollToButton from "@/components/ScrollToButton";
import { aboutHero } from "@/lib/content";

export default function AboutHero() {
  return (
    <section className="hero-institutional border-b border-border section-padding-spacious snap-start">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h1 className="max-w-3xl text-balance font-serif text-[clamp(2rem,4vw,2.875rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground">
          {aboutHero.title}
        </h1>
        <div className="mt-4 h-1 w-12 rounded-sm bg-brand-gold" aria-hidden />
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.75]">
          {aboutHero.subtitle}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ScrollToButton targetId="founder">Meet the Founder</ScrollToButton>
          <Button href="/services" variant="secondary">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
