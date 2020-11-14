import React from "react";
import Olcademy from "../images/olcademy-logo.png"
import Fade from "react-reveal/Fade";
import { Media } from "reactstrap";

function Experience() {
  return (
    <div className="jumbotron hd1" id="exp">
      <hr className="my-4" />
      <h1 className="hd1">Experience</h1>
      <Fade bottom>
        <Media>
          <Media left href="#">
            <Media
              src={Olcademy}
              alt="Olcademy company"
              width="70px"
              height="85px"
              className="m-2"
            />
          </Media>
          <Media body>
            <Media heading>Olcademy Company</Media>
            Being an intern as a backend developer for 3 months <br />
            I Worked on Nodejs,Expressjs,mongodb,flask,mysql
            <p>July2020-October2020</p>
          </Media>
        </Media>
      </Fade>
    </div>
  );
}

export default Experience;
