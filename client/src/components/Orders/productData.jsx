import React from "react";
import "../Css/ProductCreating.css";

import wash from "../images/wash.png";
import washClick from "../images/washclick.png";
import pack from "../images/pack.png";
import packClick from "../images/packclick.png";
import iron from "../images/iron.png";
import ironClick from "../images/ironclick.png";
import fold from "../images/fold.png";
import foldclick from "../images/foldclick.png";

function ProductData(props) {
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
        <input type="text" maxLength="4" size="1"></input>
      </td>
      <td>
        <div className="row-washtype">
          <div className="wash-type">
            <img src={wash} alt="wash" className="hi"></img>
          </div>
          <div className="wash-type">
            <img src={iron} alt="iron" className="hi"></img>
          </div>
          <div className="wash-type">
            <img src={fold} alt="fold" className="hi"></img>
          </div>
          <div className="wash-type">
            <img src={pack} alt="pack" className="hi"></img>
          </div>
        </div>
      </td>
      <td>
        <p>5 X 10 = 50</p>
      </td>
      <td>
        <button>Reset</button>
      </td>
    </tr>
  );
}

export default React.memo(ProductData);
