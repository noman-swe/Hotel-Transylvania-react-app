import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../../images/transylvania-logo.png';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary p-0 nav-wrapper">
                <Container className='nav-container'>
                    <Navbar.Brand>
                        <Link to={'/'}>
                            <img className='logo-img' src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="navbar-links">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto nav-links-style ">
                                <CustomLink to={'/'}></CustomLink>
                                <CustomLink to={'/home'}>Home</CustomLink>
                                <CustomLink to={'/rooms'}>Rooms</CustomLink>
                                <CustomLink to={'/book'}>Order</CustomLink>
                                <CustomLink to={'/about'}>About</CustomLink>
                                <CustomLink to={'/contact'}>Contact</CustomLink>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;