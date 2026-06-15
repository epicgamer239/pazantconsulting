import Button from "@/components/Button";
import { site } from "@/lib/content";

interface AboutHeroProps {
  credentials: { label: string; detail: string }[];
}

export default function AboutHero({ credentials }: AboutHeroProps) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:min-h-[min(420px,52vh)] lg:grid-cols-12 lg:gap-8 lg:py-10">
          <div className="flex flex-col justify-center py-10 lg:col-span-7 lg:py-8">
            <h1 className="max-w-2xl text-balance font-serif text-[clamp(2rem,4vw,2.875rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground">
              A selective advisory practice for federal contractors
            </h1>
            <div className="mt-4 h-1 w-12 rounded-sm bg-brand-gold" aria-hidden />
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {site.name} helps small federal contractors build the internal systems,
              decision-making structures, and organizational discipline required to grow in
              the federal marketplace.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground">
              For founders and executive teams who want clarity, structure, and readiness —{" "}
              <span className="font-semibold text-brand-gold">not noise.</span>
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#founder">Meet the Founder</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>

          <div className="panel flex flex-col justify-center bg-primary px-6 py-8 text-primary-foreground lg:col-span-5 lg:px-8 lg:py-10">
            <p className="text-sm font-semibold text-brand-gold-light">
              Led by {site.founder}
            </p>
            <p className="mt-4 font-serif text-xl font-semibold leading-snug md:text-2xl">
              Director-level organizational effectiveness and federal program insight.
            </p>
            <dl className="mt-8 divide-y divide-white/15 border-t border-white/15">
              {credentials.map(({ label, detail }) => (
                <div key={label} className="py-4 first:pt-5">
                  <dt className="font-semibold text-white">{label}</dt>
                  <dd className="mt-1 text-sm text-white/75">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
