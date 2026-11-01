import ServiceHero from "@/components/services/ServiceHero";
import ServiceChallenge from "@/components/services/ServiceChallenge";
import ServiceApproach from "@/components/services/ServiceApproach";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceImpact from "@/components/services/ServiceImpact";
import ServiceCTA from "@/components/services/ServiceCTA";

import leadershipCoaching from "@/data/services/leadershipCoaching";

export default function LeadershipCoachingPage() {
  return (
    <>
      <ServiceHero {...leadershipCoaching} />

      <ServiceChallenge {...leadershipCoaching.challenge} />

      <ServiceApproach {...leadershipCoaching.approach} />

      <ServiceProcess {...leadershipCoaching.process} />

      <ServiceImpact {...leadershipCoaching.impact} />

      <ServiceCTA {...leadershipCoaching.cta} />
    </>
  );
}
