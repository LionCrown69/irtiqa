"use client";

import IntroAnimation from "./scroll-morph-hero";

export default function ScrollMorphHeroDemo() {
  return (
    <div
      style={{
        width: "100%",
        height: "800px",
        border: "1px solid rgba(12,12,11,.08)",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <IntroAnimation />
    </div>
  );
}
