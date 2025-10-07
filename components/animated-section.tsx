"use client";

import type React from "react";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  id?: string;
  fullHeight?: boolean;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade-up",
  id,
  fullHeight,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    "fade-up": " opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "translate-x-8 opacity-0",
    "slide-right": "-translate-x-8 opacity-0",
  };

  const visibleClasses = {
    "fade-up": "translate-y-0 opacity-100",
    "fade-in": "opacity-100",
    "slide-left": "translate-x-0 opacity-100",
    "slide-right": "translate-x-0 opacity-100",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visibleClasses[animation] : animationClasses[animation],
        className,
        fullHeight && "min-h-screen flex items-center justify-center"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}
