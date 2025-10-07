"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import SplitText from "@/components/SplitText";
import GradualBlur from "@/components/GradualBlur";
import LiquidEther from "@/components/LiquidEther";
import Threads from "@/components/Threads";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AnimatedSection className="relative" fullHeight threshold={0}>
      <div className="absolute inset-0 z-[-1]">
        <Threads amplitude={1} distance={0.02} enableMouseInteraction={true} />
      </div>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection delay={200} animation="fade-in">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent"></span>
              Beyond Projects. Into Innovations.
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="fade-up">
            <SplitText
              text="Enterprise IT Solutions"
              className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance"
              delay={60}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <SplitText
              text="That Scale"
              className="mb-6 text-4xl font-bold tracking-tight  sm:text-6xl lg:text-7xl text-balance block text-accent"
              delay={100}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </AnimatedSection>

          <AnimatedSection delay={600} animation="fade-up">
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
              Transform your business with cutting-edge technology solutions, including AI integration, cloud services, and custom software development. We
              deliver secure, scalable, and innovative IT services that drive
              growth and efficiency.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={800} animation="fade-up">
            <div
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
              style={{ zIndex: 10 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-200"
                style={{ pointerEvents: "auto" }}
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                className="transform hover:scale-105 transition-all duration-200 bg-transparent"
                style={{ pointerEvents: "auto" }}
              >
                View Our Work
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
}
