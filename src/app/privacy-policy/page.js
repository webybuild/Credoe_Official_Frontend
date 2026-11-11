import Link from "next/link";

const PDF_PATH = "/docs/Credoe-Privacy-Policy.pdf";
const PDF_FILENAME = "Credoe-Privacy-Policy.pdf";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: ["Depending on how you interact with Credoe, we may collect:"],
    bullets: [
      <>
        <strong>Contact Information:</strong> Name, email address, telephone
        number, company name, and professional title.
      </>,
      <>
        <strong>Professional Information:</strong> Resumes, employment history,
        qualifications, education, professional accomplishments, and career
        interests.
      </>,
      <>
        <strong>Client Information:</strong> Business contact details,
        organizational hiring needs, leadership requirements, and information
        relevant to our consulting engagements.
      </>,
      <>
        <strong>Website Information:</strong> IP addresses, browser information,
        website activity, and other technical data collected through cookies or
        analytics tools, where used.
      </>,
      <>
        <strong>Communications:</strong> Information you voluntarily provide
        through inquiries, consultations, applications, and other
        correspondence.
      </>,
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    paragraphs: ["Credoe may use collected information to:"],
    bullets: [
      "Provide executive search, recruitment, talent acquisition, and leadership advisory services.",
      "Evaluate candidate qualifications and potential career opportunities.",
      "Communicate with clients, candidates, and business partners.",
      "Deliver consulting, leadership development, coaching, and assessment services.",
      "Respond to inquiries and improve our services.",
      "Maintain business records and fulfill legal or contractual obligations.",
      "Share relevant business insights and service updates, subject to applicable marketing and consent requirements.",
    ],
  },
  {
    id: "candidate-confidentiality",
    title: "Candidate Confidentiality",
    paragraphs: [
      "We understand the sensitive nature of executive search and professional career transitions.",
      "Credoe exercises discretion when handling candidate information and seeks to protect the confidentiality of individuals exploring career opportunities.",
      "Candidate resumes, professional backgrounds, and related information may be shared with prospective employers or authorized client representatives for legitimate recruitment purposes, consistent with applicable law and any confidentiality commitments made to the candidate.",
      "We do not sell candidate resumes or personal information to third parties.",
    ],
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    paragraphs: ["Credoe may share information with:"],
    bullets: [
      "Clients and prospective employers involved in relevant search engagements.",
      "Authorized business partners and service providers supporting our operations.",
      "Assessment, technology, or consulting providers when necessary to deliver requested services.",
      "Government agencies or legal authorities when required by applicable law.",
    ],
    after: [
      "We do not sell personal information in exchange for monetary compensation.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security and Retention",
    paragraphs: [
      "Credoe uses reasonable administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, or loss.",
      "We retain information for as long as reasonably necessary to provide our services, maintain legitimate business records, fulfill contractual obligations, or comply with applicable law.",
      "No electronic storage or transmission method can be guaranteed completely secure.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Website Analytics",
    paragraphs: [
      "Our website may use cookies or similar technologies to support website functionality, understand visitor activity, and improve the user experience.",
      "Visitors may manage cookies through their browser settings. Additional consent or opt-out options will be provided where required by applicable law.",
    ],
  },
  {
    id: "privacy-choices",
    title: "Your Privacy Choices",
    paragraphs: [
      "Subject to applicable law, you may request access to, correction of, or deletion of certain personal information held by Credoe.",
      "You may also request that we discontinue communications or remove your information from consideration for future career opportunities, subject to applicable recordkeeping requirements.",
      "Requests may be submitted through the contact information provided below.",
    ],
  },
  {
    id: "third-party-websites",
    title: "Third-Party Websites",
    paragraphs: [
      "Our website may contain links to external websites. Credoe is not responsible for the privacy practices, security, or content of third-party websites.",
      "We encourage visitors to review the privacy policies of those websites.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    paragraphs: [
      "Our website and services are intended for adults and business professionals. We do not knowingly collect personal information from children under the age of 13.",
    ],
  },
  {
    id: "policy-updates",
    title: "Updates to This Policy",
    paragraphs: [
      "Credoe may update this Privacy Policy periodically to reflect changes in our services, business practices, technology, or legal requirements.",
      "Updates will be posted on this page with a revised effective date.",
    ],
  },
  {
    id: "contact-information",
    title: "Contact Information",
    paragraphs: [
      "For questions regarding this Privacy Policy or the handling of personal information, please contact:",
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
  title: "Privacy Policy | Credoe Talent Solutions",
  description:
    "Learn how Credoe Talent Solutions collects, uses, shares, and protects personal and professional information.",
};

export default function PrivacyPolicyPage() {
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

            <span className="text-[#F5A623]">Privacy Policy</span>
          </div>

          <div className="grid items-center gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Left content */}
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-[#F5A623]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F5A623]">
                  Privacy & Data Protection
                </span>
              </div>

              <h1 className="font-heading text-[43px] font-medium leading-[1.08] tracking-[-0.025em] text-white sm:text-[60px] lg:text-[68px]">
                Privacy
                <span className="block text-[#F5A623]">Policy.</span>
              </h1>

              <p className="mt-5 max-w-[540px] text-[14px] leading-[1.85] text-white/65 sm:text-[15px]">
                Learn how we collect, use, share, and protect the personal and
                professional information entrusted to Credoe Talent Solutions.
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
                    11 Sections
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
              Navigate directly to any section of our Privacy Policy.
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

      {/* PRIVACY POLICY CONTENT */}
      <section className="px-6 pb-20 pt-8 sm:px-10 sm:pb-24 lg:px-16">
        <div className="mx-auto max-w-[1050px]">
          {/* Introduction */}
          <div className="mb-12 border-b border-[#DCD6CB] pb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A66B0C]">
              Credoe Talent Solutions, LLC
            </p>

            <h2 className="mt-4 font-heading text-[30px] leading-tight text-[#071426] sm:text-[38px]">
              Our Commitment to Privacy
            </h2>

            <p className="mt-4 text-[15px] leading-[1.95] text-[#62666C] sm:text-[16px]">
              At Credoe Talent Solutions, LLC ("Credoe," "we," "our," or "us"),
              we recognize the importance of protecting the personal and
              professional information entrusted to us. Whether you are a
              client, candidate, business partner, or website visitor, we are
              committed to handling your information with professionalism,
              discretion, and care.
            </p>

            <p className="mt-5 text-[15px] leading-[1.95] text-[#62666C] sm:text-[16px]">
              This Privacy Policy explains how we collect, use, share, and
              protect information through our website and related business
              services.
            </p>
          </div>

          {/* Policy sections */}
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
                    A copy of our Privacy Policy.
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.8] text-white/55 sm:text-[15px]">
                    Download the complete Privacy Policy document for your
                    reference.
                  </p>
                </div>

                <div className="relative shrink-0">
                  <DownloadButton />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
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
