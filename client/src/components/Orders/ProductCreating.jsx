import React from "react";
import AsideComponent from "../AsideComponent";
import HeaderTwo from "../HeaderTwo";
import ProductListing from "./productListCreating";
import "../Css/ProductCreating.css";
import SearchComponent from "../SerchComponent";
import FooterTwo from "../signin/signin components/FooterTwo";

const ProductCreatingOrder = () => {
  return (
    <div>
      <div>
        <HeaderTwo />
      </div>
      <div className="aside-Product">
        <div className="asides">
          <AsideComponent />
        </div>
        <div className="product-table">
          <div className="createOrder">
            <h3>Create Order</h3>
          </div>
          <div className="searchComponent">
            <SearchComponent />
          </div>
          <div className="productlisting">
            <ProductListing />
          </div>
        </div>
      </div>
      <div>
        <FooterTwo />
      </div>
    </div>
  );
};

export default React.memo(ProductCreatingOrder);
