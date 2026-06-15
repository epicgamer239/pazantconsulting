import { Mail, Phone, MapPin } from "lucide-react";
import Button from "@/components/Button";
import { site } from "@/lib/content";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Service area",
    value: "Federal contractors nationwide",
    href: undefined,
  },
];

export default function ContactPanel() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-8 lg:py-10">
      <div className="panel">
        <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="px-6 py-8 md:px-8">
              <Icon className="h-5 w-5 text-teal" aria-hidden />
              <p className="mt-4 text-sm font-semibold text-muted-foreground">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-2 block text-base font-semibold text-foreground transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-sm"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-2 text-base font-semibold text-foreground">{value}</p>
              )}
            </div>
          ))}
        </div>

        <div
          id="consultation"
          className="border-t border-border bg-surface px-6 py-8 md:px-8 md:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10"
        >
          <div className="max-w-xl">
            <h2 className="font-serif text-xl font-semibold text-foreground md:text-2xl">
              Book a consultation
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether you&apos;re preparing for federal growth, strengthening governance, or
              navigating subcontracting complexity — reach out to start the conversation.
            </p>
          </div>
          <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
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
      </div>
    </div>
  );
}
