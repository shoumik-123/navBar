import React, { useState } from 'react';
import { ManuItems } from './ManuItems';
import '../../assets/css/navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <div>
            <nav className="NavbarItems">
                <h1 className="nav-logo">
                    Logo<i className="fab fa-react"></i>
                </h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul>
                    {ManuItems.map((item, i) => {
                        return (
                            <li key={i}>
                                <a className={item.className} href={item.uri}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
