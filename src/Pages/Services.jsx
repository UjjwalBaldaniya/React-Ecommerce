import React from "react";
import '../Styles/services.css'
import Flipkart from '../Images/Flipkart-logo.png'
import Amazon from '../Images/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png'
import Myntra from '../Images/myntra.png'
import Meesho from '../Images/meesho.jpeg'

const Services = () => {
    return (
        <>
            <div className="service">
                <div className="container3">
                    <div className="service-heading">
                        <h1>Our Services</h1>
                    </div>
                    <div className="service-cart">
                        <div className="product-cart">
                            <img src={Flipkart} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatum itaque,
                                iusto perferendis ullam doloremque veritatis omnis corporis voluptatem debitis vitae
                                dolorum? Quibusdam autem perferendis odio neque distinctio. Natus, perspiciatis fuga,
                                exercitationem voluptate neque est modi necessitatibus aperiam dolorum delectus adipisci
                                quo magni. Impedit quam veritatis, dolorum ad quas quisquam!</p>
                            <div className="adiv">
                                <a href="https://www.flipkart.com/" target="_blank" rel="noreferrer" className="atag">Shopping now</a>
                            </div>
                        </div>
                        <div className="product-cart">
                            <img src={Myntra} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatum itaque,
                                iusto perferendis ullam doloremque veritatis omnis corporis voluptatem debitis vitae
                                dolorum? Quibusdam autem perferendis odio neque distinctio. Natus, perspiciatis fuga,
                                exercitationem voluptate neque est modi necessitatibus aperiam dolorum delectus adipisci
                                quo magni. Impedit quam veritatis, dolorum ad quas quisquam!</p>
                            <div className="adiv">
                                <a href="https://www.myntra.com/" target="_blank" rel="noreferrer" className="atag">Shopping now</a>
                            </div>
                        </div>
                        <div className="product-cart">
                            <img src={Meesho} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatum itaque,
                                iusto perferendis ullam doloremque veritatis omnis corporis voluptatem debitis vitae
                                dolorum? Quibusdam autem perferendis odio neque distinctio. Natus, perspiciatis fuga,
                                exercitationem voluptate neque est modi necessitatibus aperiam dolorum delectus adipisci
                                quo magni. Impedit quam veritatis, dolorum ad quas quisquam!</p>
                            <div className="adiv">
                                <a href="https://www.meesho.com/" target="_blank" rel="noreferrer" className="atag">Shopping now</a>
                            </div>
                        </div>
                        <div className="product-cart">
                            <img src={Amazon} alt="img" />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptatum itaque,
                                iusto perferendis ullam doloremque veritatis omnis corporis voluptatem debitis vitae
                                dolorum? Quibusdam autem perferendis odio neque distinctio. Natus, perspiciatis fuga,
                                exercitationem voluptate neque est modi necessitatibus aperiam dolorum delectus adipisci
                                quo magni. Impedit quam veritatis, dolorum ad quas quisquam!</p>
                            <div className="adiv">
                                <a href="https://www.amazon.in/" target="_blank" rel="noreferrer" className="atag">Shopping now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Services;
