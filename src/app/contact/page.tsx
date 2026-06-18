import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import PageShell from "@/components/PageShell";
import ContactHashScroll from "@/components/contact/ContactHashScroll";
import ContactPanel from "@/components/contact/ContactPanel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pazant Consulting Services. Book a consultation or request more information.",
};

export default function ContactPage() {
  return (
    <PageShell id="consultation" snap className="page-shell-contact">
      <ContactHashScroll />
      <div className="flex min-h-0 flex-1 flex-col gap-5 md:gap-6">
        <PageIntro
          embedded
          slim
          srOnlyLabel="Contact"
          title="Strengthening Organizations for Lasting Success"
        />
        <div className="flex min-h-0 flex-1 flex-col">
          <ContactPanel embedded />
        </div>
      </div>
    </PageShell>
  );
}
