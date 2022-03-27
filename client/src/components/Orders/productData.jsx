import React, { useEffect, useState } from "react";
import "../Css/ProductCreating.css";

import wash from "../images/wash.png";
import washBlue from "../images/washclick.png";
import chemicalwash from "../images/pack.png";
import chemicalwashBlue from "../images/packclick.png";
import iron from "../images/iron.png";
import ironBlue from "../images/ironclick.png";
import fold from "../images/fold.png";
import foldBlue from "../images/foldclick.png";

function ProductData(props) {
  const [washing,setWashing]=useState(false);
  const [ironing,setIroning]=useState(false);
  const [folding,setFolding]=useState(false);
  const [chemicalWashing,setChemicalWashing]=useState(false);

  const [noOfProduct,setNoOfProduct]=useState(0);
  const[cost,setCost]=useState("___");
  const [defaultCost,setDefaultCost]=useState(0);

  const washingCost=20;
  const ironingCost=15;
  const foldingCost=10;
  const chemicalwashCost=25;

  const washClick=()=>{
    setWashing(!washing)
  };
  const ironClick=()=>{
    setIroning(!ironing)
  };
  const foldClick=()=>{
    setFolding(!folding)
  }
  const chemicalWashClick=()=>{
    setChemicalWashing(!chemicalWashing)
  };

  function orderTotal(){
    let price=0;
    let type=0;
    if(washing){
      price+= noOfProduct * washingCost;
      type+= washingCost
    }
    if (ironing){
      price+=noOfProduct * ironingCost;
      type+=ironingCost;
    }
    if (folding){
      price+= noOfProduct * foldingCost;
      type+=foldingCost;
    }
    if (chemicalWashing){
      price+= noOfProduct * chemicalwashCost;
      type+=chemicalwashCost; 
    }
    setCost(price);
    setDefaultCost(type)
  }

  useEffect(()=>{
    orderTotal();
    props.detailer({
      productType:props.title,
      selected:{
        quantity: noOfProduct,
        wash: washing,
        iron : ironing,
        fold : folding,
        checmicalWash:chemicalWashing,
        price:cost
      },
    });
  });
 
  return (
    <tr>
      <td>
        <div className="row-product">
          <div className="column">
            <img src={props.img} alt="shirt" className="productImg"></img>
          </div>
          <div className="column">
            <b>{props.title}</b>
            <p>{props.descp}</p>
          </div>
        </div>
      </td>
      <td>
        <input type="text" maxLength="4" size="1" onChange={(e)=>{setNoOfProduct(e.target.value);}}
        value={noOfProduct}></input>
      </td>
      <td>
        <div className="row-washtype">
          <div className="wash-type">
            <img src={washing ? washBlue : wash} onClick={()=>{
              washClick()
            }} alt="wash" className="hi"></img>
          </div>
          <div className="wash-type">
            <img src={ironing ? ironBlue:iron} onClick={()=>{
              ironClick()
            }} alt="iron" className="hi"></img>
          </div>
          <div className="wash-type">
            <img src={folding ? foldBlue:fold} onClick={()=>{
              foldClick()
            }} alt="fold" className="hi"></img>
          </div>
          <div className="wash-type">
            <img src={chemicalWashing ? chemicalwashBlue:chemicalwash} 
            onClick={()=>{
              chemicalWashClick()
            }}  alt="pack" className="hi"></img>
          </div>
        </div>
      </td>
      <td>{`${noOfProduct} x ${defaultCost}=${cost}`}        
      </td>
      <td>
        <button onClick={()=>{
          setNoOfProduct(0);
          setWashing(false);
          setIroning(false);
          setFolding(false);
          setChemicalWashing(false)
        }}>Reset</button>
      </td>
    </tr>
  );
}

export default React.memo(ProductData);
