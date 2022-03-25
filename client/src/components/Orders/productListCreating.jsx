import React, { useEffect, useState } from "react";
import "../Css/ProductListCreating.css";
import ProductData from "./productData";
import shirts from "../images/shirts.jpg";
import tshirts from "../images/tshirts.jpg";
import jeans from "../images/jeans.jpg";
import boxers from "../images/boxers.jpg";
import trouses from "../images/trouses.jpg";
import joggers from "../images/joggers.jpg";
import others from "../images/others.jpg";
import SummaryOrder from "../Summary/SummaryOrder";

function ProductListing() {
  const productsData = [
    {
      img: shirts,
      title: "Shirt",
      descp: "Shirts for Laundry",
    },
    {
      img: tshirts,
      title: "Tshirt",
      descp: "tshirts for laundry ",
    },
    {
      img: jeans,
      title: "Jeans",
      descp: "jeans for laundry",
    },
    {
      img: boxers,
      title: "Boxers",
      descp: "boxers for laundry",
    },
    {
      img: trouses,
      title: "Trouses",
      descp: "trouses for laundry",
    },
    {
      img: joggers,
      title: "Joggers",
      descp: "joggers for laundry",
    },
    {
      img: others,
      title: "Others",
      descp: "other items for laundry",
    },
  ];

  const orders = [
    {
      productType: "Shirts",
      quantity: 15,
      totalPrice: 50,
      washing: true,
      ironing: true,
      chemicalwash: true,
      drywash: true,
    },
    {
      productType: "Tshirt",
      quantity: 15,
      totalPrice: 50,
      washing: true,
      ironing: true,
      chemicalwash: true,
      drywash: true,
    },
    {
      productType: "trouser",
      quantity: 15,
      totalPrice: 50,
      washing: true,
      ironing: true,
      chemicalwash: true,
      drywash: true,
    },
  ];

  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  // useEffect((e) => {
  //   e.preventdefault();
  // }, []);
  // let setIsSummaryOpen = () => {
  //   isSummaryOpen(!isSummaryOpen);
  // };

  return (
    <div className="table-content">
      <div></div>
      <table className="table" cellSpacing="25">
        <thead className="table-head">
          <caption>
            {/* <ul>
              <li>Product Types</li>
              <li>Qunatity</li>
              <li className="washT">Wash-Type</li>
              <li>Price</li>
            </ul> */}
            <p className="pro">Product Type</p>
            <p className="quan">Qunatity</p>
            <p className="waT">Wash-Type</p>
            <p className="Pri">Price</p>
          </caption>
          {/* <tr className="table-row-darkOne" >
                    <th>Product Types</th>
                    <th>Qunatity</th>
                    <th>Wash-Type</th>
                    <th>Price</th>
                    <th>Reset</th>
                    </tr> */}
        </thead>
        <tbody>
          {productsData.map((product, index) => (
            <ProductData
              img={product.img}
              title={product.title}
              descp={product.descp}
              key={index}
            />
          ))}
        </tbody>
      </table>
      <div className="bootom-button">
        <button className="cancel">Cancel</button>
        <button className="proceed" onClick={()=>setIsSummaryOpen(true)}>Proceed</button>
      </div>

      {isSummaryOpen && <SummaryOrder order={orders} />}
    </div>
  );
}

export default React.memo(ProductListing);
