import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CatagorySection from "./CategorySection";
import Loader from "./Loader";
import Products from "./Products";

const Jewelery = () => {
    const navigate = useNavigate()
    const [jewelery, setJewelery] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const API = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json()
                const jeweleryitem = data.filter((element) => element.category === "jewelery")
                setJewelery(jeweleryitem)
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
                        {jewelery.map((element) => (
                            <Products id={element.id} keyId={element.id} image={element.image} category={element.category} price={element.price} title={element.title} handleClick={() => handleClick(element.id)} />
                        ))}
                    </div>
                }
            </div>
        </>
    )
};

export default Jewelery;
