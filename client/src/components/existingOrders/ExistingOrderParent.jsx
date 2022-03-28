import React, { useEffect, useState } from "react";
import AsideComponent from "../AsideComponent";
import FooterTwo from "../signin/signin components/FooterTwo";
import HeaderTwo from "../HeaderTwo";
import ExistingOrders from "./existingOrders";
import "../Css/ExistingOrdersParent.css";
import axios from "axios";

const ExistingOrderParent = () => {
  
  return (
    <div>
      <div className="HeaderTwo">
        <HeaderTwo />
      </div>
      <div className="middle_body">
        <div className="Aside">
          <AsideComponent  />
        </div>
        <div className="Existing_orders">
          <ExistingOrders />
        </div>
      </div>
      <div>
        <FooterTwo />
      </div>
    </div>
  );
};

export default ExistingOrderParent;
