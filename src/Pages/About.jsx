import React from "react";
import '../Styles/about.css'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container2">
          <div className="content1">
            <div className="about_image">
              <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                alt="profile_picture" />
              <div className="brands">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-twitter"></i></a>
              </div>
            </div>
            <div className="about-info">
              <h1 className="about-title">About Us</h1>
              <h1>Owner of ABC Fashion</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui fugiat delectus
                aliquam laboriosam! Corporis, maxime natus, omnis fuga sint dignissimos labore, ab hic
                praesentium enim nisi. Corporis quis dolor fuga non a aperiam omnis inventore culpa,
                magnam incidunt at dolorem! A distinctio nesciunt culpa cupiditate, quia aliquid.
                Voluptate numquam optio, illo minima iste neque soluta cupiditate impedit. Placeat
                fugiat, doloremque veritatis natus architecto.</p>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;
