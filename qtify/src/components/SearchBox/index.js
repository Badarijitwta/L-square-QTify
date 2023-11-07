import React from "react";
import { ReactComponent as SearchIcon } from "./search_icon.svg";

function SearchBox() {
  return (
    <form
      action=""
      style={{
        display: "flex",
        justifyContent: "center",
        minWidth: "568px",
        height: "48px",
      }}
    >
      <input
        type="text"
        style={{
          flex: "1",
          fontSize: "16px",
          fontWeight: "400",
          border: "1px solid black",
          borderRadius: "8px 0 0 8px",
        }}
        placeholder="Search a album of your choice"
      />
      <button
        style={{
          width: "66px",
          height: "48px",
          border: "1px solid var(--css-black)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  );
}

export default SearchBox;
