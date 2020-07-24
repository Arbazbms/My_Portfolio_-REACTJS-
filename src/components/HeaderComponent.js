import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Resume from "../images/ArbazAhmed--RESUME.pdf";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="navcol fixed-top">
        <Link to="/">
          <NavbarBrand className="text-white hn">Arbaz Ahmed</NavbarBrand>
        </Link>
        <NavbarToggler className="navbartog" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link text-white" to="/">
                Home Page
              </NavLink>
            </NavItem>
            <NavItem>
              <a className="nav-link text-white" href="#About" onClick={toggle}>
                About
              </a>
            </NavItem>
            <NavItem className="text-white">
              <a
                className="nav-link text-white"
                href="#skill-top"
                onClick={toggle}
              >
                Skills
              </a>
            </NavItem>
            <NavItem className="text-white">
              <a className="nav-link text-white" href="#edu" onClick={toggle}>
                Education
              </a>
            </NavItem>
            <NavItem className="text-white">
              <a
                className="nav-link text-white"
                href="#contact"
                onClick={toggle}
              >
                contact
              </a>
            </NavItem>
            <NavItem className="text-white">
              <a className="nav-link text-white" href="#pnc" onClick={toggle}>
                Projects&Certificates
              </a>
            </NavItem>
            <NavItem className="text-white">
              <NavLink
                className="nav-link text-white"
                to="/projects"
                onClick={toggle}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem className="text-white">
              <NavLink
                className="nav-link text-white"
                to="/certificates"
                onClick={toggle}
              >
                Certifications
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <button
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a
                className="res hd1"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
