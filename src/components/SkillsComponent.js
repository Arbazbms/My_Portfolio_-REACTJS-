import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";

import android from "../images/android-studio.png";
import bootstrap4 from "../images/bootstrap4.png";
import C from "../images/C.png";
import php from "../images/php.jpg";
import css3 from "../images/css3.png";
import ds from "../images/ds.png";
import github from "../images/github.png";
import html5 from "../images/html5.png";
import java from "../images/java.png";
import jquery from "../images/jquery.png";
import js from "../images/js.png";
import linux from "../images/linux.png";
import nodejs from "../images/nodejs.png";
import npm from "../images/npm.png";
import postman from "../images/postman.png";
import algo from "../images/algo.png";
import react from "../images/react.png";
import heroku from "../images/heroku.jpg";
import expressjs from "../images/expressjs.png";
import netlify from "../images/netlify.png";
import vscode from "../images/vscode.png";
import mysql from "../images/mysql.png";
import mongodb from "../images/mongodb.png";
import Fade from "react-reveal/Fade";

class Skills extends Component {
  render() {
    return (
      <div id="skill-top">
        <Fade bottom>
          <h2 className="hd1 m-5">My Skill-Set</h2>
        </Fade>

        <div id="no-mob" className="logo-container">
          <Fade bottom>
            <Column flexGrow={1}>
              <Row wrap vertical="center">
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={html5}
                    alt="html5"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={css3}
                    alt="css"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={heroku}
                    alt="heroku"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={js}
                    alt="js"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={react}
                    alt="react"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={bootstrap4}
                    alt="bootstrap"
                  ></img>
                </Column>

                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={github}
                    alt="github"
                  ></img>
                </Column>
              </Row>
            </Column>
          </Fade>

          <Fade bottom>
            <Column flexGrow={1}>
              <Row wrap vertical="center">
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={java}
                    alt="java"
                  ></img>
                </Column>

                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={C}
                    alt="C"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={php}
                    alt="php"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={nodejs}
                    alt="node"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={mysql}
                    alt="mysql"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={npm}
                    alt="npm"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={expressjs}
                    alt="express"
                  ></img>
                </Column>
              </Row>
            </Column>
          </Fade>

          <Fade bottom>
            <Column flexGrow={1}>
              <Row wrap vertical="center">
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={postman}
                    alt="postman"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo1"
                    width="100px"
                    height="100px"
                    src={mongodb}
                    alt="mongodb"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={algo}
                    alt="algo"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={ds}
                    alt="ds "
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={linux}
                    alt="linux"
                  ></img>
                </Column>
                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={vscode}
                    alt="visual studio code"
                  ></img>
                </Column>

                <Column flexGrow={1} horizontal="center">
                  <img
                    className="logo"
                    width="100px"
                    height="100px"
                    src={netlify}
                    alt="netlify"
                  ></img>
                </Column>
              </Row>
            </Column>
          </Fade>
        </div>
      </div>
    );
  }
}
export default Skills;
