import React from "react";
import { Media, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from "react-router-dom";
function Certificates(props) {
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
              <a className="btn btn-primary" href={cer.link} target="_blank">
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
      <Link to="/">
        <Button className="btn btn-primary btn-lg ml-5">
          Return To Home Page
        </Button>
      </Link>
      <br />
      <br />
    </div>
  );
}

export default Certificates;
