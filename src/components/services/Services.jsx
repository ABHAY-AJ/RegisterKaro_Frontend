import React from "react";
import "./Services.css";
import svg1 from "../../assets/svg1.png";
import svg2 from "../../assets/svg2.png";
import svg3 from "../../assets/svg3.png";
import svg4 from "../../assets/svg4.png";
import svg5 from "../../assets/svg5.png";
import svg6 from "../../assets/svg6.png";
import svg7 from "../../assets/Symbol (4).png";
function Services() {
  return (
    <>
      <div className="services">
        <div className="services-heading">
          <div className="heading">
            <p>WELCOME TO REGISTER KARO.IN</p>
          </div>
          <div className="heading">
            <h3>Explore Our Services</h3>
          </div>
        </div>
        <div className="card-container">
          <div className="card-column">
            <div className="card">
              <div className="symbol">
                <img src={svg1}></img>
              </div>
              <div className="service-heading">
                <h2>Company Formation</h2>
              </div>
              <div className="service-description">
                <p>
                  Build web-based solutions that enhance customer experience.
                </p>
              </div>
              <div className="learn">Learn More <img src={svg7}></img></div>
            </div>
            <div className="card">
              <div className="symbol">
                <img src={svg2}></img>
              </div>
              <div className="service-heading">
                <h2>Company Secretarial Services</h2>
              </div>
              <div className="service-description">
                <p>
                  Make data-driven decisions and utilize technology to reach
                  business goals.
                </p>
              </div>
              <div className="learn">Learn More <img src={svg7}></img></div>
            </div>
          </div>
          <div className="card-column">
            <div className="card">
              <div className="symbol">
                <img src={svg3}></img>
              </div>
              <div className="service-heading">
                <h2>Virtual Office Address</h2>
              </div>
              <div className="service-description">
                <p>
                  Foster customer relationships by effectively serving your
                  market.
                </p>
              </div>
              <div className="learn">Learn More <img src={svg7}></img></div>
            </div>
            <div className="card">
              <div className="symbol">
                <img src={svg4}></img>
              </div>
              <div className="service-heading">
                <h2>Annual Compliance Services</h2>
              </div>
              <div className="service-description">
                <p>
                  Turn your ideas into modern products with our design experts.
                </p>
              </div>
              <div className="learn">Learn More <img src={svg7}></img></div>
            </div>
          </div>
          <div className="card-column">
            <div className="card">
              <div className="symbol">
                <img src={svg5}></img>
              </div>
              <div className="service-heading">
                <h2>Payroll Services</h2>
              </div>
              <div className="service-description">
                <p>
                  Expand your business across the globe with minimal effort.
                </p>
              </div>
              <div className="learn">Learn More <img src={svg7}></img></div>
            </div>
            <div className="card">
              <div className="symbol">
                <img src={svg6}></img>
              </div>
              <div className="service-heading">
                <h2>Bookkeeping Services</h2>
              </div>
              <div className="service-description">
                <p>
                  Steering user behaviours with creative design, data insights &
                  technology.
                </p>
              </div>
              <div className="learn">Learn More <img src={svg7}></img></div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="learn-more">See All Services</button>
        </div>
      </div>
    </>
  );
}

export default Services;
