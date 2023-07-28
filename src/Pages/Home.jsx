import React, { useEffect, useState } from "react";
import '../Styles/home.css'
import Products from "../Components/Products";

const Home = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const API = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setApiData(data)
            console.log(data);     
        }
        API()
    }, [])

    return (
        <>
            <div>
                <Products apiData={apiData} />
            </div>
        </>
    )
};

export default Home;
