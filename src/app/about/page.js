import AboutFounder from "@/components/about/AboutFounder";
import AboutHero from "../../components/about/AboutHero";
import PhilosophySection from "@/components/about/PhilosophySection";
import ChallengeSection from "@/components/about/ChallengeSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import TalentReadinessSection from "@/components/about/TalentReadinessSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutFounder />
      <PhilosophySection />
      <ChallengeSection />
      <TalentReadinessSection />
      <ContactCTASection />
    </main>
  );
}
