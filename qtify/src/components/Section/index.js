import React, { useState } from "react";
import Card from "../Card";
import "./section.css";
import Carousel from "../Carousel";

function Section({ heading, data }) {
  const [isCollapsed, setisCollapsed] = useState(false);
  // const [button, setButton] = useState(true);

  return (
    <div className="section">
      <div className="heading-part">
        <h3 className="heading">{heading}</h3>
        {heading !== "Songs" ? (
          <button
            className="section-button"
            onClick={() => {
              setisCollapsed(!isCollapsed);
            }}
          >
            {!isCollapsed ? "Show All" : "Collapse"}
          </button>
        ) : null}
      </div>
      {!isCollapsed ? (
        <>
          <Carousel data={data} />
        </>
      ) : (
        <div className="card-container">
          {data.map((card) => (
            <Card
              key={card.id}
              imgSrc={card.image}
              label={card.title}
              followersCount={card.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
