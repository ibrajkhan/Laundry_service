import React from "react";
import "../Css/EmptyOrder.css";
import "../SerchComponent";
import SearchComponent from "../SerchComponent";

const EmptyOrder = () => {
  return (
    <div className="Outer">
      <p className="currentOrder">Order|0</p>
      <div className="Search">
        <SearchComponent />
      </div>
      <div className="paraBtn">
        <div className="noOrder">
          <p>No Orders Available</p>
        </div>
        <div>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
};

export default EmptyOrder;
