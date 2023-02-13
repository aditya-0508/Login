import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="nav-heading">
                <h1>My App</h1>
            </div>
            <div className="nav-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
}

export default Navbar;
