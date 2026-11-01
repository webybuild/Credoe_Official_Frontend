import executiveSearch from "@/data/services/executiveSearch";

import ServiceHero from "@/components/services/ServiceHero";
import ServiceChallenge from "@/components/services/ServiceChallenge";
import ServiceApproach from "@/components/services/ServiceApproach";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceImpact from "@/components/services/ServiceImpact";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function ExecutiveSearchPage() {
  return (
    <>
      <ServiceHero {...executiveSearch} />

      <ServiceChallenge {...executiveSearch.challenge} />

      <ServiceApproach {...executiveSearch.approach} />

      <ServiceProcess {...executiveSearch.process} />

      <ServiceImpact {...executiveSearch.impact} />

      <ServiceCTA {...executiveSearch.cta} />
    </>
  );
}
