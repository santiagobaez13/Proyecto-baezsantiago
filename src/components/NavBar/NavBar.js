import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './NavBar.css';  




const NavBar = () => {
  return (
    <Navbar className="NavBar" style={{ backgroundColor: '#e7c985' }} expand="lg">

      <Container>
        <Navbar.Brand as={Link} to="/">
          
          Mundo Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/celular">
              Celulares
            </Nav.Link>
            <Nav.Link as={Link} to="/category/tablets">
              Tablets
            </Nav.Link>
            <Nav.Link as={Link} to="/category/notebooks">
              Notebooks
            </Nav.Link>
          </Nav>
          <Button variant="primary" as={Link} to="/cart">
            Ver Carrito
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;