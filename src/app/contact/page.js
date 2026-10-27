import ContactHero from "../../components/contact/ContactHero";
import ContactFormSection from "../../components/contact/ContactFormSection";
import ContactProcessSection from "@/components/contact/ContactProcessSection";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactFormSection />
      <ContactProcessSection />
    </main>
  );
}
