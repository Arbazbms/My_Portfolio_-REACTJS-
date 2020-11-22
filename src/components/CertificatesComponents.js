import React, { useEffect } from "react";
import { Media, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from "react-router-dom";
import Extra from "./ExtraComponent";

function Certificates(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const certificates = props.certi.map((cer) => {
    return (
      <div className="hd1 m-5" id={cer.id}>
        <Fade Left>
          <Media>
            <Media left href="#">
              <Media
                src={cer.image}
                alt="BMSCE"
                width="70px"
                height="70px"
                className="m-2"
              />
            </Media>
            <Media body>
              <Media heading>{cer.title}</Media>
              <a
                className="btn btn-primary"
                href={cer.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK
              </a>
            </Media>
          </Media>
        </Fade>
      </div>
    );
  });
  return (
    <div className="cerr">
      <LightSpeed Left>
        <h1 className="hd1 ml-5">Certificates</h1>
      </LightSpeed>
      <br />
      <Fade Left>
        <div className="">{certificates}</div>
      </Fade>

      <br />
      <h1 className="hd1 ml-5">Scholarship Program</h1>
      <Extra />
      <Link to="/">
        <Button className="btn btn-primary btn-lg m-5 text-dark">
          Return To Home Page
        </Button>
      </Link>
      <br />
    </div>
  );
}

export default Certificates;
