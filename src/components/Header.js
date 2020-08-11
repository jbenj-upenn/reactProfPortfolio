// Allows React to utilize the component pages
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header(props) {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Joshua Benjamin Professional Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#portfolio">Portolio</Nav.Link> */}

                    <NavDropdown title="Portfolio Quick Links" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://goal-getters.herokuapp.com/">Goal-Getter App</NavDropdown.Item>
                        <NavDropdown.Item href="https://breaking-bread-donate.herokuapp.com/">Breaking Bread App</NavDropdown.Item>
                        <NavDropdown.Item href="https://jbenj-upenn.github.io/CovidActivities/">Covid Activities App</NavDropdown.Item>
                        <NavDropdown.Item href="https://jbenj-upenn.github.io/personal-profile-v2020/">Profile with HTML/CSS</NavDropdown.Item>
                        <NavDropdown.Item href="https://immense-river-52204.herokuapp.com/">Burger Smash</NavDropdown.Item>
                        <NavDropdown.Item href="https://expressnotetaker-jbenj.herokuapp.com/">Express Note-Taker</NavDropdown.Item>
                        <NavDropdown.Item href="https://jbenj-upenn.github.io/WeatherOutlook_6/">Weather Outlook</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default Header;