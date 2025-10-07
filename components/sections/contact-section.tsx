"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollFloat from "@/components/ScrollFloat";
import PixelCard from "../PixelCard";
import TiltedCard from "../TiltedCard";
import SpotlightCard from "../SpotlightCard";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl text-balance">
            Get in Touch
          </h2>

          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 space-y-6">
          <div className="lg:col-span-2 ">
            <SpotlightCard
              className="bg-white border-none shadow-sm  rounded-xl space-y-6"
              spotlightColor="rgba(208, 152, 41, 0.32)"
            >
              <div className="grid gap-4 sm:grid-cols-2 ">
                <div className="relative">
                  <Input
                    type="text"
                    id="firstName"
                    className="peer h-10 w-full rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border"
                    placeholder="First Name"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:bg-card peer-focus:px-1 dark:peer-focus:bg-gray-900"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    id="lastName"
                    className="peer h-10 w-full rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border"
                    placeholder="Last Name"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:bg-card peer-focus:px-1 dark:peer-focus:bg-gray-900"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div className="relative">
                <Input
                  type="email"
                  id="email"
                  className="peer h-10 w-full rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:bg-card peer-focus:px-1 dark:peer-focus:bg-gray-900"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <Input
                  type="text"
                  id="company"
                  className="peer h-10 w-full rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border"
                  placeholder="Company"
                />
                <label
                  htmlFor="company"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:bg-card peer-focus:px-1 dark:peer-focus:bg-gray-900"
                >
                  Company
                </label>
              </div>
              <div className="relative">
                <Textarea
                  id="message"
                  className="peer min-h-[160px] resize-none w-full rounded-md bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border"
                  placeholder="Tell us about your project requirements..."
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 top-2 text-sm text-muted-foreground transition-all peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:bg-card peer-focus:px-1 dark:peer-focus:bg-gray-900"
                >
                  Tell us about your project requirements..."
                </label>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Send Message
              </Button>
            </SpotlightCard>
          </div>

          <div className="space-y-6">
            <SpotlightCard
              className="bg-white border-none shadow-sm  rounded-xl"
              spotlightColor="rgba(208, 152, 41, 0.32)"
            >
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-md font-semibold text-muted-foreground">
                    Email
                  </h3>

                  <p className="text-lg text-muted-foreground">
                    connect@synark42.com
                  </p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="bg-white border-none shadow-sm  rounded-xl"
              spotlightColor="rgba(208, 152, 41, 0.32)"
            >
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-muted-foreground">Phone</h3>
                  <p className="text-md text-muted-foreground">
                    +91 7356090798
                  </p>
                  <p className="text-md text-muted-foreground">
                    +91 9645036014
                  </p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="bg-white border-none shadow-sm  rounded-xl"
              spotlightColor="rgba(208, 152, 41, 0.32)"
            >
              {" "}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-muted-foreground">
                    Office
                  </h3>

                  <p className="text-md text-muted-foreground">
                    CHIRAYINKEEZHU
                  </p>
                  <p className="text-md text-muted-foreground">
                    THIRUVANANTHAPURAM, KERALA
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
