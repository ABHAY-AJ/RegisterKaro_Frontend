import React from 'react'
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            Design outstanding interfaces with advanced Figma features in a matter of
            minutes.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-apple"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>START A BUSINESS</h4>
            <a href="#">Features</a>
            <a href="#">Solutions</a>
            <a href="#">Integrations</a>
            <a href="#">Enterprise</a>
            <a href="#">Solutions</a>
          </div>
          <div className="link-column">
            <h4>GOVERNMENT REGISTRATION</h4>
            <a href="#">Partners</a>
            <a href="#">Community</a>
            <a href="#">Developers</a>
            <a href="#">App</a>
            <a href="#">Blog</a>
          </div>
          <div className="link-column">
            <h4>COMPLIANCE & TAX</h4>
            <a href="#">Channels</a>
            <a href="#">Scale</a>
            <a href="#">Watch the Demo</a>
            <a href="#">Our Competition</a>
          </div>
          <div className="link-column">
            <h4>BIS & CDSCO</h4>
            <a href="#">About Us</a>
            <a href="#">News</a>
            <a href="#">Leadership</a>
            <a href="#">Media Kit</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <button className="scroll-top-button">&#8593;</button>
        <p>© 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer