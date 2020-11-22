import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import github from "../images/github-logo.png";
import gmail from "../images/gmail.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

class Footer extends Component {
     render() {
          return (
               <Fade bottom>
                    <div id="contact">
                         <h1 className="hd1 ml-4">Contact Me</h1>
                         <br />

                         <div className="Contact-section">
                              <h4 className="hd1 ml-4">
                                   I am available for any new collabs,
                                   opportunities and ideas here :
                              </h4>
                              <br />
                              <a
                                   href="https://github.com/Arbazbms/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <img
                                        className="logoc m-2"
                                        width="55px"
                                        height="55px"
                                        src={github}
                                        alt="github"
                                   ></img>
                              </a>
                              <a
                                   href="https://linkedin.com/in/Arbazbms/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <img
                                        className="logoc m-2"
                                        width="55px"
                                        height="55px"
                                        src={linkedin}
                                        alt="linkedin"
                                   ></img>
                              </a>
                              <a
                                   href="mailto:Arbazcs.developer@gmail.com"
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <img
                                        className="logoc m-2"
                                        width="55px"
                                        height="55px"
                                        src={gmail}
                                        alt="gmail"
                                   ></img>
                              </a>

                              <a
                                   href="https://twitter.com/Arbazbms"
                                   target="_blank"
                                   rel="noopener noreferrer"
                              >
                                   <img
                                        className="logoc m-2"
                                        width="55px"
                                        height="55px"
                                        src={twitter}
                                        alt="twitter"
                                   ></img>
                              </a>
                         </div>
                         <div className="footer">
                              <Fade up>
                                   <br />

                                   <h5>
                                        Designed & Developed Using ReactJS By{" "}
                                   </h5>
                                   <h5 className="highLighted">Arbaz Ahmed</h5>
                                   <h5>&copy; 2020</h5>
                              </Fade>
                         </div>
                    </div>
               </Fade>
          );
     }
}

export default Footer;
