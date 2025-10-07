"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import ScrollFloat from "@/components/ScrollFloat";

export function CTASection() {
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
    <AnimatedSection className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimatedSection delay={200} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg opacity-90 mb-8 text-pretty">
            Join hundreds of companies that have accelerated their growth with
            our innovative IT solutions. Let's discuss how we can help you
            achieve your technology goals.
          </p>

          <AnimatedSection delay={400} animation="fade-up">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-200"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://calendly.com/synark42/30min?back=1",
                    "_blank"
                  )
                }
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </div>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
