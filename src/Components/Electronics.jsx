import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CatagorySection from "./CategorySection";
import Loader from "./Loader";
import Products from "./Products";

const Electronics = () => {
    const navigate = useNavigate()
    const [electronics, setElectronics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const API = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                const electronic = data.filter((element) => element.category === "electronics")
                setElectronics(electronic)
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
                        {electronics.map((element) => (
                            <Products id={element.id} keyId={element.id} image={element.image} category={element.category} price={element.price} title={element.title} handleClick={() => handleClick(element.id)} />
                        ))}
                    </div>
                }
            </div>
        </>
    )
};

export default Electronics;
