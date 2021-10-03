import React from 'react'
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function NavbarNew() {
    return (
        <Navbar className="main-nav" expand="lg" variant="dark">
            <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/weather" activeClassName="active">Live Weather</Link>
                    <Link to="/articles" activeClassName="active">Articles</Link>
                    <Link to="/projects" activeClassName="active">Projects</Link>
                    <Link to="/about" activeClassName="active">About</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}