import React from "react";
import HeaderTwo from "../HeaderTwo";
import AsideComponent from "../AsideComponent";
import FooterTwo from "../FooterTwo";
import EmptyOrder from "../Orders/EmptyOrder";
import "../Css/CreateOrder.css";

const CreateOrder = () => {
  return (
    <div>
      <HeaderTwo />
      <div className="orderE">
        <div className="aside">
          <AsideComponent />
        </div>
        <div className="empty">
          <EmptyOrder />
        </div>
      </div>

      {/* </div> */}
      <FooterTwo />
    </div>
  );
};

export default CreateOrder;
