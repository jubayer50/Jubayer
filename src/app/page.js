import About from "@/Components/About/About";
import ContactSection from "@/Components/ContactSection/ContactSection";
import Banner from "@/Components/HomePage/Banner";
import SkillsAndTechnology from "@/Components/HomePage/SkillsAndTechnology/SkillsAndTechnology";
import Projects from "@/Components/Projects/Projects";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>

      <About></About>

      <SkillsAndTechnology></SkillsAndTechnology>

      <Projects></Projects>

      <ContactSection></ContactSection>
    </div>
  );
};

export default HomePage;
