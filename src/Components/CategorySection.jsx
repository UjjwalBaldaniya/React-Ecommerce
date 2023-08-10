import React from "react";
import '../Styles/categorySection.css'
import { NavLink } from "react-router-dom";

const CatagorySection = () => {
    return (
        <>
            <div className="catagory">
                <div className="catagory_list">
                    <ul>
                        <li><NavLink to='/home'>All</NavLink></li>
                        <li><NavLink to='/home/womensClothing'>women's clothing</NavLink></li>
                        <li><NavLink to='/home/electronics'>electronics</NavLink></li>
                        <li><NavLink to='/home/mensClothing'>men's clothing</NavLink></li>
                        <li><NavLink to='/home/jewelery'>jewelery</NavLink></li>
                    </ul>
                </div>
            </div >
        </>
    )
};

export default CatagorySection;
