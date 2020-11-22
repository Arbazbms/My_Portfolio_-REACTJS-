import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Projects from "./ProjectsComponents";
import Certificates from "./CertificatesComponents";
import { PROJECTS } from "../shared/projects";
import { CERTIFICATES } from "../shared/certificates";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projs: PROJECTS,
      certi: CERTIFICATES,
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <React.StrictMode>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/projects"
              component={() => <Projects projs={this.state.projs} />}
            />
            <Route
              exact
              path="/certificates"
              component={() => <Certificates certi={this.state.certi} />}
            />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </React.StrictMode>
      </div>
    );
  }
}

export default Main;
