import Button from "@/components/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="section-viewport hero-institutional reveal-in snap-start border-b border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-12 lg:px-8 lg:py-16">
        <h1 className="max-w-3xl text-balance font-serif text-[clamp(2.125rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
          {title}
        </h1>
        <div className="mt-4 h-1 w-12 rounded-sm bg-brand-gold" aria-hidden />
        {subtitle && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.7]">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-wrap gap-4">
            {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
        <a
          href="#narrative"
          className="mt-10 inline-flex w-fit text-sm font-semibold text-teal transition-colors hover:text-teal-dark"
        >
          Learn more ↓
        </a>
      </div>
    </section>
  );
}
