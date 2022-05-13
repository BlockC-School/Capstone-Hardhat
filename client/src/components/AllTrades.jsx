import { Card, Typography } from "antd";
import React from "react";
import Moment from "react-moment";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
const { Title } = Typography;

function AllTrades({ trades }) {
  const renderList = (trades) => {
    return (
      <table
        style={{
          width: "100%",
        }}
      >
        <thead style={{ background: "grey" }}>
          <th style={{ border: "1px solid black" }}>amount</th>
          <th style={{ border: "1px solid black" }}>price</th>
          <th style={{ border: "1px solid black" }}>date</th>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.tradeId.toNumber()}>
              <td>{trade.amount.toNumber()}</td>
              <td>{trade.price.toNumber()}</td>
              <td>
                <Moment fromNow>
                  {parseInt(trade.date.toString()) * 1000}
                </Moment>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <Card>
      <Title level={2}>All Trades</Title>
      <div>{renderList(trades)}</div>
    </Card>
  );
}

export default AllTrades;
