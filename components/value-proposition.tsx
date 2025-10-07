import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Award } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import ScrollFloat from "@/components/ScrollFloat";

const values = [
  {
    icon: CheckCircle,
    title: "99.9% Uptime Guarantee",
    description: "Reliable systems that keep your business running 24/7",
  },
  {
    icon: Clock,
    title: "Rapid Implementation",
    description: "Fast deployment with minimal disruption to operations",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with 10+ years experience",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Award-winning solutions trusted by Fortune 500 companies",
  },
];

export function ValueProposition() {
  return (
    <AnimatedSection className="py-24">
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
              Why Choose Synark42
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
              We deliver exceptional results through proven expertise and
              unwavering commitment to excellence.
            </p>
          </ScrollFloat>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <AnimatedSection
              key={index}
              delay={index * 150}
              animation="fade-up"
            >
              <Card className="text-center border-border/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
