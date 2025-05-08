import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AkopoIto from '../assets/logour.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navLinkClass = ({ isActive }) =>
        `px-3 py-2 text-white hover:scale-125 transition-transform duration-200 ${isActive ? 'border-b-4 border-pink-400' : ''
        }`;

    return (
        <nav className="bg-gray-700 text-white sticky top-0 z-50 shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo Image */}
                {/* Logo and Brand Name */}
                <div className="flex items-center space-x-2">
                    <img
                        src={AkopoIto}
                        alt="Logo"
                        className="w-10 h-10 md:w-10 md:h-10 lg:w-20 lg:h-20 rounded-full object-cover transition-transform duration-200"
                    />
                    <div className="px-4 hover:text-pink-400 hover:scale-125 transition text-xl font-bold">
                        <Link to="/" onClick={closeMenu}>Atchie</Link>
                    </div>
                </div>



                {/* Desktop Nav Links */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
                    <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>Services</NavLink>
                    <NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>Projects</NavLink>
                    <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink>
                </div>

                {/* Hamburger Menu Button */}
                <div className="md:hidden" onClick={toggleMenu}>
                    <div className="space-y-1 cursor-pointer">
                        <div className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`h-0.5 w-6 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                        <div className={`h-0.5 w-6 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-800 space-y-4 py-4">
                    <NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
                    <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>Services</NavLink>
                    <NavLink to="/projects" className={navLinkClass} onClick={closeMenu}>Projects</NavLink>
                    <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
