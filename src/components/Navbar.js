import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/weather">Live Weather</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/projects">Projects</Link>
            <Link to='/about-ray'>About</Link>
        </nav>
    )
}
