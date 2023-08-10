import React, { useState } from "react";
import '../Styles/contact.css'

const Contact = () => {
  const [inputField, setInputField] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputField);
  }

  return (
    <>
      <div className="contact">
        <div className="container1">
          <div className="content">
            <div className="left_side">

              <div className="location" id="info">
                <i className="fa-solid fa-location-dot"></i>
                <h2>Address</h2>
                <p>Surat, Gujarat</p>
                <p>Baroda, Gujarat</p>
              </div>
              <div className="phone" id="info">
                <i className="fa-sharp fa-solid fa-phone"></i>
                <h2>Phone</h2>
                <p>+91 12345 67890</p>
                <p>+91 98765 43210</p>
              </div>
              <div className="email" id="info">
                <i className="fa-solid fa-envelope"></i>
                <h2>Email</h2>
                <p>abcfashion@gmail.com</p>
                <p>info.abcfashion@gmail.com</p>
              </div>

            </div>
            <div className="right_side">
              <div className="title">
                <h1>Send us a message</h1>
                <p>If you have any work from me or any types of quries related to my tutorial, you
                  can send me message from here. It's my pleasure to help you.</p>
              </div>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="contact_form">
                    <label >Name :</label>
                    <input type="text" placeholder="enter your name..." name="name" value={inputField.name} onChange={handleChange} />

                    <label>Email :</label>
                    <input type="email" placeholder="enter your email..." name="email" value={inputField.email} onChange={handleChange} />

                    <label>Message :</label>
                    <textarea placeholder="enter message..." rows="10" cols="50" name="message" value={inputField.message} onChange={handleChange}></textarea>
                  </div>
                  <div className="contact-btn">
                    <button className="btn" type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;
