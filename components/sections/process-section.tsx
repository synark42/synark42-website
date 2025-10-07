"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import SpotlightCard from "@/components/SpotlightCard";
import ScrollFloat from "@/components/ScrollFloat";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We analyze your current systems, identify pain points, and understand your business objectives.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our experts design a comprehensive solution tailored to your specific needs and goals.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Implementation",
    description:
      "We build and deploy your solution using industry best practices and cutting-edge technologies.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Optimization",
    description:
      "We ensure smooth deployment and provide ongoing support to maximize your ROI.",
  },
];

export function ProcessSection() {
  return (
    <AnimatedSection className="py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedSection
          delay={200}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Proven Process
            </h2>
          </ScrollFloat>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              A systematic approach that ensures successful project delivery
              every time.
            </p>
          </ScrollFloat>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              delay={index * 150}
              animation="fade-up"
            >
              <SpotlightCard
                className="relative border-border/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group min-h-[250px]"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="mb-2 text-2xl font-bold text-accent transition-all duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-grow">
                    {step.description}
                  </p>
                </CardContent>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 h-0.5 w-8 bg-border transition-all duration-300 group-hover:bg-accent/50"></div>
                )}
              </SpotlightCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
