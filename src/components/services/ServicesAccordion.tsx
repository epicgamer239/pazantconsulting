import Button from "@/components/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { serviceDetails } from "@/lib/content";

type ServiceDetail = (typeof serviceDetails)[number];

interface ServicesAccordionProps {
  services: ServiceDetail[];
}

export default function ServicesAccordion({ services }: ServicesAccordionProps) {
  return (
    <Accordion className="panel divide-y divide-border">
      {services.map((service, index) => (
        <AccordionItem key={service.id} value={service.id} id={service.id} className="border-0 px-0">
          <AccordionTrigger className="px-6 py-5 hover:no-underline md:px-8 md:py-6">
            <span className="flex items-start gap-5 text-left">
              <span className="mt-0.5 shrink-0 font-semibold tabular-nums text-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-serif text-base font-semibold text-foreground md:text-lg">
                  {service.title}
                </span>
                <span className="mt-1 block text-sm font-normal leading-relaxed text-muted-foreground">
                  {service.description}
                </span>
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 md:px-8 md:pb-8">
            <div className="ml-10 border-t border-border pt-5 md:ml-12">
              <p className="text-sm font-semibold text-muted-foreground">Deliverables</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/contact#consultation" variant={index % 2 === 0 ? "primary" : "teal"} className="mt-6">
                {service.cta}
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
