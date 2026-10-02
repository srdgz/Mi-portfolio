import { useEffect } from "react";

import Hero from "@/presentation/components/organisms/Hero";
import StackMarquee from "@/presentation/components/organisms/StackMarquee";
import About from "@/presentation/components/organisms/About";
import Experience from "@/presentation/components/organisms/Experience";
import Projects from "@/presentation/components/organisms/Projects";
import Education from "@/presentation/components/organisms/Education";
import Contact from "@/presentation/components/organisms/Contact";

const HomePage = () => {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  return (
    <main>
      <Hero />
      <StackMarquee />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};

export default HomePage;
