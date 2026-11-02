"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const storageKey = "credoe-intro-shown";

    if (sessionStorage.getItem(storageKey)) return;

    sessionStorage.setItem(storageKey, "true");
    setVisible(true);

    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 1000);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1600);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`credoe-intro-loader ${exiting ? "credoe-intro-exit" : ""}`}
      role="status"
      aria-label="Credoe Talent Solutions"
    >
      <div className="credoe-intro-glow" />

      <div className="credoe-intro-orbit credoe-intro-orbit-one" />
      <div className="credoe-intro-orbit credoe-intro-orbit-two" />
      <div className="credoe-intro-orbit credoe-intro-orbit-three" />

      <div className="credoe-intro-content">
        <div className="credoe-intro-logo">
          <Image
            src="/images/credoe-logo.png"
            alt="Credoe Talent Solutions"
            width={456}
            height={186}
            priority
            className="h-auto w-[210px] sm:w-[270px]"
          />
        </div>

        <div className="credoe-intro-divider" />

        <p className="credoe-intro-tagline">RIGHT TALENT. REAL LEADERS.</p>

        <p className="credoe-intro-subtitle">REMARKABLE RESULTS.</p>

        <div className="credoe-intro-progress">
          <div className="credoe-intro-progress-fill" />
        </div>
      </div>

      <div className="credoe-intro-bottom">
        <span>CREDOE TALENT SOLUTIONS</span>
        <span className="credoe-intro-bottom-dot" />
        <span>EST. IN EXCELLENCE</span>
      </div>
    </div>
  );
}
