import React from "react";
import hii from "../images/hi.gif";
import Typical from "react-typical";
import Banner from "../images/banner-image.png";
import Resume from "../images/ArbazAhmed-resume.pdf";

function Jumbo() {
  return (
    <div className="">
      <div className="jumbotron">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <h4 className="intro">
              <img
                src={hii}
                alt="hii"
                className="bann"
                width="180px"
                height="180px"
              />
              <p className="hd1">my name is </p>
            </h4>

            <h1 className="hd1">ARBAZ AHMED!!!</h1>
            <h1 className="hd1">
              <Typical
                steps={[
                  "Student",
                  500,
                  "Developer!",
                  500,
                  "Tech Enthusiast",
                  500,
                  "Freelancer",
                  500,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </h1>

            <a
              className="btn btn-warning btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              href={Resume}
              role="button"
            >
              <h2>GET CV</h2>
            </a>
          </div>
          <div className="col-12 col-sm-12 col-md-5 banner-img">
            <img src={Banner} alt="img-Banner" className="bimg" />
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default Jumbo;
