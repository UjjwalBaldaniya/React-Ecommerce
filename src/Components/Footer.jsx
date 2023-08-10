import React from "react";
import '../Styles/footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="lf">
                        <h3 className="copyright">ABC Fashion</h3>
                        <p>If you have any work from me or any types of quries related to <br /> my tutorial, you can send me
                            message from here.</p>
                    </div>
                    <div className="rt">
                        <p>copyright &copy;2023 <a href="/" className="copyright">ABC Fashion</a> </p>
                        <div className="footer-form">
                            <label>Email : </label>
                            <input type="text" placeholder="Enter Your Email..." />
                            <button className="btn1">Submit</button>
                        </div>
                    </div>
                    <div className="follow">
                        <h3>Follow Us</h3>
                        <div className="follow-brands">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-twitter"></i></a>
                            <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;
