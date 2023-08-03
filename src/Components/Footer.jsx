import React from "react";
import '../Styles/footer.css'

const Footer = () => {
    return (
        <>
            <div class="footer">
                <div class="footer-content">
                    <div class="lf">
                        <h3 class="copyright">ABC Fashion</h3>
                        <p>If you have any work from me or any types of quries related to <br /> my tutorial, you can send me
                            message from here.</p>
                    </div>
                    <div class="rt">
                        <p>copyright &copy;2023 <a href="/" class="copyright">ABC Fashion</a> </p>
                        <div class="footer-form">
                            <label>Email : </label>
                            <input type="text" placeholder="Enter Your Email..." />
                            <button class="btn1">Submit</button>
                        </div>
                    </div>
                    <div class="follow">
                        <h3>Follow Us</h3>
                        <div class="follow-brands">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-square-twitter"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;
