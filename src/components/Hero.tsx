import Image from "next/image";
import Button from "@/components/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
}: HeroProps) {
  const heroImage =
    imageSrc && imageAlt ? { src: imageSrc, alt: imageAlt } : null;

  if (!heroImage) {
    return (
      <section className="hero-institutional section-viewport snap-start border-b border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-12 lg:px-8 lg:py-16">
          <HeroContent
            title={title}
            subtitle={subtitle}
            primaryCta={primaryCta}
            secondaryCta={secondaryCta}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="hero-fullbleed snap-start border-b border-border">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="hero-fullbleed-scrim" aria-hidden />

      <div className="hero-fullbleed-content">
        <div className="w-full max-w-xl">
          <HeroContent
            title={title}
            subtitle={subtitle}
            primaryCta={primaryCta}
            secondaryCta={secondaryCta}
          />
        </div>
      </div>
    </section>
  );
}

function HeroContent({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: Pick<HeroProps, "title" | "subtitle" | "primaryCta" | "secondaryCta">) {
  return (
    <>
      <h1 className="hero-enter text-balance font-serif text-[clamp(1.875rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground">
        {title}
      </h1>
      <div className="hero-enter hero-enter-delay-1 section-rule section-rule-teal" aria-hidden />
      {subtitle && (
        <p className="hero-enter hero-enter-delay-2 mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-[1.7]">
          {subtitle}
        </p>
      )}
      {(primaryCta || secondaryCta) && (
        <div className="hero-enter hero-enter-delay-3 mt-9 flex flex-wrap gap-4">
          {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      )}
    </>
  );
}
