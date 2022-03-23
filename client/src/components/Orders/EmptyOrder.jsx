import React from "react";
import "../Css/EmptyOrder.css";
import "../SerchComponent";
// import SearchComponent from "../SerchComponent";

const EmptyOrder = () => {
  return (
    <div className="Outer">
      <p>Order|0</p>
      <div className="paraBtn">
        <p>No Orders Available</p>
        <button>Create</button>
      </div>
      {/* <SearchComponent /> */}
    </div>
  );
};

export default EmptyOrder;
