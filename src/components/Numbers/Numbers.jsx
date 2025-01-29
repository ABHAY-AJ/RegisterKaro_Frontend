import React from 'react'
import './Numbers.css'
function Numbers() {
    const stats = [
        { number: "1M+", label: "Customers" },
        { number: "12+", label: "Years of Excellence" },
        { number: "41+", label: "R&D Engineers" },
        { number: "78+", label: "Countries" },
        { number: "3287+", label: "Partners" },
        { number: "41+", label: "Awards Received" },
      ];
  return (
    <section className="numbers-section">
      <p className="numbers-section__subheading">WHY REGISTER KARO</p>
      <h2 className="numbers-section__heading">Some Numbers are important</h2>
      <div className="numbers-section__grid">
        {stats.map((stat, index) => (
          <div className="numbers-item" key={index}>
            <p className="numbers-item__number">{stat.number}</p>
            <p className="numbers-item__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Numbers
