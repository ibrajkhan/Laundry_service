import React from 'react'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import "./Confirmation.css"

import tick from "../images/tickorder.png"

function OrderConfirm(props) {
    console.log("inside  confirmation popup");
    const goToOrders=()=>{
      props.orderPopup()
    }

  return ( 
    <div className='popup-box'>
      {console.log("footer component rendering")}
    <div className='confirmation__box'>
        <div className='confirmation__header'>
            <div className='box__image'>
                <img className='tick' src={tick} alt = "tick"/>
            </div>
        </div>

        <div className='confirmation__content'>
            <div className='confirmation__title'>Your order is  successfully created</div>
    
            <div className='confirmation__message'>You can track the delivery in the "Orders" section</div>
            <div className='button__confirmation'>
            <Link to="/orders"><button className = "go__button" onClick={goToOrders}>Go To Orders</button></Link>
            
            </div>
        </div>
    </div>
</div>
  )
}

export default React.memo(OrderConfirm)