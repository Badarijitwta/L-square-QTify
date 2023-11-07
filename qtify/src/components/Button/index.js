import React from "react";
// import Button from "@mui/material/Button";
import "./Button.css";

function Button({ children }) {
  return (
    <div>
      <button type="button" className="button">
        {children}
      </button>
    </div>
  );
}

export default Button;
