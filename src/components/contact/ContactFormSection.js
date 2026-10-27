"use client";

import { useState } from "react";

const GOLD = "#F4A019";
const NAVY = "#071523";
const HEADING = "#0C1A32";

const contactDetails = [
  {
    icon: "phone",
    title: "Phone",
    subtitle: "Let's talk",
    value: "(678) 866-0962",
    href: "tel:+16788660962",
  },
  {
    icon: "email",
    title: "Email",
    subtitle: "Send us a message",
    value: "adyer@credoetalent.com",
    href: "mailto:adyer@credoetalent.com",
  },
  {
    icon: "location",
    title: "Office",
    subtitle: "Our headquarters",
    value: "730 Peachtree Street NE, #570 Atlanta, GA 30308",
    href: "https://maps.google.com/?q=730+Peachtree+Street+NE+%23570+Atlanta+GA+30308",
  },
];

const fieldClassName =
  "block w-full rounded-md border border-[#D9DEE5] bg-white px-3 py-[11px] text-[13px] leading-5 text-[#17243A] outline-none transition placeholder:text-[#98A2B3] focus:border-[#D98900] focus:ring-2 focus:ring-[#F4A019]/20";

function SectionEyebrow({ children }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-4">
      <span className="h-px w-7 shrink-0 bg-[#F4A019]" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#17243A]">
        {children}
      </p>
      <span className="h-px w-7 shrink-0 bg-[#F4A019]" />
    </div>
  );
}

function ContactDetailIcon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {type === "phone" && (
        <path
          d="M7.2 3.5h2.5l1.5 4.1-2 1.7a15 15 0 0 0 5.5 5.5l1.7-2 4.1 1.5v2.5a2 2 0 0 1-2.2 2C10.8 18.2 5.8 13.2 5.2 5.7a2 2 0 0 1 2-2.2Z"
          fill="currentColor"
          stroke="none"
        />
      )}

      {type === "email" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="1.5" />
          <path d="m4 7 8 6 8-6" />
        </>
      )}

      {type === "location" && (
        <>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
    </svg>
  );
}

function ContactRings() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-20 -right-28 h-[350px] w-[350px] rounded-full border border-[#F4A019]/35"
    >
      <div className="absolute inset-[9%] rounded-full border border-[#F4A019]/30" />
      <div className="absolute inset-[18%] rounded-full border border-[#F4A019]/25" />
      <div className="absolute inset-[27%] rounded-full border border-[#F4A019]/20" />
    </div>
  );
}

