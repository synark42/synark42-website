"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Code, Database, Smartphone, Cog } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import SpotlightCard from "@/components/SpotlightCard";
import CardSwap from "@/components/CardSwap";
import ScrollStack from "@/components/ui/scroll-stack";
import { ScrollStackItem } from "@/components/ui/scroll-stack";
import InfiniteMenu from "../InfiniteMenu";

const services = [
  {
    image: "/images/services/ai-integration.png",
    link: "#",
    title: "AI Integration",
    description:
      "Seamlessly integrate advanced AI into your systems to enhance automation, insights, and efficiency.",
  },
  {
    image: "/images/services/web-development.png",
    link: "#",
    title: "Web Development",
    description:
      "Build scalable, modern websites with robust backend architecture and intuitive frontend design.",
  },
  {
    image: "/images/services/mobile-app-development.png",
    link: "#",
    title: "Mobile Apps",
    description:
      "Design and deploy cross-platform apps with smooth performance and engaging user experiences.",
  },
  {
    image: "/images/services/quality-assurance.png",
    link: "#",
    title: "Software Testing",
    description:
      "Ensure flawless performance and reliability through rigorous automated and manual testing processes.",
  },
  {
    image: "/images/services/ui-ux-design.png",
    link: "#",
    title: "UI/UX Design",
    description:
      "Craft intuitive, user-friendly interfaces that elevate digital experiences across all devices.",
  },
  {
    image: "/images/services/logo-design.png",
    link: "#",
    title: "Brand Design",
    description:
      "Develop visually compelling logos and brand elements that reflect your company’s core values.",
  },
  {
    image: "/images/services/graphic-design.png",
    link: "#",
    title: "Graphic Design",
    description:
      "Create cohesive digital visuals and interfaces that combine creativity with technical precision.",
  },
  {
    image: "/images/services/cloud-service-setup.png",
    link: "#",
    title: "Cloud Solutions",
    description:
      "Deploy scalable, secure cloud infrastructures tailored to your business needs.",
  },
  {
    image: "/images/services/web-hosting.png",
    link: "#",
    title: "Web Hosting",
    description:
      "Reliable, high-performance hosting solutions ensuring uptime and secure online presence.",
  },
  {
    image: "/images/services/technical-support.png",
    link: "#",
    title: "IT Support",
    description:
      "Provide prompt, professional technical assistance to keep your systems running smoothly.",
  },
];

export function ServicesSection() {
  return (
    <>
      <AnimatedSection id="services" className="py-24 relative bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center  relative pb-10">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance relative">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-white text-pretty relative">
              Delivering innovative IT solutions that businesses trust.
            </p>
          </div>
        </div>
        <div className="w-full h-full text-white ">
          <InfiniteMenu items={services} />
        </div>{" "}
      </AnimatedSection>
    </>
  );
}
