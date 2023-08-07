import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Products = ({ id, key, image, category, price, title }) => {
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location);

    return (
        <>
            <div class="cart" key={key}>
                <img src={image} alt={title} />
                <h4>{category}</h4>
                <h5>{price}</h5>
                <button class="btn" onClick={() => navigate(`/product/${id}`)}>Buy</button>
            </div>
        </>
    )
};

export default Products;
