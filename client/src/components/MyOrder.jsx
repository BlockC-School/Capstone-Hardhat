import { Card, Typography } from "antd";
import React from "react";
import Moment from "react-moment";

const { Title } = Typography;

function MyOrders({ orders }) {
  const renderList = (orders, side) => {
    console.log(orders);
    return (
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr style={{ background: `${side === "BUY" ? "green" : "red"}` }}>
            <th colSpan="3">{side}</th>
          </tr>
          <tr>
            <th style={{ border: "1px solid black" }}>Amount</th>
            <th style={{ border: "1px solid black" }}>Price</th>
            <th style={{ border: "1px solid black" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.length ? (
            orders?.map((order) => {
              return (
                <tr>
                  <td>{order.amount.toNumber() - order.filled.toNumber()}</td>
                  <td>{order.price.toNumber()}</td>
                  <td>
                    <Moment fromNow>{parseInt(order.date) * 1000}</Moment>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={"3"}>No Order Available</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  };

  return (
    <Card>
      <Title level={1}>My Orders</Title>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ width: "50%" }}>{renderList(orders?.buy, "BUY")}</div>
        <div style={{ width: "50%" }}>{renderList(orders?.sell, "SELL")}</div>
      </div>
    </Card>
  );
}
export default MyOrders;
