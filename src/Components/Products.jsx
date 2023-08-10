import React from "react";

const Products = ({ id, keyId, image, category, price, title, handleClick }) => {
    return (
        <>
            <div className="cart" key={keyId}>
                <img src={image} alt={title} />
                <h4>{category}</h4>
                <h5>$ {price}</h5>
                <button className="btn" onClick={handleClick}>Buy</button>
            </div>
        </>
    )
};

export default Products;
