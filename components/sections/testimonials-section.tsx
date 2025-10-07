"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import CircularText from "../CircularText";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, InnovateCorp",
    content:
      "Synark42 transformed our entire infrastructure. Their cloud migration saved us 40% on operational costs while improving performance dramatically.",
    rating: 5,
    avatar: "/professional-woman-headshot.png",
  },
  {
    name: "Michael Chen",
    role: "CEO, DataDrive Solutions",
    content:
      "The cybersecurity implementation was flawless. We've had zero incidents since deployment, and their ongoing support is exceptional.",
    rating: 5,
    avatar: "/professional-man-headshot.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, MedTech Plus",
    content:
      "Their custom development team delivered exactly what we needed, on time and within budget. The solution has streamlined our entire workflow.",
    rating: 5,
    avatar: "/professional-woman-headshot.png",
  },
  {
    name: "Sarah Johnson",
    role: "CTO, InnovateCorp",
    content:
      "Synark42 transformed our entire infrastructure. Their cloud migration saved us 40% on operational costs while improving performance dramatically.",
    rating: 5,
    avatar: "/professional-woman-headshot.png",
  },
];

export function TestimonialsSection() {
  return (
    <AnimatedSection className="py-24 relative">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-16 relative">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance relative">
            What our clients are saying
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty relative">
            Don't just take our word for it. Here's what industry leaders have
            to say about our work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              delay={index * 200}
              animation="fade-up"
            >
              <Card className="select-none blur border-border/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent transition-all duration-300 group-hover:scale-110"
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4 transition-all duration-300 group-hover:scale-105"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 text-black z-high">
        <CircularText
          text="STAY*TUNED*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class text-black"
        />
      </div>
    </AnimatedSection>
  );
}
