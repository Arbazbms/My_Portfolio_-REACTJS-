import React from "react";
import Jumbo from "./CarouselComponent";
import About from "./AboutComponent";
import Fade from "react-reveal/Fade";
import Skills from "./SkillsComponent";
import Edu from "./EduComponent";
import Pnc from "./PncComponent";
import Extra from "./ExtraComponent";

function Home() {
  return (
    <div>
      <Jumbo />
      <Fade left>
        <About />
      </Fade>
      <Skills />
      <Edu />
      <Extra />
      <Pnc />
    </div>
  );
}

export default Home;
