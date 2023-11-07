import React from "react";
import SearchBox from "../SearchBox";
import Button from "../Button";

import "./index.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src="logo.png" alt="" />
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
