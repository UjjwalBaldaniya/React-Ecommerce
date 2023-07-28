import React from "react";
import '../Styles/navbar.css'
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <>
            <div class="navbar">
                <div class="logo">
                    <Link to="/">ABC Fashion</Link>
                </div>
                <div class="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>
                <div class="profile">
                    <Link to="/cart"><AiOutlineShoppingCart size={"40px"} style={{ color: "#10558d" }} /></Link>
                </div>
            </div>
        </>
    )
};

export default Navbar;
