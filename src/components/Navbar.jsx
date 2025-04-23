import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Close the mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    // Close mobile menu when navigating to a new page
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <p>Adeena Sajjad</p>
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li><NavLink to="/home" className={({ isActive }) => isActive ? 'linkActive' : ''} onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? 'linkActive' : ''} onClick={closeMenu}>Gallery</NavLink></li>
                        <li><NavLink to="/about-me" className={({ isActive }) => isActive ? 'linkActive' : ''} onClick={closeMenu}>The Artist</NavLink></li>
                        <li><NavLink to="/contact-me" className={({ isActive }) => isActive ? 'linkActive' : ''} onClick={closeMenu}>Connect</NavLink></li>
                    </ul>
                </div>

                <div className="buttons">
                    <NavLink target='_blank' to="https://www.instagram.com" className="btn">Insta</NavLink>
                    <NavLink target='_blank' to="https://www.gumroad.com" className="btn">Buy Now</NavLink>
                </div>

                <div className="hamburger" onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}>
                    <span className={isOpen ? 'open' : ''}></span>
                    <span className={isOpen ? 'open' : ''}></span>
                    <span className={isOpen ? 'open' : ''}></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;