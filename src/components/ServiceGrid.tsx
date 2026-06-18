import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContentCard, CardDivider, FieldLabel } from "@/components/ContentCard";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  deliverables?: string[];
}

interface ServiceGridProps {
  services: Service[];
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  const [featured, ...rest] = services;

  return (
    <div className="flex flex-col gap-6">
      {featured && (
        <ContentCard padding="none" interactive={!!featured.href} className="overflow-hidden">
          {featured.href ? (
            <Link
              href={featured.href}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <FeaturedServiceContent featured={featured} />
            </Link>
          ) : (
            <FeaturedServiceContent featured={featured} />
          )}
        </ContentCard>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {rest.map((service) => (
          <ContentCard
            key={service.title}
            interactive={!!service.href}
            className="flex h-full flex-col"
          >
            {service.href ? (
              <Link
                href={service.href}
                className="group -m-6 flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:-m-8 md:p-8"
              >
                <ServiceCardContent service={service} linked />
              </Link>
            ) : (
              <ServiceCardContent service={service} />
            )}
          </ContentCard>
        ))}
      </div>
    </div>
  );
}

function ServiceCardContent({ service, linked = false }: { service: Service; linked?: boolean }) {
  return (
    <>
      <h3 className="font-serif text-lg font-semibold leading-snug text-foreground md:text-xl">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      {service.href && (
        <span
          className={cn(
            "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal",
            linked && "group-hover:text-teal-dark"
          )}
        >
          View service details
          <ArrowRight
            className={cn("h-4 w-4", linked && "transition-transform group-hover:translate-x-0.5")}
            aria-hidden
          />
        </span>
      )}
    </>
  );
}

function FeaturedServiceContent({ featured }: { featured: Service }) {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-4 px-6 py-5 md:px-8 md:py-6">
        <div>
          <FieldLabel>Flagship practice</FieldLabel>
          <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-foreground md:text-2xl">
            {featured.title}
          </h3>
        </div>
        <span className="rounded-md bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-dark">
          Core offering
        </span>
      </div>
      <CardDivider />
      <div className="px-6 py-5 md:px-8 md:py-6">
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
          {featured.description}
        </p>
        {featured.deliverables && featured.deliverables.length > 0 && (
          <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {featured.deliverables.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-foreground">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {featured.href && (
        <>
          <CardDivider />
          <div className="px-6 py-4 md:px-8">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-semibold text-teal",
                "group-hover:text-teal-dark"
              )}
            >
              {featured.cta ?? "View service details"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </div>
        </>
      )}
    </>
  );
}
