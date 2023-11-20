import React from "react";
import CustomizedAccordions from "./accordion";
import "./style.css";

function Accordion() {
  return (
    <div className="content">
      <h3>FAQs</h3>
      <div className="acc-content">
        <CustomizedAccordions />
      </div>
    </div>
  );
}

export default Accordion;
