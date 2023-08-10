import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CatagorySection from "./CategorySection";
import Loader from "./Loader";
import Products from "./Products";

const MensClothing = () => {
    const navigate = useNavigate()
    const [mensClothing, setMensClothing] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const API = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                const mensClothing = data.filter((element) => element.category === "men's clothing")
                setMensClothing(mensClothing)
                setLoading(false);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        API()
    }, [])

    const handleClick = (id) => {
        navigate(`/home/product/${id}`)
    }

    return (
        <>
            <div>
                <CatagorySection />
                {loading ? <Loader /> :
                    <div className="productsWrapper">
                        {mensClothing.map((element) => (
                            <Products id={element.id} keyId={element.id} image={element.image} category={element.category} price={element.price} title={element.title} handleClick={() => handleClick(element.id)} />
                        ))}
                    </div>
                }
            </div>
        </>
    )
};

export default MensClothing;
