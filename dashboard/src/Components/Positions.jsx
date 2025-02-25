import React from "react";
import TopBar from "./TopBar";
import WatchList from "./WatchList";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <TopBar />

      <div className="positions-container" style={{ display: "flex", height: "100vh" }}>
        {/* WatchList Section */}
        <div
          style={{
            width: "33%",
            borderRight: "1px solid #eee",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <WatchList />
        </div>

        {/* Positions Table Section */}
        <div
          style={{
            width: "67%",
            padding: "20px",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <h3 className="title">Positions ({positions.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg.</th>
                  <th>LTP</th>
                  <th>P&L</th>
                  <th>Chg.</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={profClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Positions;
