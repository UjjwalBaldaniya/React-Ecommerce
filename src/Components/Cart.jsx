import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import '../Styles/home.css'
import Loader from "./Loader";

const Cart = () => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams()

    useEffect(() => {
        const productApi = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
                const data = await res.json()
                setProductData(data)
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        productApi()
    }, [params.id])

    return (
        <>
            <div>
                {loading ? <Loader /> :
                    <div className="productsWrapper">
                        <Products id={productData.id} keyId={productData.id} image={productData.image} category={productData.category} price={productData.price} title={productData.title} />
                    </div>
                }
            </div>
        </>
    )
};

export default Cart;
