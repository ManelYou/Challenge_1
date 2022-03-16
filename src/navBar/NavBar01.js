import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './NavBar01.css';

const NavBar01 =()=>{
    return(<>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Manel EL YOUNSI</Navbar.Brand>
    </Container> 
    <Nav className="me-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar>
    </>);
}
export default NavBar01;