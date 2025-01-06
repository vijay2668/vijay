"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCallback } from "react";

const Hero = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
        Hi, I'm <span className="text-primary">Vijay Singh Rathod</span>
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8">
        Fullstack Developer | Problem Solver | Tech Enthusiast
      </p>
      <Button
        onClick={() => scrollToSection("projects")}
        size="lg"
        className="group"
      >
        View My Work
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </section>
  );
};

export default Hero;
