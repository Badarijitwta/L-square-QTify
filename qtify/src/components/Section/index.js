import React, { useState } from "react";
import Card from "../Card";
import "./section.css";
import Carousel from "../Carousel";
import Tabs from "../Tabs/index";

function Section({ heading, data }) {
  const [isCollapsed, setisCollapsed] = useState(false);

  // const [button, setButton] = useState(true);

  return (
    <div className="section">
      {heading !== "Songs" ? (
        <>
          <div className="heading-part">
            <h3 className="heading">{heading}</h3>

            <button
              className="section-button"
              onClick={() => {
                setisCollapsed(!isCollapsed);
              }}
            >
              {!isCollapsed ? "Show All" : "Collapse"}
            </button>
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
        </>
      ) : (
        // <div className="tab-container">
        <>
          <h3 className="heading" style={{ marginBottom: "10px" }}>
            {heading}
          </h3>
          <Tabs data={data} />
        </>
        // </div>
      )}

      {/* {!isCollapsed ? (
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
      )} */}
    </div>
  );
}

export default Section;
