import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Job Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Jobs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
