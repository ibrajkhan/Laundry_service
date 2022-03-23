import React from "react";

import ProductData from "./productData";
import shirts from "../images/shirts.jpg"
import tshirts from "../images/tshirts.jpg"
import jeans from "../images/jeans.jpg"
import boxers from "../images/boxers.jpg"
import trouses from "../images/trouses.jpg"
import joggers from "../images/joggers.jpg"
import others from "../images/others.jpg"



function  ProductListing(){
    const productsData = [
        {
          img: shirts,
          title: "Shirt",
          descp: "Shirts for Laundry",
        },
        {
          img: tshirts,
          title: "tshirt",
          descp: "tshirts for laundry ",
        },
        {
          img: jeans,
          title: "jeans",
          descp: "jeans for laundry",
        },
        {
          img: boxers,
          title: "boxers",
          descp: "boxers for laundry",
        },
        {
          img: trouses,
          title: "trouses",
          descp: "trouses for laundry",
        },
        {
          img: joggers,
          title: "joggers",
          descp: "joggers for laundry",
        },
        {
          img: others,
          title: "others",
          descp: "other items for laundry",
        },
      ];
    
    return (
        <div className="table-content">
            <div></div>
            <table className="table" cellPadding="10" cellSpacing="30">
               <thead className="table-head" >
                <caption><ul>
                  <li>Product Types</li>
                  <li>Qunatity</li>
                  <li>Wash-Type</li>
                  <li>Price</li>
                  <li>Reset</li>
                  </ul></caption>
                    {/* <tr className="table-row-darkOne" >
                    <th>Product Types</th>
                    <th>Qunatity</th>
                    <th>Wash-Type</th>
                    <th>Price</th>
                    <th>Reset</th>
                    </tr> */}
                </thead>
                <tbody>
                    {productsData.map((product)=>(
                        <ProductData 
                        img={product.img}
                        title={product.title}
                        descp={product.descp}/>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default ProductListing;