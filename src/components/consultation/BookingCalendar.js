"use client";

import { useEffect, useRef, useState } from "react";

const CAL_NAMESPACE = "credoeConsultation";
const CAL_SCRIPT_URL = "https://app.cal.com/embed/embed.js";

export default function BookingCalendar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const calendarRef = useRef(null);

  useEffect(() => {
    const container = calendarRef.current;

    if (!container) return;

    let isActive = true;
    let observer;
    let loadHandler;
    let hasInitialized = false;

    setIsLoaded(false);
    setHasError(false);

    const handleIframeLoad = () => {
      if (isActive) {
        setIsLoaded(true);
        setHasError(false);
      }
    };

    const watchForCalendar = () => {
      const iframe = container.querySelector("iframe");

      if (iframe) {
        if (observer) observer.disconnect();

        if (iframe.contentDocument?.readyState === "complete") {
          handleIframeLoad();
        } else {
          loadHandler = handleIframeLoad;
          iframe.addEventListener("load", loadHandler, { once: true });
        }
      }
    };

    observer = new MutationObserver(watchForCalendar);

    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    // Initialize Cal.com embed only once.
    const initializeCalendar = () => {
      if (!isActive || !window.Cal || hasInitialized) return;

      hasInitialized = true;

      window.Cal("init", CAL_NAMESPACE, {
        origin: "https://app.cal.com",
      });

      window.Cal.ns[CAL_NAMESPACE]("inline", {
        elementOrSelector: "#credoe-cal-inline",
        calLink: "webybuild-8oyipf/consultation",

        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: true,
          disableMobileScroll: true,
        },
      });

      window.Cal.ns[CAL_NAMESPACE]("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#F5A623",
          },
        },
      });

      watchForCalendar();
    };

    // Reuse the SDK if it is already loaded.
    if (window.Cal && window.Cal.loaded) {
      initializeCalendar();
    } else {
      // Create the official Cal.com embed loader.
      (function (C, A, L) {
        const p = function (a, ar) {
          a.q.push(ar);
        };

        const d = C.document;

        C.Cal =
          C.Cal ||
          function () {
            const cal = C.Cal;
            const ar = arguments;

            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];

              const script = d.createElement("script");
              script.src = A;
              script.async = true;

              // Initialize once the SDK has loaded.
              script.onload = initializeCalendar;

              script.onerror = () => {
                if (isActive) setHasError(true);
              };

              d.head.appendChild(script);
              cal.loaded = true;
            }

            if (ar[0] === L) {
              const api = function () {
                p(api, arguments);
              };

              const namespace = ar[1];

              api.q = api.q || [];

              if (typeof namespace === "string") {
                cal.ns[namespace] = api;
                p(api, ar);
                p(cal, ["initNamespace", namespace]);
              } else {
                p(cal, ar);
              }

              return;
            }

            p(cal, ar);
          };
      })(window, CAL_SCRIPT_URL, "init");

      // Initialize the embed namespace.
      window.Cal("init", CAL_NAMESPACE, {
        origin: "https://app.cal.com",
      });

      // No second script load listener is needed.
      // The SDK loader already calls initializeCalendar on load.
    }

    return () => {
      isActive = false;

      if (observer) observer.disconnect();

      const iframe = container.querySelector("iframe");

      if (iframe && loadHandler) {
        iframe.removeEventListener("load", loadHandler);
      }

      container.innerHTML = "";
    };
  }, [retryKey]);

  return (
    <div className="relative overflow-hidden rounded-xl border border-[#F5A623]/20 bg-[#071321] shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
      {/* Loading screen */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 z-10 flex min-h-[850px] flex-col items-center justify-center bg-[#071321] px-5 py-12 text-center"
          aria-live="polite"
        >
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
        <div className="flex min-h-[600px] flex-col items-center justify-center px-5 py-12 text-center sm:min-h-[700px]">
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
            onClick={() => setRetryKey((current) => current + 1)}
            className="mt-5 cursor-pointer text-xs text-gray-400 underline underline-offset-4 transition-colors hover:text-[#F5A623]"
          >
            Try again
          </button>
        </div>
      )}

      {/* Cal.com inline embed */}
      <div
        id="credoe-cal-inline"
        ref={calendarRef}
        className={`min-h-[850px] w-full transition-opacity duration-500 ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
