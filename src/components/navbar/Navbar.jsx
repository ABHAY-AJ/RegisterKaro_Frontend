import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/Group 1261153022.png";

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Top Navbar */}
            <div className="top-navbar">
    <a href="mailto:info@registerkaro.in" className="email-link">
        <i className="fas fa-envelope"></i> www.registerkaro.in
    </a>
    <span className="divider">|</span>
    <a href="tel:+918447746183" className="phone-link">
        <i className="fas fa-phone"></i> +91 84477 46183
    </a>
    <span className="divider">|</span>
    <div className="social-icons">
        <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
        <a href="#" className="icon"><i className="fab fa-twitter"></i></a>
        <a href="#" className="icon"><i className="fab fa-pinterest"></i></a>
    </div>
</div>

            {/* Main Navbar */}
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <button
                    className="toggle-button"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                <div className={`nav-items ${isMenuOpen ? "show" : ""}`}>
                    <nav className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Our Services</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact Us</a>
                        <a href="#">About Us</a>
                    </nav>
                    <div className="header-right">
                        <button className="talk-button">Talk An Expert</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
