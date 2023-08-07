import React from "react";
import '../Styles/contact.css'

const Contact = () => {
  return (
    <>
      <div class="contact">
        <div class="container1">
          <div class="content">
            <div class="left_side">

              <div class="location" id="info">
                <i class="fa-solid fa-location-dot"></i>
                <h2>Address</h2>
                <p>Surat, Gujarat</p>
                <p>Baroda, Gujarat</p>
              </div>
              <div class="phone" id="info">
                <i class="fa-sharp fa-solid fa-phone"></i>
                <h2>Phone</h2>
                <p>+91 12345 67890</p>
                <p>+91 98765 43210</p>
              </div>
              <div class="email" id="info">
                <i class="fa-solid fa-envelope"></i>
                <h2>Email</h2>
                <p>abcfashion@gmail.com</p>
                <p>info.abcfashion@gmail.com</p>
              </div>

            </div>
            <div class="right_side">
              <div class="title">
                <h1>Send us a message</h1>
                <p>If you have any work from me or any types of quries related to my tutorial, you
                  can send me message from here. It's my pleasure to help you.</p>
              </div>
              <div class="form">
                <label>Name :</label>
                <input type="text" placeholder="enter your name..." />

                <label>Email :</label>
                <input type="email" placeholder="enter your email..." />

                <label>Message :</label>
                <textarea placeholder="enter message..." rows="10" cols="50"></textarea>

                <button class="btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;
