import ServiceHero from "@/components/services/ServiceHero";
import ServiceChallenge from "@/components/services/ServiceChallenge";
import ServiceApproach from "@/components/services/ServiceApproach";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceImpact from "@/components/services/ServiceImpact";
import ServiceCTA from "@/components/services/ServiceCTA";

import executiveTalentMapping from "@/data/services/executiveTalentMapping";

export default function ExecutiveTalentMappingPage() {
  return (
    <>
      <ServiceHero {...executiveTalentMapping} />

      <ServiceChallenge {...executiveTalentMapping.challenge} />

      <ServiceApproach {...executiveTalentMapping.approach} />

      <ServiceProcess {...executiveTalentMapping.process} />

      <ServiceImpact {...executiveTalentMapping.impact} />

      <ServiceCTA {...executiveTalentMapping.cta} />
    </>
  );
}
