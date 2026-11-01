import ServiceHero from "@/components/services/ServiceHero";
import ServiceChallenge from "@/components/services/ServiceChallenge";
import ServiceApproach from "@/components/services/ServiceApproach";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceImpact from "@/components/services/ServiceImpact";
import ServiceCTA from "@/components/services/ServiceCTA";

import successionPlanning from "@/data/services/successionPlanning";

export default function SuccessionPlanningPage() {
  return (
    <>
      <ServiceHero {...successionPlanning} />

      <ServiceChallenge {...successionPlanning.challenge} />

      <ServiceApproach {...successionPlanning.approach} />

      <ServiceProcess {...successionPlanning.process} />

      <ServiceImpact {...successionPlanning.impact} />

      <ServiceCTA {...successionPlanning.cta} />
    </>
  );
}
