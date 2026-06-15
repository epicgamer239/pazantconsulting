import Image from "next/image";
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
    <section className="border-b border-border">
      <div className="grid lg:min-h-[min(68vh,620px)] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-12 lg:px-8 lg:py-16">
          <h1 className="max-w-xl text-balance font-serif text-[clamp(2.125rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
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
        </div>

        <div className="relative min-h-[280px] sm:min-h-[320px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Modern office towers representing institutional federal advisory"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
