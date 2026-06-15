import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ContactPanel from "@/components/contact/ContactPanel";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pazant Consulting Services. Book a consultation or request more information.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-[calc(100dvh-4.5rem)] flex-col lg:min-h-[calc(100dvh-5rem)]">
      <PageIntro
        slim
        compact
        title="Get in touch"
        subtitle={`${site.name} · ${site.founder}. Selective, governance-forward advisory for small federal contractors navigating growth, compliance, and institutional readiness.`}
      />

      <section className="flex flex-1 border-b border-border bg-background">
        <ContactPanel />
      </section>
    </div>
  );
}
