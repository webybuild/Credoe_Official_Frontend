import ClientSuccessSection from "@/components/home/ClientSuccessSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import HeroSection from "@/components/home/HeroSection";
import ProcessSection from "@/components/home/ProcessSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import ServiceSection from "@/components/home/ServiceSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050A18] text-white">
      <HeroSection />
      <ServiceSection />
      <ClientSuccessSection />
      <ProcessSection />
      <ResourcesSection />
      <ContactCTASection />
    </main>
  );
}
