import React from "react";
import SearchComponent from "../SerchComponent";
import "./existingOrders.css";

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
                        <img className="view" alt="view"></img>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExistingOrders;