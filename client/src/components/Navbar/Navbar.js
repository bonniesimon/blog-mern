import React, { useState, useEffect } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css'



import { getStoredUser } from './../../utils/auth';

const Navbar = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const user = getStoredUser();
        if (user) {
            setUser(user);
            // console.log(user);
        }

    }, [])

    return (
        <Router>
            <div className="navbar">
                <div className="navbar__heading">
                    <h1>blogski</h1>
                </div>
                <div className="nav">
                    <ul className="nav__links">

                        <li className="link-items">
                            <Link to="/">Home</Link>
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
                            <span>{user?user.username:'Guest'}</span>
                        </div>
                        <div className="user__avatar"></div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Navbar
