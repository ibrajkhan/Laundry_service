import React,{useState} from "react";
import SearchComponent from "../SerchComponent";
import "./existingOrders.css";
import eye from "../images/eye.png"
import Summary from "./SummaryPastOrder"
import Alert from "./AlertOrder"

const ExistingOrders = () => {
  const orders = [
    {
      storelocation: "Jp nagar",
      city: "Bengaluru",
      storephone: "+91 99 88 66 77 55",
      status: "Ready to pickup",
      totalItems: 5,
      totalPrice: 400,
    },
    {
      storelocation: "Jp nagar",
      city: "Bengaluru",
      storephone: "+91 99 88 66 77 55",
      status: "Ready to pickup",
      totalItems: 9,
      totalPrice: 440,
    },
    {
      storelocation: "Jp nagar",
      city: "Bengaluru",
      storephone: "+91 99 88 66 77 55",
      status: "Ready to pickup",
      totalItems: 10,
      totalPrice: 500,
    },
    {
      storelocation: "Jp nagar",
      city: "Bengaluru",
      storephone: "+91 99 88 66 77 55",
      status: "Ready to pickup",
      totalItems: 5,
      totalPrice: 400,
    },
    {
      storelocation: "Jp nagar",
      city: "Bengaluru",
      storephone: "+91 99 88 66 77 55",
      status: "Ready to pickup",
      totalItems: 5,
      totalPrice: 400,
    },
    {
      storelocation: "Jp nagar",
      city: "Bengaluru",
      storephone: "+91 99 88 66 77 55",
      status: "Ready to pickup",
      totalItems: 5,
      totalPrice: 400,
    },
    {
      storelocation: "Jp nagar",
      city: "Bengaluru",
      storephone: "+91 99 88 66 77 55",
      status: "Ready to pickup",
      totalItems: 5,
      totalPrice: 400,
    },
    {
      storelocation: "Jp nagar",
      city: "Bengaluru",
      storephone: "+91 99 88 66 77 55",
      status: "Ready to pickup",
      totalItems: 5,
      totalPrice: 400,
    },
  ];
  const products = [
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
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  const toggleAlert=()=>{
    setAlertIsOpen(!alertIsOpen)
  }
  const toggleSummary =()=>{
    setIsSummaryOpen(!isSummaryOpen)
  }
  const count = 7;
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
            <label>Orders | {count}</label>
          </div>
          <div className="button-mid">
            <button>Create</button>
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
                      <td>{order.totalItems}</td>
                      <td className="price">{order.totalPrice}</td>
                      <td>{order.status}</td>
                      <td>
                        <button className="table__button cancel">
                          Cancel Order
                        </button>
                      </td>
                      <td>
                        <button onClick={()=>setIsSummaryOpen(true)}><img className="view" src={eye}  alt="view"></img></button>
                      </td>
                    </tr>
                    
                  );
                })}
              </tbody>
            </table>
          </div>
          {alertIsOpen && <Alert handleClose={toggleAlert}/>}
          {isSummaryOpen && <Summary order={products} handleSummary={toggleSummary} handleAlert={toggleAlert} />}
          
        </div>
      </div>
    </div>
  );
};

export default ExistingOrders;
