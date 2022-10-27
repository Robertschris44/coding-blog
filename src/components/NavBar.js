import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar id="navBar">
        <Navbar.Brand id="navBrand" href="#home">Travelog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id ="navLink" href="#home">Home</Nav.Link>
            <Nav.Link id ="navLink" href="#login">Login</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MyList</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Friends
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Upload</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;