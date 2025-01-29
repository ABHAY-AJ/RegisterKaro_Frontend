import React from 'react'
import './Email.css'

function Email() {
  return (
    <div className="industry-container">
          <p className="industry-text">1% OF THE INDUSTRY</p>
          <h1 className="headline">
            Welcome to your new digital reality. Now.
          </h1>
          <div className="email-form">
            <input
              type="email"
              className="email-input"
              placeholder="Enter Your Email"
            />
            <button className="submit-button">Submit</button>
          </div>
          <div className="features">
            <span>&#10003; Instant results</span>
            <span>&#10003; User-friendly interface</span>
            <span>&#10003; Personalized customization</span>
          </div>
        </div>
  )
}

export default Email