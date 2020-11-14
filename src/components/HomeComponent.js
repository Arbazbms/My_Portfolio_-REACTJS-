import React from "react";
import Jumbo from "./CarouselComponent";
import About from "./AboutComponent";
import Skills from "./SkillsComponent";
import Edu from "./EduComponent";
import Pnc from "./PncComponent";
import Experience from "./ExperienceComponent";

function Home() {
  return (
    <div>
      <Jumbo />
      <About />
      <Skills />
      <Experience/>
      <Edu />
      <Pnc />
    </div>
  );
}

export default Home;
