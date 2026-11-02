export const metadata = {
  title: "Schedule a Consultation | Credoe Talent",
  description:
    "Schedule a confidential consultation with Credoe Talent Solutions.",
};

export default function ScheduleConsultationPage() {
  return (
    <main className="min-h-screen bg-[#050A18]">
      {/* Page Heading */}
      <section className="px-6 pb-10 pt-36 text-center sm:pb-14 sm:pt-40">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A623]">
          Let's Start a Conversation
        </p>

        <h1 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Schedule a Consultation
        </h1>

        <div className="mx-auto mt-6 h-px w-20 bg-[#F5A623]" />

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
          Every great partnership begins with a conversation. Schedule a
          confidential consultation with our team to discuss your leadership,
          talent acquisition, or career goals.
        </p>
      </section>

      {/* Cal.com Booking Calendar */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-2xl">
          <iframe
            src="https://cal.com/webybuild-8oyipf/consultation?embed=true"
            title="Schedule a Confidential Consultation with Credoe Talent"
            width="100%"
            height="850"
            frameBorder="0"
            className="block w-full"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
