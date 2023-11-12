import React from "react";
import "./Card.css";

function Card({ imgSrc, label, followersCount }) {
  return (
    <div className="card-wrapper">
      <div className="card-up">
        <div className="card-img-frame">
          <img src={imgSrc} alt="Album" />
        </div>
        <div className="card-pill-section">
          <div className="card-pill-content">
            <h5>{followersCount} Follows</h5>
          </div>
        </div>
      </div>
      <div className="card-low">
        <h5>{label}</h5>
      </div>
    </div>
  );
}

export default Card;
