import About from "@/Components/About/About";
import Banner from "@/Components/HomePage/Banner";
import SkillsAndTechnology from "@/Components/HomePage/SkillsAndTechnology/SkillsAndTechnology";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>

      <About></About>

      <SkillsAndTechnology></SkillsAndTechnology>
    </div>
  );
};

export default HomePage;
