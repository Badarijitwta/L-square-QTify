import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <h3>
        100 Thousand Songs, ad-free <br />
        <span>Over thousands podcast episodes</span>
      </h3>
      <img src="headphone.png" alt="Headphone" width={212} height={212} />
    </div>
  );
}

export default Hero;
