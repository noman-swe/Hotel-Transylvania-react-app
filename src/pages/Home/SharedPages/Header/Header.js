import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../../images/transylvania-logo.png';
const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary p-0 nav-wrapper">
                <Container className='nav-container'>
                    <Navbar.Brand href="#home">
                        <img className='logo-img' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="navbar-links">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto links-color ">
                                <Nav.Link to={'/'}>Home</Nav.Link>
                                <Nav.Link to={"/rooms"}>Rooms</Nav.Link>
                                <Nav.Link to={"/order"}>Order</Nav.Link>
                                <Nav.Link to={"/about"}>About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;