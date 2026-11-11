import Link from "next/link";

const PDF_PATH = "/docs/terms-of-service.pdf";
const PDF_FILENAME = "Credoe-Terms-of-Service.pdf";

const sections = [
  {
    id: "website-use",
    title: "Use of Our Website",
    paragraphs: [
      "Visitors agree to use this website for lawful purposes and in a manner that does not interfere with its operation, security, or accessibility.",
      "You may not use this website to distribute malicious software, misrepresent your identity, obtain unauthorized access to information, or engage in activities that violate applicable laws.",
    ],
  },
  {
    id: "professional-services",
    title: "Professional Services",
    paragraphs: ["Credoe provides professional services that may include:"],
    bullets: [
      "Executive search and leadership recruitment.",
      "Talent acquisition strategy and consulting.",
      "Workforce and succession planning.",
      "Talent Mapping",
      "Leadership development and executive coaching.",
      "Talent assessments and organizational readiness advisory.",
      "Career advisory and professional development services.",
    ],
    after: [
      "Descriptions of services on this website are for general informational purposes.",
      "Specific services, deliverables, fees, payment terms, confidentiality obligations, and engagement requirements will be established through separate written agreements when applicable.",
      "In the event of a conflict, the applicable signed client or service agreement will govern the professional engagement.",
    ],
  },
  {
    id: "candidate-engagement",
    title: "Candidate Engagement",
    paragraphs: [
      "Candidates who submit resumes, professional information, or employment inquiries acknowledge that:",
    ],
    bullets: [
      "Submission of information does not guarantee employment, interviews, or placement.",
      "Credoe may evaluate professional qualifications against current or future client opportunities.",
      "Hiring decisions are made by the respective employers.",
      "Credoe does not guarantee the accuracy, availability, compensation, or continuation of any employment opportunity.",
      "Candidate information will be handled in accordance with our Privacy Policy and applicable confidentiality commitments.",
    ],
    after: [
      "Credoe is committed to maintaining professional, respectful, and ethical relationships with candidates throughout the recruitment process.",
    ],
  },
  {
    id: "client-engagements",
    title: "Client Engagements",
    paragraphs: [
      "Organizations engaging Credoe for executive search, recruiting, consulting, or advisory services will receive services consistent with the terms of their individual agreements.",
      "Unless expressly agreed otherwise in writing, website content does not constitute a binding offer, guarantee of candidate placement, or commitment to achieve specific business outcomes.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "All original website content, including written materials, graphics, branding, service descriptions, and proprietary resources, is owned by Credoe or used with appropriate authorization.",
      "Content may not be reproduced, distributed, modified, or commercially used without prior written permission, except as permitted by applicable law.",
      "Credoe retains rights to its proprietary methodologies, assessment frameworks, consulting materials, and other intellectual property, subject to any applicable written agreement.",
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy of Information",
    paragraphs: [
      "Credoe makes reasonable efforts to provide accurate and current information.",
      "However, website content is provided for general informational purposes and may be updated without notice.",
      "We do not guarantee that all information will be complete, current, or free from errors.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links and Resources",
    paragraphs: [
      "Our website may include links to third-party websites, articles, professional resources, or service providers.",
      "These links are provided for convenience and informational purposes.",
      "Credoe does not necessarily endorse or assume responsibility for third-party content, products, services, or privacy practices.",
    ],
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, Credoe shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from the use of, or inability to use, this website.",
      "Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited.",
      "Any liability arising under a separate professional services agreement will be governed by the terms of that agreement.",
    ],
  },
  {
    id: "outcomes",
    title: "No Guarantee of Outcomes",
    paragraphs: [
      "Credoe is committed to delivering high-quality professional services, informed recommendations, and thoughtful talent solutions.",
      "However, recruitment outcomes, employment decisions, business performance, leadership development results, and organizational changes depend on factors outside Credoe's control.",
      "Accordingly, no particular result is guaranteed unless expressly stated in a separate written agreement.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy and Confidentiality",
    paragraphs: [
      "Information submitted through this website is subject to our Privacy Policy.",
      "Any additional confidentiality obligations related to client engagements, candidate searches, assessments, or consulting projects may be addressed through separate written agreements.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    paragraphs: [
      "These Terms of Service shall be governed by the laws of the State of Georgia, United States, without regard to conflict-of-law principles, except where applicable law requires otherwise.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    paragraphs: [
      "Credoe reserves the right to revise these Terms of Service periodically.",
      "Changes will be published on this website with an updated effective date.",
      "Continued use of the website following publication constitutes acceptance of the revised Terms to the extent permitted by applicable law.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    paragraphs: [
      "Questions regarding these Terms of Service may be directed to:",
    ],
    contact: true,
  },
];

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 3v12m-5-5 5 5 5-5" />
      <path d="M5 17v3h14v-3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function DownloadButton() {
  return (
    <a
      href={PDF_PATH}
      download={PDF_FILENAME}
      className="inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#F5A623] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#071426] transition-all duration-300 hover:bg-white"
    >
      <DownloadIcon />
      Download PDF
    </a>
  );
}

export const metadata = {
  title: "Terms of Service | Credoe Talent Solutions",
  description:
    "Review the Terms of Service governing the use of the Credoe Talent Solutions website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F7F3] text-[#071426]">
      {/* HERO */}
      <section className="relative isolate min-h-[540px] overflow-hidden bg-[#071426] text-white sm:min-h-[560px] lg:min-h-[540px] xl:min-h-[560px]">
        {/* Background details */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-[#F5A623]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-[#F5A623]/10"
        />

        {/* Main hero content */}
        <div className="relative mx-auto flex min-h-[540px] max-w-[1350px] flex-col justify-center px-6 pb-12 pt-24 sm:min-h-[560px] sm:px-10 sm:pb-14 sm:pt-28 lg:min-h-[540px] lg:px-16 lg:pb-12 lg:pt-28 xl:min-h-[560px]">
          {/* Breadcrumb */}
          <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:mb-8">
            <Link href="/" className="transition-colors hover:text-[#F5A623]">
              Home
            </Link>

            <span className="text-[#F5A623]">/</span>

            <span className="text-[#F5A623]">Terms of Service</span>
          </div>

          <div className="grid items-center gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Left content */}
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-[#F5A623]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F5A623]">
                  Legal Information
                </span>
              </div>

              <h1 className="font-heading text-[43px] font-medium leading-[1.08] tracking-[-0.025em] text-white sm:text-[60px] lg:text-[68px]">
                Terms of
                <span className="block text-[#F5A623]">Service.</span>
              </h1>

              <p className="mt-5 max-w-[540px] text-[14px] leading-[1.85] text-white/65 sm:text-[15px]">
                Please review the terms and conditions that govern your access
                to and use of the Credoe Talent Solutions website.
              </p>
            </div>

            {/* Right content */}
            <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:py-3 lg:pl-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Document Information
              </p>

              <div className="mt-5 grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[11px] text-white/45">Effective Date</p>

                  <p className="mt-2 font-heading text-[18px] text-white sm:text-[20px]">
                    November 10, 2026
                  </p>
                </div>

                <div>
                  <p className="text-[11px] text-white/45">Document</p>

                  <p className="mt-2 font-heading text-[18px] text-white sm:text-[20px]">
                    13 Sections
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <DownloadButton />
              </div>
            </div>
          </div>

          {/* Bottom detail */}
          <div className="mt-9 border-t border-white/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/35">
            Credoe Talent Solutions, LLC
          </div>
        </div>

        {/* Bottom separator */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/45 to-transparent" />
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="px-6 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-20 lg:px-16">
        <div className="mx-auto max-w-[1150px]">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66B0C]">
                Explore the document
              </p>

              <h2 className="mt-3 font-heading text-[30px] leading-tight text-[#071426] sm:text-[38px]">
                Table of Contents
              </h2>
            </div>

            <p className="max-w-[330px] text-[13px] leading-[1.8] text-[#77766F] sm:text-right sm:text-[14px]">
              Navigate directly to any section of our Terms of Service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex min-h-[76px] min-w-0 items-center justify-between gap-4 border border-[#E4DED3] bg-white/60 px-5 py-4 transition-all duration-300 hover:border-[#C58A25]/60 hover:bg-white"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="font-heading text-[19px] text-[#C58A25]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 text-[13px] font-medium leading-[1.5] text-[#454A50] transition-colors group-hover:text-[#071426] sm:text-[14px]">
                    {section.title}
                  </span>
                </div>

                <span className="shrink-0 text-[#B88A3B] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="px-6 pb-20 pt-8 sm:px-10 sm:pb-24 lg:px-16">
        <div className="mx-auto max-w-[1050px]">
          <div className="mb-12 border-b border-[#DCD6CB] pb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66B0C]">
              Credoe Talent Solutions, LLC
            </p>

            <h2 className="mt-4 font-heading text-[30px] leading-tight text-[#071426] sm:text-[38px]">
              Terms and Conditions
            </h2>

            <p className="mt-4 max-w-[760px] text-[15px] leading-[1.9] text-[#62666C] sm:text-[16px]">
              By accessing or using our website, you agree to these Terms of
              Service. Please review them carefully.
            </p>
          </div>

          <div className="space-y-14 sm:space-y-16">
            {sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <div className="mb-6 flex items-start gap-5 sm:gap-7">
                  <span className="shrink-0 font-heading text-[30px] leading-none text-[#C58A25] sm:text-[36px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1 border-b border-[#DED9D0] pb-5">
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#A66B0C]">
                      Section {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="font-heading text-[25px] font-medium leading-tight text-[#071426] sm:text-[30px]">
                      {section.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 pl-0 sm:pl-[67px]">
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="break-words text-[15px] leading-[1.95] text-[#62666C] sm:text-[16px]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="space-y-3 py-1">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex gap-3 text-[15px] leading-[1.9] text-[#62666C] sm:text-[16px]"
                        >
                          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C58A25]" />

                          <span className="min-w-0 break-words">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.after?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="break-words text-[15px] leading-[1.95] text-[#62666C] sm:text-[16px]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.contact && (
                    <div className="mt-7 border border-[#E4DED3] bg-white p-6 sm:p-8">
                      <p className="font-heading text-[22px] text-[#071426] sm:text-[25px]">
                        Credoe Talent Solutions, LLC
                      </p>

                      <div className="mt-5 space-y-3 text-[14px] leading-[1.8] text-[#62666C] sm:text-[15px]">
                        <p className="break-words">
                          Website:{" "}
                          <a
                            href="https://www.credoetalent.com"
                            className="text-[#A66B0C] transition-colors hover:underline"
                          >
                            www.credoetalent.com
                          </a>
                        </p>

                        <p className="break-words">
                          Email:{" "}
                          <a
                            href="mailto:adyer@credoetalent.com"
                            className="text-[#A66B0C] transition-colors hover:underline"
                          >
                            adyer@credoetalent.com
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* DOWNLOAD AREA */}
          <div className="mt-20 overflow-hidden rounded-sm bg-[#071426]">
            <div className="relative px-7 py-10 sm:px-12 sm:py-12 lg:px-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-32 h-[300px] w-[300px] rounded-full border border-[#F5A623]/15"
              />

              <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-[560px]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5A623]">
                    Keep for your records
                  </p>

                  <h3 className="mt-4 font-heading text-[27px] leading-tight text-white sm:text-[34px]">
                    A copy of our Terms.
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.8] text-white/55 sm:text-[15px]">
                    Download the complete Terms of Service document for your
                    reference.
                  </p>
                </div>

                <div className="relative shrink-0">
                  <DownloadButton />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#DED9D0] pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-[11px] tracking-[0.04em] text-[#92918B]">
              © 2026 Credoe Talent Solutions, LLC. All rights reserved.
            </p>

            <Link
              href="/"
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A66B0C] transition-colors hover:text-[#071426]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
