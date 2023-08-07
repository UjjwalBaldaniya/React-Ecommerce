import React from "react";
import '../Styles/about.css'

const About = () => {
  return (
    <>
      <div class="about">
        <div class="container2">
          <div class="content1">
            <div class="about_image">
              <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                alt="profile_picture" />
              <div class="brands">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-square-twitter"></i>
              </div>
            </div>
            <div class="about-info">
              <h1 class="about-title">About Us</h1>
              <h1>Owner of ABC Fashion</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui fugiat delectus
                aliquam laboriosam! Corporis, maxime natus, omnis fuga sint dignissimos labore, ab hic
                praesentium enim nisi. Corporis quis dolor fuga non a aperiam omnis inventore culpa,
                magnam incidunt at dolorem! A distinctio nesciunt culpa cupiditate, quia aliquid.
                Voluptate numquam optio, illo minima iste neque soluta cupiditate impedit. Placeat
                fugiat, doloremque veritatis natus architecto.</p>
              <button class="btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;
