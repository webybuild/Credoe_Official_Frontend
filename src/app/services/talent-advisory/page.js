import ServiceHero from "@/components/services/ServiceHero";
import ServiceChallenge from "@/components/services/ServiceChallenge";
import ServiceApproach from "@/components/services/ServiceApproach";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceImpact from "@/components/services/ServiceImpact";
import ServiceCTA from "@/components/services/ServiceCTA";

import talentAdvisory from "@/data/services/talentAdvisory";

export default function TalentAdvisoryPage() {
  return (
    <>
      <ServiceHero {...talentAdvisory} />

      <ServiceChallenge {...talentAdvisory.challenge} />

      <ServiceApproach {...talentAdvisory.approach} />

      <ServiceProcess {...talentAdvisory.process} />

      <ServiceImpact {...talentAdvisory.impact} />

      <ServiceCTA {...talentAdvisory.cta} />
    </>
  );
}
