import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <Router>
        <div className="navbar">
            <div className="navbar__heading">
                <h1>blogski</h1>
            </div>
            <div className="nav">
                <ul className="nav__links">

                    <li className="link-items">
                        <Link to="/">Write</Link>
                    </li>
                    <li className="link-items">
                        <Link to="/">Write</Link>
                    </li>
                    <li className="link-items">
                        <Link to="/">Settings</Link>
                    </li>

                </ul>
                <div className="nav__user">
                    <div className="user__username">
                        <span>Bonnie Simon</span>
                    </div>
                    <div className="user__avatar"></div>
                </div>
            </div>
        </div>
        </Router>
    )
}

export default Navbar
