import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Products = ({ id, keyId, image, category, price, title }) => {
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location);

    return (
        <>
            <div className="cart" key={keyId}>
                <img src={image} alt={title} />
                <h4>{category}</h4>
                <h5>{price}</h5>
                <button className="btn" onClick={() => navigate(`/home/product/${id}`)}>Buy</button>
            </div>
        </>
    )
};

export default Products;
