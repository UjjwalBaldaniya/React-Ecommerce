import React from "react";
import { Link } from "react-router-dom";

const Products = ({ id, key, image, category, price, title }) => {
    return (
        <>
            <div class="cart" key={key}>
                <img src={image} alt={title} />
                <h4>{category}</h4>
                <h5>{price}</h5>
                <Link to={`/product/${id}`}><button class="btn">Buy</button></Link>
            </div>
        </>
    )
};

export default Products;
