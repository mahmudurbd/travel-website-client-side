import React from 'react';
import logo from '../../../images/travelo-logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
            <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Tour Packages</Nav.Link>
                <Nav.Link href="/"><i className="fas fa-user-circle"></i></Nav.Link>
                </Nav>
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;