import React, { useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  CardHeader,
  CardFooter,
} from "reactstrap";
import Fade from "react-reveal/Fade";

function RenderCard({ item }) {
  if (item !== null) {
    return (
      <Card className="ca">
        <CardHeader>
          <b>{item.name}</b>
        </CardHeader>
        <CardImg
          className="cimg"
          top
          width="100%"
          src={item.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle>
            <Badge color="success">{item.stack}</Badge>
          </CardSubtitle>
          <CardText>{item.description}</CardText>
          <CardFooter>
            <Button href={item.github} className="btn btn-info" target="_blank">
              Github
            </Button>
            {item.github2 ? (
              <Button
                href={item.github2}
                className="btn btn-success"
                target="_blank"
              >
                Github Link 2
              </Button>
            ) : null}
            {item.live ? (
              <Button
                href={item.live}
                className="btn btn-success"
                target="_blank"
              >
                Live Project
              </Button>
            ) : null}
          </CardFooter>
        </CardBody>
      </Card>
    );
  } else {
    return <h1>No Projects Found</h1>;
  }
}

const Projects = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const project = props.projs.map((proj) => {
    return (
      <div key={proj.id} className="col-lg-5 col-sm-12 col-md-5 col-xs-5 m-3 ">
        <RenderCard item={proj} />
      </div>
    );
  });
  return (
    <div className="row">
      <Fade bottom>
        <br />
        <br />
        {project}
      </Fade>
    </div>
  );
};

export default Projects;
