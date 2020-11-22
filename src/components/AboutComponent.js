import React from "react";
import Fade from "react-reveal/Fade";

import pp from "../images/Arbazz.jpg";
function About() {
     return (
          <div className="jumbotron" id="About">
               <section className="bio hd1">
                    <div className="container">
                         <h1 className="hd1">About Me</h1>

                         <div className="row">
                              <div className="col-lg-6 col-sm-12">
                                   <h3> </h3>
                                   <Fade bottom>
                                        <div className="container">
                                             <img
                                                  className="img-thumbnail"
                                                  src={pp}
                                                  alt="Arbaz photos"
                                             />
                                        </div>
                                   </Fade>
                              </div>

                              <div className="col-lg-6 col-sm-12">
                                   <Fade bottom>
                                        <h3 className="hey">Hey folks!</h3>
                                        <p>
                                             I'm Currently pursuing 3rd Computer
                                             Science & Engineering in &nbsp;
                                             <span className="highLighted">
                                                  B.M.S College of Engineering
                                             </span>
                                             , Bangalore.
                                        </p>
                                        <p className="abbP">
                                             I'm a Full Stack Developer.A
                                             programmer with good knowledge of
                                             Web dev techniques, Data-Strucres
                                             and Algorithms. I love building
                                             things and learning new techniques
                                             . Also I like working in a team,
                                             you'll learn faster and much more.
                                             As the saying goes: 'Two heads are
                                             better than one'
                                             <b>
                                                  But, hey! It's nice to meet
                                                  you!
                                             </b>
                                        </p>
                                        <div className="bio-detail">
                                             <p className="abbp1">
                                                  <b> Name </b>: Arbaz Ahmed
                                             </p>
                                             <p className="abbp1">
                                                  <b> Call me </b>: Arbaz
                                             </p>
                                             <p className="abbp1">
                                                  <b> Country </b>: India,
                                                  Bangalore
                                             </p>
                                             <p className="abbp1">
                                                  <b> Planet </b>: Earth
                                             </p>
                                             <p className="abbp1">
                                                  <b> Phone </b>: +91 6361389410
                                             </p>
                                             <p className="abbp1">
                                                  <b>Email</b>{" "}
                                                  :Arbazcs.developer@gmail.com
                                             </p>
                                             <p className="abbp1">
                                                  <b> Freelance </b>: Available
                                             </p>
                                             <p className="abbp1">
                                                  <b>Open for internships </b>:
                                                  Available
                                             </p>

                                             <p className="abbp1"></p>
                                        </div>
                                   </Fade>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default About;
