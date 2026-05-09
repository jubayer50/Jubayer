import About from "@/Components/About/About";
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
    </div>
  );
};

export default HomePage;
