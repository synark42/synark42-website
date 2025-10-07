"use client";

import { AnimatedSection } from "@/components/animated-section";
import TextPressure from "@/components/TextPressure";
import ScrollFloat from "@/components/ScrollFloat";

export function PortfolioSection() {
  return (
    <AnimatedSection
      id="projects"
      className="min-h-screen bg-secondary/30 flex flex-col justify-center items-center py-24 "
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center  relative">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl text-balance relative">
            Projects
          </h2>
          <p className="mt-4 text-lg  text-pretty relative">
            Showcasing innovative IT solutions brought to life. From concept to
            deployment, Synark42 delivers projects that drive real impact for
            our clients.
          </p>
        </div>
      </div>
      <TextPressure
        text="Projects"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#9AA6B2"
        strokeColor="#ff0000"
        minFontSize={32}
        className="md:px-40 px-8"
      />
      <TextPressure
        text="Under wraps"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#000000"
        strokeColor="#ff0000"
        minFontSize={46}
        className="md:px-40 px-4"
      />
    </AnimatedSection>
  );
}
