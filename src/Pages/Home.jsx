import React, { useEffect, useState } from "react";
import '../Styles/home.css'
import Products from "../Components/Products";
import Loader from "../Components/Loader";
import { Outlet } from "react-router-dom";

const Home = () => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const API = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                setApiData(data)
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        API()
    }, [])

    return (
        <>
            <div>
                {loading ? <Loader /> :
                    <div className="productsWrapper">
                        {apiData.map((element) => (
                            <Products id={element.id} keyId={element.id} image={element.image} category={element.category} price={element.price} title={element.title} />
                        ))}
                    </div>
                }
            </div>
        </>
    )
};

export default Home;
