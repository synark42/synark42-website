import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import ScrollFloat from "@/components/ScrollFloat";

const stats = [
  { icon: Users, label: "Expert Team Members", value: "50+" },
  { icon: Award, label: "Years of Experience", value: "15+" },
  { icon: Globe, label: "Countries Served", value: "25+" },
  { icon: TrendingUp, label: "Client Success Rate", value: "98%" },
];

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <AnimatedSection delay={200} animation="slide-right">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-6">
              Leading the Future of Enterprise Technology
            </h2>

            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Founded in 2008, Synark42 has been at the forefront of digital
              transformation, helping businesses leverage technology to achieve
              unprecedented growth and efficiency.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of certified experts combines deep technical knowledge
              with business acumen to deliver solutions that not only meet
              today's challenges but anticipate tomorrow's opportunities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection
                  key={index}
                  delay={400 + index * 100}
                  animation="fade-up"
                >
                  <div className="text-center group">
                    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                      <stat.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-foreground transition-all duration-300 group-hover:scale-105">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={400}
            animation="slide-left"
            className="relative"
          >
            <img
              src="/tech-team-office.png"
              alt="Synark42 team"
              className="rounded-2xl shadow-lg w-full h-auto transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
            />
            <AnimatedSection delay={600} animation="fade-up">
              <Card className="absolute -bottom-6 -left-6 border-border/50 bg-card/95 backdrop-blur hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-foreground">
                    Trusted by Fortune 500
                  </div>
                  <div className="text-xs text-muted-foreground">
                    500+ successful projects delivered
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
}
