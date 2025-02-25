import React from "react";
import TopBar from "./TopBar";
import WatchList from "./WatchList"; // Import Watchlist
import { holdings } from "../data/data";

const Holdings = () => {
  return (
    <>
      <TopBar />

      <div className="holdings-container" style={{ display: "flex", height: "100vh" }}>
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

        <div
          style={{
            width: "67%",
            padding: "20px",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <h3 className="title">Holdings ({holdings.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>
              </thead>

              <tbody>
                {holdings.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td className={profClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={profClass}>{stock.net}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="row">
            <div className="col">
              <h5>29,875.<span>55</span></h5>
              <p>Total investment</p>
            </div>
            <div className="col">
              <h5>31,428.<span>95</span></h5>
              <p>Current value</p>
            </div>
            <div className="col">
              <h5>1,553.40 (+5.20%)</h5>
              <p>P&L</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holdings;
