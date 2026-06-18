import { Mail, Phone } from "lucide-react";
import Button from "@/components/Button";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ContactPanelProps {
  embedded?: boolean;
  className?: string;
}

export default function ContactPanel({ embedded = false, className }: ContactPanelProps) {
  const panel = (
    <div className={cn("panel flex min-h-0 flex-1 flex-col overflow-hidden", className)}>
      <div className="grid min-h-0 flex-1 lg:grid-cols-2 lg:divide-x lg:divide-border">
        <div className="order-1 flex flex-col justify-center bg-surface px-5 py-6 md:px-8 md:py-8 lg:order-2">
          <h2 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
            Book a consultation
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base md:leading-[1.65]">
            Whether you&apos;re preparing for federal growth, strengthening governance, or
            navigating subcontracting complexity — reach out to start the conversation.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={`mailto:${site.email}?subject=Consultation%20Request`}>
              Book a Consultation
            </Button>
            <Button
              href={`mailto:${site.email}?subject=Information%20Request`}
              variant="secondary"
            >
              Request More Information
            </Button>
          </div>
        </div>

        <div className="order-2 flex min-h-0 flex-1 flex-col divide-y divide-border lg:order-1">
          <div className="flex flex-col justify-center px-5 py-6 md:px-8 md:py-8">
            <p className="text-sm font-semibold text-muted-foreground">Contact information</p>
            <p className="mt-3 font-serif text-xl font-semibold text-foreground md:text-2xl">
              {site.name}
            </p>
            <p className="mt-2 text-base font-semibold text-foreground md:text-lg">
              {site.founder}
            </p>
          </div>

          <div className="grid flex-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="flex flex-col justify-center px-5 py-6 md:px-8">
              <Mail className="h-5 w-5 text-teal" aria-hidden />
              <p className="mt-3 text-sm font-semibold text-muted-foreground">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-base font-semibold text-foreground transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm md:text-lg"
              >
                {site.email}
              </a>
            </div>
            <div className="flex flex-col justify-center px-5 py-6 md:px-8">
              <Phone className="h-5 w-5 text-teal" aria-hidden />
              <p className="mt-3 text-sm font-semibold text-muted-foreground">Phone</p>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="mt-2 block text-base font-semibold text-foreground transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm md:text-lg"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return panel;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-8 lg:py-12">{panel}</div>
  );
}
