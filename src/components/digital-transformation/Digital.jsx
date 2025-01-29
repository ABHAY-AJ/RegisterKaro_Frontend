import React from "react";
import "./Digital.css";
import image from "../../assets/Image.png";
import image1 from "../../assets/Image (1).png";
import image2 from "../../assets/Image (2).png";
import image3 from "../../assets/Image (3).png";
import image4 from "../../assets/Image (4).png";
import image5 from "../../assets/Image (5).png";
const Digital = () => {
  return (
    <>
      <div className="digital-container">
        <div className="digital-up">
          <div className="digital-heading">
            <p>EXPLORE OUR BLOGS</p>
            <h2>Accelerate Digital Transformation </h2>
          </div>
        </div>
        <div className="digital-middle">
          <div className="middle-up">
            <div className="middle-card">
              <div className="card-image">
                <img src={image}></img>
              </div>
              <div className="card-date">
                <p>Prabhash Mishra • 1 Jan 2023 • Today</p>
              </div>
              <div className="card-title">
                <h2>Small Busniess and Startup</h2>
              </div>
              <div className="card-description">
                <p>
                  Like to know the secrets of transforming a 2-14 team into a 3x
                  Super Bowl winning Dynasty?
                </p>
              </div>
              <div className="card-keywords">
  <span className="tax-audit">Tax & Audit</span>
  <span className="management">Management</span>
</div>
            </div>
            <div className="middle-card">
              <div className="card-image">
                <img src={image1}></img>
              </div>
              <div className="card-date">
                <p>Mahesh Kumar • 1 Jan 2023</p>
              </div>
              <div className="card-title">
                <h2>Scaleup Company Offer</h2>
              </div>
              <div className="card-description">
                <p>
                Mental models are simple expressions of complex processes or relationships.
                </p>
              </div>
              <div className="card-keywords">
  <span className="audit">Audit</span>
  <span className="research">Research</span>
  <span className="compliance">Compliance</span>
</div>
            </div>
            <div className="middle-card">
              <div className="card-image">
                <img src={image2}></img>
              </div>
              <div className="card-date">
                <p>Rakhi Verma • 1 Jan 2023</p>
              </div>
              <div className="card-title">
                <h2>Growing Bussiness Package</h2>
              </div>
              <div className="card-description">
                <p>
                Introduction to Wireframing and its Principles. Learn from the best in the industry.
                </p>
              </div>
              <div className="card-keywords">
  <span className="money-back">Money Back</span>
  <span className="money">Money</span>
</div>
            </div>
          </div>
          <div className="middle-up">
            <div className="middle-card">
              <div className="card-image">
                <img src={image3}></img>
              </div>
              <div className="card-date">
                <p>Karan Kumar • 1 Jan 2023</p>
              </div>
              <div className="card-title">
                <h2>Scale-up Company Offer</h2>
              </div>
              <div className="card-description">
                <p>
                Collaboration can make our teams stronger, and our individual designs better.
                </p>
              </div>
              <div className="card-keywords">
  <span className="business">Business</span>
</div>
            </div>
            <div className="middle-card">
              <div className="card-image">
                <img src={image4}></img>
              </div>
              <div className="card-date">
                <p>Richa Singh • 1 Jan 2023</p>
              </div>
              <div className="card-title">
                <h2>Scale-Up Comapny Offer</h2>
              </div>
              <div className="card-description">
                <p>
                JavaScript frameworks make development easy with extensive features and functionalities.
                </p>
              </div>
              <div className="card-keywords">
                <span className="money-back">Tax Return</span>
                <span className="money">Audit</span>
              </div>
            </div>
            <div className="middle-card">
              <div className="card-image">
                <img src={image5}></img>
              </div>
              <div className="card-date">
                <p>Prabhash Mishra • 1 Jan 2023 • Today</p>
              </div>
              <div className="card-title">
                <h2>Small Busniess and Startup</h2>
              </div>
              <div className="card-description">
                <p>
                  Like to know the secrets of transforming a 2-14 team into a 3x
                  Super Bowl winning Dynasty?
                </p>
              </div>
              <div className="card-keywords">
  <span className="tax-audit">Tax & Audit</span>
  <span className="management">Management</span>
</div>
            </div>
          </div>
        </div>
        <div className="digital-low">
            <button className="learn-more">Show More Blogs</button>
        </div>
      </div>
    </>
  );
};

export default Digital;
