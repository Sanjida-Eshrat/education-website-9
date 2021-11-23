import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import newLogo from '../../newLogo.png';
import './Header.css';


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="items">
                    <img
                        src={newLogo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt=""
                    />{' '} <span style={{color:'orange'}}>Web</span>Learners
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to="/home" className="items"><li> Home</li></Link>
                    <Link to="/about" className="items"><li> About</li></Link>
                    <Link to="/courses" className="items"><li> Courses</li> </Link>
                    <Link to="/contact" className="items"><li> Contact Us</li> </Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;