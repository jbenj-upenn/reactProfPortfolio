// Allows React to utilize the component pages
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header(props){
        return (

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Joshua Benjamin Professional Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#portfolio">Portolio</Nav.Link> */}

                        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Breaking Bread App</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Covid Activities App</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">HTML/CSS Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Burger Smash</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }


export default Header;