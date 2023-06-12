import React, { useState } from "react";
import { Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    
    window.addEventListener("scroll", onScroll);

    return() => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" 
                        className={activeLink === 'home' ? ' active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>

                        <Nav.Link href="#skills" 
                        className={activeLink === 'skills' ? ' active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('skills')}>
                            Skills
                        </Nav.Link>

                        <Nav.Link href="#projects" 
                        className={activeLink === 'home' ? ' active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <HashLink to='#connect'>
                            <button className="vvd">
                                <span>Let's Connect</span>
                            </button>
                        </HashLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Router>
    )
}