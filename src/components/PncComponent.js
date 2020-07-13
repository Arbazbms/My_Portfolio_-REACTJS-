import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Pnc() {
  return (
    <div className="hd1" id="pnc">
      <h1 className="ml-4">Projects And Certifications</h1>
      <br />
      <Fade bottom>
        <Row>
          <Col sm="6">
            <div className="m-4">
              <Card body className="pnc">
                <CardTitle>PROJECTS</CardTitle>
                <CardText></CardText>
                <Link to="/projects">
                  <Button>SEE PROJECTS</Button>
                </Link>
              </Card>
            </div>
          </Col>
          <Col sm="6">
            <div className="m-4">
              <Card body className="pnc">
                <CardTitle>CERTIFICATIONS AND ACHIEVEMENTS</CardTitle>
                <CardText></CardText>
                <Link to="/certificates">
                  <Button>SEE CERTIFICATES</Button>
                </Link>
              </Card>
            </div>
          </Col>
        </Row>
      </Fade>
    </div>
  );
}

export default Pnc;
