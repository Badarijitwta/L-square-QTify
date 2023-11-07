import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card-wrapper">
      <div className="card-up">
        <div className="card-img-frame">
          <img
            src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Isle"
          />
        </div>
        <div className="card-pill-section">
          <div className="card-pill-content">
            <h5>100 Follows</h5>
          </div>
        </div>
      </div>
      <div className="card-low">
        <h5>New English Songs</h5>
      </div>
    </div>
  );
}

export default Card;
