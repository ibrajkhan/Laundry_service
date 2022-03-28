import React, { useState } from "react";
import './SummaryOrder.css'
import OrderConfirm from "./Confirmation"
import axios from "axios";

function SummaryOrder(props) {
  console.log(props.totalDetails);
  const totalCost=props.totalDetails.map((item)=>item.selected.price).reduce((prev,curr)=> prev+curr,0)
  const totalQunatity =props.totalDetails.map((item)=>item.selected.quantity).reduce((prev,curr)=> parseInt(prev)+parseInt(curr),0)
  const article = [];
  props.totalDetails.forEach((member) => {
    console.log(member)
    article.push({ productType: member.productType, ...member.selected });
  });
  

  const [storeNo, setStoreNo] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [disabled, setDisabled] = useState(true);

  const washType = [];
  const washPrice = [];
  const Price = [];

  props.totalDetails.forEach((product) => {
    let wash = "";
    let price = 0;
    //console.log(product);
    if (product.selected.wash === true) {
      wash += "Washing  ";
      price += 20;
       console.log(price);
    }
    if (product.selected.iron === true) {
      wash += "Ironing  ";
      price += 15;
      console.log(price);
    }
    if (product.selected.fold === true) {
      wash += "Folding  ";
      price += 10;
      console.log(price);
    }
    if (product.selected.checmicalWash === true) {
      wash += "ChemicalWashing  ";
      price += 25;
      console.log(price);
    }
    Price.push(product.selected.quantity * price);
    washType.push(wash);
    washPrice.push(price);
  });
  

  const handleForm = () => {
    setStoreNo("+91 9999999999");
    setStoreAddress("Near phone Booth, 10th road");
    setDisabled(false);
  }; 
  function getToken(){
    if(window.localStorage){
      return localStorage.getItem("token")
    }
    return ""
  }
  async function handleClick() {
    
      const totalprice = totalCost;
      const totalitems = totalQunatity;
      const productlist = article;
      console.log(productlist, totalprice, totalitems)
      try {
        console.log(getToken())
        const response = await fetch("http://localhost:5000/order",{
          method: 'POST',
          mode: 'cors',
          //cache: 'no-cache',
          //credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            authorization: `test ${getToken()}`
          },
          body: JSON.stringify({
          totalprice,
          productlist,
          totalitems,
          })
        })
        const data=await response.json()
        console.log(data)
        
      } catch (error) {
        console.log(error)
      }
      
      
      props.confirmPopup()
      props.summaryPopup()
    }
    return (
      <div className="popup-box">
        {console.log("summary to create component rendering")}
        <div className="summary__box" style={{ overflow: "scroll" }}>
          <div className="summary__header">
            Summary
            <button
              className="summary__btn__close"
              onClick={props.summaryPopup}
            >
              x
            </button>
          </div>
          <div className="summary__storeinfo">
            <div className="store__detail">
              <form className="store__form">
                <select onChange={handleForm} defaultValue="Store Location">
                  <option disabled>Store Location</option>
                  <option className="store__option">Jp Nagar</option>
                </select>
              </form>
            </div>

            <div className="store__detail">
              <h4>
                <strong>Store Address</strong>
              </h4>
              <p>{storeAddress}</p>
            </div>
            <div className="store__detail">
              <h4>
                <strong>Phone</strong>
              </h4>
              <p>{storeNo}</p>
            </div>
          </div>

          <div className="summary__order">
            <h4>Order Details</h4>
            <table className="summary__table">
              <tbody>
                {props.totalDetails.length > 0 && props.totalDetails.map((item, index) => {
                    return (
                    <tr key={index}>
                      <td className="product__type">
                        {item.productType} 
                      </td>
                      <td className="product__washtype">{washType[index]}</td>
                      <td className="price__calculation">
                        {item.selected.quantity} x {washPrice[index]}
                      </td>
                      <td className="product__price">{Price[index]}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td />
                  <td />
                  <td>Sub total:</td>
                  <td style={{ fontWeight: "bold" }}>
                    {totalCost}
                  </td>
                </tr>
                <tr>
                  <td />
                  <td />
                  <td>Pickup Charges:</td>
                  <td style={{ fontWeight: "bold" }}>90</td>
                </tr>
                <tr className="product__total">
                  <td />
                  <td />
                  <td>Total:</td>
                  <td>Rs {totalCost + 90}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="summary__address">
            <label>Address</label>
            <div>
              <p className="address__title">Home</p>
              <p>#223, 10th road, Jp Nagar,</p>
              <p>Bangalore</p>
            </div>
          </div>

          <div className="summary__footer">
            <button
              className="submit__button"
              onClick={handleClick} disabled={disabled}
            >
              Confirm
            </button>
          </div>

        </div>
      </div>
    );
  
}
export default React.memo(SummaryOrder);
