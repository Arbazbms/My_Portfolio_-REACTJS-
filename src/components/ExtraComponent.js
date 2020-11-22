import React from "react";
import Fade from "react-reveal/Fade";
import { Media } from "reactstrap";

import Abc from "../images/abc-logo.png";
function Extra() {
     return (
          <div className="jumbotron hd1">
               <Fade up>
                    <Media>
                         <Media left href="#">
                              <Media
                                   src={Abc}
                                   alt="ABC"
                                   width="80px"
                                   height="80px"
                                   className="m-2"
                              />
                         </Media>
                         <Media body>
                              <Media heading>ABC Swabhimaan Scholarship</Media>
                              Selected for ABC Swabhimaan Scholarship Program by
                              clearing all 3 phases of selection process
                              (100/100) in final coding test.. And got access to
                              trainings worth (1.5L).
                              <p>(2020)</p>
                         </Media>
                    </Media>
               </Fade>
          </div>
     );
}
export default Extra;
