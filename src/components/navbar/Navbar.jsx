import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Logo</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-link">Services</Link>
                </li>
            </ul>
            <div className="profile-menu">
                <button className="profile-menu-toggle" onClick={toggleMenu}>
                    <img
                        className="profile-menu-avatar"
                        src="https://media.licdn.com/dms/image/C4E03AQHouDS3TNY96Q/profile-displayphoto-shrink_800_800/0/1622655546895?e=2147483647&v=beta&t=1LQHT03FVCrZ7c6RyCqc678C4vd6pSUbgjMBznklNiQ"
                        alt="Profile Avatar"
                    />

                    {/*<i className="fas fa-user"></i>*/}
                </button>
                {isOpen && (
                    <ul className="profile-menu-dropdown">
                        <li>
                            <Link to="https://www.facebook.com/shoumik152/" target="_blank">Profile</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