function ContactInformation() {
  return (
    <aside className="relative isolate flex min-h-full flex-col overflow-hidden rounded-lg bg-[#03101E] p-7 text-white shadow-[0_5px_20px_rgba(0,0,0,0.06)] sm:p-9 lg:p-8 xl:p-10">
      <ContactRings />

      <div className="relative z-10">
        <h3
          className="font-heading text-3xl font-semibold leading-tight sm:text-4xl"
          style={{ color: "#FFFFFF" }}
        >
          Let&apos;s <span style={{ color: GOLD }}>Connect.</span>
        </h3>

        <p className="mt-4 max-w-[350px] text-sm leading-[1.8] text-white/80 sm:text-[15px]">
          At Credoe, we partner with organizations to identify, attract, and
          develop exceptional leadership talent. Reach out to start a
          conversation about your goals and how we can help.
        </p>

        <div className="mt-8 space-y-7 sm:mt-9">
          {contactDetails.map((detail) => (
            <div key={detail.title} className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border"
                style={{ borderColor: GOLD, color: GOLD }}
              >
                <ContactDetailIcon type={detail.icon} />
              </div>

              <div className="min-w-0 flex-1 pt-1">
                <h4
                  className="font-heading text-base font-semibold sm:text-lg"
                  style={{ color: "#FFFFFF" }}
                >
                  {detail.title}
                </h4>

                <p className="mt-1 text-xs text-white/65 sm:text-sm">
                  {detail.subtitle}
                </p>

                <a
                  href={detail.href}
                  target={detail.title === "Office" ? "_blank" : undefined}
                  rel={detail.title === "Office" ? "noreferrer" : undefined}
                  className="mt-1 inline-block max-w-full break-words text-sm leading-6 text-white/90 transition hover:text-[#F4A019]"
                >
                  {detail.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function FormField({ label, name, required = false, children }) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold text-[#17243A] sm:text-[13px]"
      >
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>

      {children}
    </div>
  );
}

function InquiryDropdown({ value, onChange }) {
  return (
    <div className="relative">
      <select
        id="inquiry"
        name="inquiry"
        required
        value={value}
        onChange={onChange}
        className={`${fieldClassName} h-[43px] appearance-none cursor-pointer py-2 pl-3 pr-11 ${
          value ? "text-[#17243A]" : "text-[#98A2B3]"
        }`}
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="Executive Search">Executive Search</option>
        <option value="Leadership Advisory">Leadership Advisory</option>
        <option value="Talent Strategy">Talent Strategy</option>
        <option value="Interim Leadership">Interim Leadership</option>
        <option value="Career Opportunity">Career Opportunity</option>
        <option value="General Inquiry">General Inquiry</option>
      </select>

      {/* Custom arrow, consistently aligned at the right */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 flex w-10 items-center justify-center text-[#17243A]"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    inquiry: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Website inquiry: ${formData.inquiry}`);

    const body = encodeURIComponent(
      [
        `Name: ${formData.fullName}`,
        `Work email: ${formData.email}`,
        `Company: ${formData.company || "Not provided"}`,
        `Inquiry type: ${formData.inquiry}`,
        "",
        "Message:",
        formData.message,
      ].join("\n"),
    );

    setStatus(
      "Your email application should open with your message prepared. Send the email to complete your inquiry.",
    );

    window.location.href = `mailto:adyer@credoetalent.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact-form"
      className="bg-[#FCFCFB] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <header className="mx-auto mb-9 max-w-[760px] text-center sm:mb-12">
          <SectionEyebrow>Get in Touch</SectionEyebrow>

          <h2
            className="font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl"
            style={{ color: HEADING }}
          >
            How Can We <span style={{ color: "#D98900" }}>Help?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-sm leading-6 text-[#536176] sm:text-base sm:leading-7">
            Whether you&apos;re building a leadership team, exploring a search,
            or simply want to learn more about our approach, we&apos;d love to
            hear from you.
          </p>
        </header>

        {/* Contact details and form */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-7">
          <ContactInformation />

          <div className="rounded-lg border border-[#DDE2E8] bg-white p-6 sm:p-8 lg:p-7 xl:p-8">
            <h3
              className="font-heading text-2xl font-semibold leading-tight sm:text-3xl"
              style={{ color: HEADING }}
            >
              Send Us a Message
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#667085] sm:text-sm sm:leading-6">
              Fill out the form below and a member of our team will get back to
              you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Full Name" name="fullName" required>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={fieldClassName}
                  />
                </FormField>

                <FormField label="Work Email" name="email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className={fieldClassName}
                  />
                </FormField>
              </div>

              <FormField label="Company" name="company">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className={fieldClassName}
                />
              </FormField>

              <FormField label="How can we help?" name="inquiry" required>
                <InquiryDropdown
                  value={formData.inquiry}
                  onChange={handleChange}
                />
              </FormField>

              <FormField label="Message" name="message" required>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your goals..."
                  className={`${fieldClassName} min-h-[90px] resize-y`}
                />
              </FormField>

              <label className="flex cursor-pointer items-start gap-2.5 text-[11px] leading-[1.6] text-[#354158] sm:text-xs">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#D98900]"
                />

                <span>
                  I agree to be contacted about Credoe&apos;s services and
                  insights. You can unsubscribe at any time.
                </span>
              </label>

              <button
                type="submit"
                className="flex min-h-[46px] w-full items-center justify-center gap-3 rounded-md px-5 py-3 text-xs font-bold text-[#07111E] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D98900] focus-visible:ring-offset-2"
                style={{ backgroundColor: GOLD }}
              >
                SEND MESSAGE
                <span aria-hidden="true" className="text-base">
                  →
                </span>
              </button>

              {status && (
                <p
                  role="status"
                  className="rounded-md bg-[#FFF7E6] p-3 text-xs leading-5 text-[#594017]"
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
