import React from "react";
import "./Card.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
function Card({ imgSrc, label, followersCount, likes, songs }) {
  return (
    <Tooltip
      title={songs ? songs.length + " songs" : null}
      arrow
      placement="top"
    >
      <div className="card-wrapper">
        <div className="card-up">
          <div className="card-img-frame">
            <img src={imgSrc} alt="Album" />
          </div>
          <div className="card-pill-section">
            <div className="card-pill-content">
              {likes ? (
                <h5>{likes} likes</h5>
              ) : (
                <h5>{followersCount} Follows</h5>
              )}
            </div>
          </div>
        </div>
        <div className="card-low">
          <h5>{label}</h5>
        </div>
      </div>
    </Tooltip>
  );
}

export default Card;
