import React from "react";
import '../Styles/navbar.css'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">ABC Fashion</Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>
                <div className="logout">
                    <h2 onClick={handleClick}>Log Out</h2>
                </div>
            </div>
        </>
    )
};

export default Navbar;
