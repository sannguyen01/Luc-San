import type { Metadata } from "next";
import { PageContainer, NarrowSection } from "@/components/layout/Layout";
import { TextBlock } from "@/components/ui/TextBlock";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Conversations develop slowly, the way good materials reveal themselves. Inquiries about objects, materials, spaces, and commissions.",
};

export default function ContactPage() {
  return (
    <PageContainer>
      <NarrowSection>
        <TextBlock align="center" narrow>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-8">
            Contact
          </h1>
          <p className="text-muted text-sm leading-relaxed mb-12">
            Conversations here develop slowly,
            the way good materials reveal themselves —
            through patience, attention, and time.
            There is no urgency. The objects will wait.
          </p>
        </TextBlock>

        <ContactForm />
      </NarrowSection>
    </PageContainer>
  );
}
