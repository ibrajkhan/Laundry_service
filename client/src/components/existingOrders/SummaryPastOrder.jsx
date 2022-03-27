//import Alert from "./AlertOrder"
import React, { useState } from 'react'
import '../Summary/SummaryOrder.css'


function Summary(props) {
    //const [alert, setAlert] = useState(false)
 

    let showButton = false
    const washType = []
    const washPrice = []
    const Price = []
    console.log(props.order.status);
    props.order.status = "Ready to Pickup"
    let status_order = { "Ready to Pickup": false, "Picked up": false, "In Washing": false, "Washed": false, "In Ironing": false, "Ironed": false, "in Delivery": false, "Delivered": false }
    for (let x in status_order) {
        if (x === props.order.status) {
            console.log(x);
            status_order[x] = true
            break
        }
        status_order[x] = true
    }
    console.log("before ", status_order);
    if (props.order.status === 'Cancelled') {
        status_order = { "Ready to Pickup": false, "Picked up": false, "In Washing": false, "Washed": false, "In Ironing": false, "Ironed": false, "in Delivery": false, "Delivered": false }
    }

    if (props.order.status === "Ready to Pickup") {
        showButton = true
    } else {
        showButton = false
    }

    props.order.forEach(product => {
        let wash = ""
        let price = 0
        if (product.washing === true) {
            wash += "Washing  "
            price += 10
        }
        if (product.ironing === true) {
            wash += "Ironing  "
            price += 15
        }
        if (product.chemicalwash === true) {
            wash += "Chemical wash  "
            price += 10
        }
        if (product.drywash === true) {
            wash += "Dry wash  "
            price += 25
        }
        Price.push(product.quantity * price)
        washType.push(wash)
        washPrice.push(price)
    });


    let circleStyle = {
        backgroundColor: "#5861AE",
        color: "#5861AE",
    }

    var width = Math.floor(Math.random() * 150);
    let lineStyle = {
        backgroundColor: "#5861AE",
        height: "1.5px",
        width: "156px"
    }

    let lineStyle2 = {
        backgroundColor: "#5861AE",
        height: "1.5px",
        width: width
    }

    return (
        <div className='popup-box'>

            <div className='summary__box'>
                <div className='summary__header'>
                    Summary
                    <button className='summary__btn__close' onClick={props.handleSummary}>x</button>
                </div>
                <div className='summary__storeinfo'>
                    <div className='store__detail'>
                        <h4><strong>Store Location</strong></h4>
                        <p>Jp Nagar</p>
                    </div>
                    <div className='store__detail'>
                        <h4><strong>Store Address</strong></h4>
                        <p>Near phone Booth, 10th road</p>
                    </div>
                    <div className='store__detail'>
                        <h4><strong>Phone</strong></h4>
                        <p>+91 9999999999</p>
                    </div>
                </div>
                <div className='summary__status'>

                    {status_order['Picked up'] ?
                        (<div className='circle' style={circleStyle}><img className="white-tick" alt="selected" /></div>)
                        : (<div className='circle'></div>)}

                    {status_order['Picked up'] ?
                        (<p style={{ fontWeight: "bold" }}>Picked up</p>) :
                        (<p>Picked Up</p>)}

                    {status_order["In Washing"] === false ?

                        (<div className='line' ></div>) :
                        status_order["Washed"] ?
                            (<div className='line'><div className='washing'></div></div>) :
                            (<div className='line'><div className='washing2'></div></div>)
                    }

                    {status_order['Washed'] ?
                        (<div className='circle' style={circleStyle}><img className="white-tick" alt="selected" /></div>) :
                        (<div className='circle'></div>)}

                    {status_order['Washed'] ?
                        (<p style={{ fontWeight: "bold" }}>Washed</p>) :
                        (<p>Washed</p>)}

                    {status_order["In Ironing"] === false ?
                        (<div className='line' ></div>) :
                        status_order["Ironed"] ?
                            (<div className='line'><div style={lineStyle}></div></div>) :
                            (<div className='line'><div style={lineStyle2} className='delivery2'></div></div>)
                    }

                    {status_order["Ironed"] ?
                        (<div className='circle' style={circleStyle}><img className="white-tick" alt="selected" /></div>) :
                        (<div className='circle'></div>)
                    }

                    {status_order['Ironed'] ?
                        (<p style={{ fontWeight: "bold" }}>Ironed</p>) :
                        (<p>Ironed</p>)}

                    {status_order['in Delivery'] === false ?

                        (<div className='line' ></div>) :
                        status_order["Delivered"] ?
                            (<div className='line'><div className='delivery'></div></div>) :
                            (<div className='line'><div className='delivery2'></div></div>)
                    }

                    {status_order['Delivered'] ?
                        (<div className='circle' style={circleStyle} ><img className="white-tick" alt="selected" /></div>) :
                        (<div className='circle'></div>)
                    }

                    {status_order['Delivered'] ?
                        (<p style={{ fontWeight: "bold" }}>Delivered</p>) :
                        (<p>Delivered</p>)}
                </div>
                <div className='summary__order'>
                    <h4>Order Details</h4>
                    <table className='summary__table'>
                        <tbody>
                            {props.order.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='product__type'>
                                            {product.productType} {props.canCancel}
                                        </td>
                                        <td className='product__washtype'>
                                            {washType[index]}
                                        </td>
                                        <td className='price__calculation'>
                                            {product.quantity} x {washPrice[index]}
                                        </td>
                                        <td className='product__price'>
                                            {Price[index]}
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td /><td />
                                <td>Sub total:</td>
                                <td style={{ fontWeight: "bold" }}>{props.order.totalPrice}
                                </td>
                            </tr>
                            <tr>
                                <td /><td />
                                <td>Pickup Charges:</td>
                                <td style={{ fontWeight: "bold" }}>90</td>
                            </tr>
                            <tr className='product__total'><td /><td />
                                <td>
                                    Total:
                                </td>
                                <td>Rs {props.order.totalPrice + 90}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className='summary__address'>
                    <label>Address</label>
                    <div>
                        <p className='address__title'>Home</p>
                        <p>#223, 10th road, Jp Nagar,</p>
                        <p>Bangalore</p>

                    </div>
                </div>

                <div className='summary__footer'>

                    {/* <button className="cancel__button" onClick={handleClick}>Cancel order</button> */}
                </div>
                

            </div>
        </div>

    )
}

export default React.memo(Summary)