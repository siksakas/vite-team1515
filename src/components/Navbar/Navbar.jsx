import "./navbar.css";

import pic from "../images/MorTorq.png";
import picture from "../images/navpic.png";
import { Outlet, Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavPage(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" className="navbg">
        <Container className="navContent">
          <Navbar.Brand href="#home">
            <img src={pic} alt="logo  " className="logo img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto alignnav">
              <Nav.Link href="#home">
                {" "}
                <Link className="links" to="/">
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown
                title="About"
                id="nav-dropdown-dark-example"
                menuVariant="dark"
                className="links"
              >
                <Link className="droplinks" to="/Leaders">
                  <NavDropdown.Item href="#action/3.1" className="droplinks">
                    Our Leaders
                  </NavDropdown.Item>
                </Link>
                <Link className="droplinks" to="/Outreach">
                  <NavDropdown.Item href="#action/3.2" className="droplinks">
                    Outreach
                  </NavDropdown.Item>
                </Link>
                <Link className="droplinks" to="/Sponsor">
                  <NavDropdown.Item href="#action/3.3" className="droplinks">
                    Sponsor
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Nav.Link href="https://www.bhef.org/apps/form/bhhsrobotics" target="_blank" className="links">
                Donate
              </Nav.Link>
              <NavLink></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavPage;
