'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Code, Database, Smartphone, Cog } from "lucide-react";

interface CircularGalleryProps {
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  scrollEase?: number;
}

const services = [
  {
    icon: Cloud,
    title: "Web Development",
    description: "Crafting responsive and dynamic web applications tailored to your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Building intuitive and high-performance mobile apps for iOS and Android.",
  },
  {
    icon: Database,
    title: "Web Hosting",
    description: "Reliable and secure hosting solutions to keep your online presence always active.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate and optimize your infrastructure with secure, scalable cloud platforms.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security solutions and monitoring.",
  },
  {
    icon: Cog,
    title: "IT Consulting",
    description: "Strategic technology guidance to optimize your digital transformation.",
  },
];

const CircularGallery: React.FC<CircularGalleryProps> = ({
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  scrollEase = 0.02,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
        setHeight(containerRef.current.offsetHeight);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const [{ scroll }, api] = useSpring(() => ({ scroll: 0 }));

  const bind = useGesture({
    onDrag: ({ offset: [, y] }: { offset: [number, number] }) => {
      api.start({ scroll: y, immediate: false, config: { tension: 120, friction: 14 } });
    },
    onWheel: ({ offset: [, y] }: { offset: [number, number] }) => {
      api.start({ scroll: y, immediate: false, config: { tension: 120, friction: 14 } });
    },
  });

  const interpolate = useCallback((i: number) => {
    const scrollProgress = scroll.to([0, height], [0, 1]);
    const itemProgress = scrollProgress.to(
      (p: number) => (p * services.length - i) / services.length
    );

    const y = itemProgress.to((p: number) => {
      const offset = p * height;
      return offset;
    });

    const rotateX = itemProgress.to((p: number) => {
      const angle = p * 360; // Full rotation
      return angle;
    });

    const scale = itemProgress.to((p: number) => {
      const s = 1 - Math.abs(p * bend);
      return Math.max(0.5, s);
    });

    const opacity = itemProgress.to((p: number) => {
      const o = 1 - Math.abs(p * 2); // Fade out faster
      return Math.max(0, o);
    });

    return {
      y,
      rotateX,
      scale,
      opacity,
    };
  }, [height, scroll, bend]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <animated.div
        {...bind()}
        className="absolute inset-0"
        style={{
          transform: scroll.to((s: number) => `translateY(${s}px)`),
          willChange: 'transform',
        }}
      >
        {services.map((service, i) => (
          <animated.div
            key={i}
            className="absolute w-full flex justify-center items-center"
            style={{
              ...interpolate(i),
              transformOrigin: 'center center',
              perspective: '1000px',
              color: textColor,
              borderRadius: `${borderRadius * 100}%`,
              height: '200px', // Fixed height for each card
              top: `${i * 220}px`, // Adjust spacing between cards
            }}
          >
            <Card className="w-full max-w-sm group hover:shadow-lg transition-all duration-300 border-border/50 transform hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default CircularGallery;
