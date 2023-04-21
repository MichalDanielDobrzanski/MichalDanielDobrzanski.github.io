import React from 'react';
import * as ROUTES from '../pages/Routes.js';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <Navbar.Brand as={Link} to={ROUTES.HOME_ROUTE}>Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to={ROUTES.ABOUT_ROUTE}>About</Nav.Link>
          <Nav.Link as={Link} to={ROUTES.CONTACT_ROUTE}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;

