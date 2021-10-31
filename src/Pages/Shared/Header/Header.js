import React from 'react';
import './Header.css';
import logo from '../../../images/travelo-logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <Navbar className="header" collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container fluid>
            <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/home#packages">Tour Packages</Nav.Link>
                {user?.email?<Nav.Link as={HashLink} to="/myorders">My Orders</Nav.Link>: ''}
                {user?.email?<Nav.Link as={HashLink} to="/">Manage Orders</Nav.Link>: ''}
                <Navbar.Text>
                     <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
                {!user?.email?
                    
                    <Nav.Link as={Link} to="/login"><i className="fas fa-user-circle fs-4"></i></Nav.Link>:
                    <Button onClick={logOut} variant="secondary" size="sm mx-2">Logout</Button>
                    }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;