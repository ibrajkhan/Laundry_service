import React,{useState,useEffect} from "react";
import SearchComponent from "../SerchComponent";
import { Link } from 'react-router-dom';
import "./existingOrders.css";
import eye from "../images/eye.png"
import Summary from "./SummaryPastOrder"
import Alert from "./AlertOrder"
import EmptyOrder from "../Orders/EmptyOrder"
import axios from "axios"

const ExistingOrders = () => {
  const [currOrder,setCurrOrder]=useState(null)
  const [orders,setOrders]=useState([])
  const [orderCount, setOrderCount]=useState(0)
  // const history=useHistry()
  // const handleButton=()=>{
  //   history.push("/create")
  // }
  const alertCancel=(order)=>{
    setCurrOrder(order)

  }

  function getToken(){
    if(window.localStorage){
      return localStorage.getItem("token")
    }
    return ""
  }

  useEffect(async()=>{
    //const token = localStorage.getItem("token")
  try {
  //   
        console.log(getToken())
        const response = await fetch("http://localhost:5000/order",{
          method: 'GET',
          mode: 'cors',
          //cache: 'no-cache',
          //credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            authorization: `test ${getToken()}`
          }
          
        })
        const ordersdata = await response.json();
        console.log(ordersdata)
        // console.log("enter after fetch")
        if (!ordersdata.status === 200) {
            const error = new Error(response.error);
            throw error;
        }
        setOrders(ordersdata.orders)
        console.log(ordersdata.orders.length)
        setOrderCount(ordersdata.orders.length)

  // orders.orders.map(ord=>{console.log(ord.city)})
  // console.log(ordersdata.orders)

  } catch (error) {
    console.log(error)
  }
  },[])
  
  
  
    // axios.get(`http://localhost:5000/order`,{
    //   headers: {
    //     Authorization: 'test ' + token
    //   }
    // }).then(res =>{
    //   console.log(res.orders)
    //   setOrders(res.orders)
    //   setOrderCount(res.orders.length)
    // },[])
  

  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const toggleAlert=()=>{
    setAlertIsOpen(!alertIsOpen)
  }
  const toggleSummary =()=>{
    setIsSummaryOpen(!isSummaryOpen)
  }
  const handleClick=(order)=>{
    console.log(order)
    setCurrOrder(order)
    toggleSummary()
  }



  //const count = 7;
  const tableHeadings = [
    "Order id",
    "Order Date & Time",
    "Store Location",
    "City",
    "Store Phone",
    "Total Items",
    "Price",
    "Status",
    "            ",
    "View",
  ];

  return (
    <div>
      <div className="existingOrder-Container">
        <div className="existingOrder-PageHeading">
          <div className="existingOrders-count">
            <label>Orders | {orderCount}</label>
          </div>
          <div className="button-mid">
            <Link to='/order'><button>Create</button></Link>
          </div>
          <div className="search">
            <SearchComponent></SearchComponent>
          </div>
        </div>
        <div className="table-Contnet">
          <div className="table-Orders">
            <table className="table-main">
              <thead>
                <tr>
                  {tableHeadings.map((heading, index) => {
                    return <th key={index}>{heading}</th>;
                  })}
                </tr>
              </thead>
              <tbody className="tableMain-body">
                {orders.map((order, index) => {
                  let bgc = "#f4f5f7";
                  if (index % 2) {
                    bgc = "#0000";
                  }
                  return (
                    <tr key={index} style={{ backgroundColor: bgc }}>
                      <td>OR000{index + 1}</td>
                      <td>{Date().slice(3, 21)}</td>
                      <td>{order.storelocation}</td>
                      <td>{order.city}</td>
                      <td>{order.storephone}</td>
                      <td>{order.totalitems}</td>
                      <td className="price">{order.totalprice}</td>
                      <td>{order.status }</td>
                      <td>
                        <button className="table__button cancel" onClick={()=>{alertCancel(order)
                         toggleAlert()}}>
                          Cancel Order
                        </button>
                      </td>
                      <td>
                        <img className="view" src={eye}  alt="view" onClick={()=>handleClick(order) }></img>
                        
                      </td>
                    </tr>
                    
                  );
                })}
              </tbody>
            </table>
          </div>
        
          {isSummaryOpen && <Summary handleSummary={toggleSummary} handleAlert={toggleAlert} order={currOrder} />}
          {alertIsOpen && <Alert handleClose={toggleAlert} orderNo={currOrder}/>}
          
        </div>
      </div>
    </div>
  );
};

    

  
  

  
export default React.memo(ExistingOrders);
