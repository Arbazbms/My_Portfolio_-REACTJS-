import React from "react";
import Bms from "../images/bmslogo.jpg";
import Sjp from "../images/sjplogo.jpg";
import Huda from "../images/hudalogo.jpg";
import Fade from "react-reveal/Fade";
import { Media } from "reactstrap";

function Edu() {
  return (
    <div className="jumbotron hd1" id="edu">
      <hr className="my-4" />
      <h1 className="hd1">Education</h1>
      <Fade left>
        <Media>
          <Media left href="#">
            <Media
              src={Bms}
              alt="BMSCE"
              width="70px"
              height="70px"
              className="m-2"
            />
          </Media>
          <Media body>
            <Media heading>B.M.S College Of Engg</Media>
            Studying 2nd Year (BE) computer science and engg (2019-2022)
            <p>8.52 sgpa</p>
          </Media>
        </Media>
      </Fade>
      <br />
      <Fade left>
        <Media>
          <Media left href="#">
            <Media
              src={Sjp}
              alt="SJP College"
              width="70px"
              height="70px"
              className="m-2"
            />
          </Media>
          <Media body>
            <Media heading>S.J.P - (Diploma)</Media>
            Completed Diploma in computer science and engg (2016-2019)
            <p>91.36% D-CET: 164 Rank</p>
          </Media>
        </Media>
      </Fade>

      <br />
      <Fade left>
        <Media>
          <Media left href="#">
            <Media
              src={Huda}
              alt="Huda School"
              width="70px"
              height="70px"
              className="m-2"
            />
          </Media>
          <Media body>
            <Media heading>Huda National School</Media>
            SSLC
            <p>90.40%</p>
          </Media>
        </Media>
      </Fade>
    </div>
  );
}

export default Edu;
