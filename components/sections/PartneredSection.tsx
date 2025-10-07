"use client";

import { AnimatedSection } from "@/components/animated-section";
import FlowingMenu from "@/components/FlowingMenu";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SpotlightCard from "../SpotlightCard"; // Assuming SpotlightCard is in the same directory
import ScrollFloat from "@/components/ScrollFloat";
import ShinyText from "@/components/ShinyText";
import { Button } from "../ui/button";
import Shuffle from "../Shuffle";
import CurvedLoop from "../CurvedLoop";

export function PartneredSection() {
  const demoItems = [
    {
      link: "#",
      text: "Mojave",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Sonoma",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Monterey",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Sequoia",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <AnimatedSection id="clients" className="py-24 bg-background" fullHeight>
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <AnimatedSection delay={200} className="mx-auto max-w-2xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Clients we’re proud to work with
          </h2>

          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            We collaborate with industry leaders to deliver exceptional
            solutions.
          </p>
        </AnimatedSection>
        <div
          style={{ height: "600px", position: "relative" }}
          className="blurred-content blurred-bg blur-extreme"
        >
          <FlowingMenu items={demoItems} />
        </div>
      </div>
      <div className="text-2xl w-full text-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
        <CurvedLoop
          marqueeText="Revealing ✦ Soon ✦"
          speed={0.5}
          curveAmount={300}
          direction="right"
          interactive={true}
          className="text-foreground"
        />
      </div>
    </AnimatedSection>
  );
}
