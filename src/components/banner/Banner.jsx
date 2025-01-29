import React from "react";
import "./Banner.css";
import image1 from "../../assets/Group-6631 1.png";
import image2 from "../../assets/Group 1261153002.png"
import vector3 from "../../assets/Vector.png"
import vector2 from "../../assets/SVG.png"
const Banner = () => {
  return (
    <>
      <div className="main">
        <div className="left-content">
          <div className="google-rating">★ <span>Google Rating</span> ★★★★★</div>
          <div className="heading">
            <h1>Your Trusted Partner for<span> Compliance</span> Business Needs</h1>
          </div>
          <div className="description">
            <p>
              An online business compliance platform that helps entrepreneurs
              and other individuals with various, registrations, tax filings,
              and other legal matters.
            </p>
          </div>
          <div className="stats-div">
            <ul className="stats">
              <li><img src={vector2}></img>4.5+ Customer Rating</li>
              <li><img src={vector2}></img>20,000+ Clients</li>
              <li><img src={vector3}></img>99.8% Financial Stability</li>
            </ul>
          </div>
          <div className="button-div">
            <button className="learn-more">Talk An Expert</button>
            <button className="secondary-button"><i class="fa-brands fa-youtube"></i>
            See how it works</button>
          </div>
        </div>
        <div className="right-content">
          <div className="image-1">
            <img src={image1} class="image"></img>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Banner;
