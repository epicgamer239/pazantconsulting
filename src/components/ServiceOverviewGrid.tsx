import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContentCard } from "@/components/ContentCard";
import { cn } from "@/lib/utils";

interface ServiceOverview {
  title: string;
  description: string;
  href: string;
}

interface ServiceOverviewGridProps {
  services: ServiceOverview[];
}

export default function ServiceOverviewGrid({ services }: ServiceOverviewGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
      {services.map((service) => (
        <ContentCard key={service.title} interactive className="flex h-full flex-col">
          <Link
            href={service.href}
            className="group -m-6 flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:-m-8 md:p-8"
          >
            <h3 className="font-serif text-lg font-semibold leading-snug text-foreground md:text-xl">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <span
              className={cn(
                "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal",
                "group-hover:text-teal-dark"
              )}
            >
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
        </ContentCard>
      ))}
    </div>
  );
}
