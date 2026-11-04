"use client";

import { useState } from "react";

export default function BookingCalendar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const calendarUrl =
    "https://cal.com/webybuild-8oyipf/consultation?embed=true&theme=dark&brandColor=%23F5A623";

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setRetryKey((current) => current + 1);
  };

  return (
    <div className="relative min-h-[1550px] w-full overflow-hidden rounded-xl border border-[#F5A623]/20 bg-[#071321] shadow-[0_20px_70px_rgba(0,0,0,0.35)] md:min-h-[850px]">
      {/* Loading screen */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 z-10 flex min-h-[1550px] flex-col items-center justify-center bg-[#071321] px-6 text-center md:min-h-[850px]"
          aria-live="polite"
        >
          {/* Animated gold loader */}
          <div className="relative mb-8 flex h-16 w-16 items-center justify-center">
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-[#F5A623]/15 border-t-[#F5A623]" />

            <div className="h-2 w-2 rounded-full bg-[#F5A623] shadow-[0_0_15px_rgba(245,166,35,0.8)]" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5A623]">
            Credoe Talent Solutions
          </p>

          <h2 className="mt-4 font-heading text-2xl text-white sm:text-3xl">
            Preparing Your Consultation Calendar
          </h2>

          <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
            Please wait while we connect to our scheduling system and prepare
            your available consultation times.
          </p>

          <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#F5A623] to-transparent" />
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="flex min-h-[1550px] flex-col items-center justify-center px-6 text-center md:min-h-[850px]">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#F5A623]/40 text-[#F5A623]">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 8v4m0 4h.01" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>

          <h2 className="font-heading text-2xl text-white">
            Calendar Unavailable
          </h2>

          <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
            We're having trouble displaying the booking calendar. You can still
            schedule your consultation directly through our booking page.
          </p>

          <a
            href="https://cal.com/webybuild-8oyipf/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-[46px] items-center justify-center gap-3 rounded-md bg-[#F5A623] px-6 text-xs font-bold uppercase tracking-wider text-[#061426] transition-colors hover:bg-white"
          >
            Open Booking Calendar
            <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            onClick={handleRetry}
            className="mt-5 cursor-pointer text-xs text-gray-400 underline underline-offset-4 transition-colors hover:text-[#F5A623]"
          >
            Try again
          </button>
        </div>
      )}

      {/* Cal.com iframe */}
      <iframe
        key={retryKey}
        src={calendarUrl}
        title="Schedule a Confidential Consultation with Credoe Talent"
        width="100%"
        height="1550"
        className={`block h-[1550px] w-full border-0 transition-opacity duration-500 md:!h-[850px] ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        }`}
        loading="eager"
        onLoad={() => {
          setIsLoaded(true);
          setHasError(false);
        }}
        onError={() => {
          setHasError(true);
        }}
        allow="payment"
      />
    </div>
  );
}
