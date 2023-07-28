import React, { useState } from "react";

const Products = ({ apiData }) => {

    const [productID, setProductID] = useState();

    const productClick = (id) => {
        setProductID(id)
        console.log(id);
    }
    
    return (
        <>
            <div class="productsWrapper">
                {apiData.map((element) => (
                    <div class="cart" key={element.id}>
                        <img src={element.image} alt={element.title} />
                        <h4>{element.category}</h4>
                        <h5>{element.price}</h5>
                        <button class="btn" onClick={() => productClick(element.id)}>Buy</button>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Products;
