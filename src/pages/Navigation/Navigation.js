import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../photos/logo.svg'

const Navigation = () => {
  const { user ,logOut} = useAuth();
    return (
        <>
    <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
        <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <Navbar.Brand href="#home">Medicare Center</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Nav >
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/treatments">Treatments</Nav.Link>
      <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                {user?.email ?
                  <Nav.Link onClick={logOut} as={Link} to="/register">Sing Out</Nav.Link> :
                  <Nav.Link as={Link} to="/register">Register</Nav.Link>}
    </Nav>
      <Navbar.Text>
                Signed in as: <a href="#login">{ user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
    </Navbar>   
        </>
    );
};

export default Navigation;