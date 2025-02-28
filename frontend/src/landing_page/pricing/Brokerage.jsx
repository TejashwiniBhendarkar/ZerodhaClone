import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Brokerage Calculator Section */}
        <div className="col-8 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <p style={{ fontSize: "12px", textAlign: "left" }}>
            Use our brokerage calculator to estimate charges on trades, including brokerage, taxes, and transaction fees.
          </p>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              <strong>Equity Delivery:</strong> ₹0 (No brokerage)
            </li>
            <li>
              <strong>Equity Intraday:</strong> ₹20 per executed order or 0.03% (whichever is lower)
            </li>
            <li>
              <strong>Equity Futures:</strong> ₹20 per executed order
            </li>
            <li>
              <strong>Equity Options:</strong> ₹20 per executed order
            </li>
            <li>
              <strong>Commodity Futures:</strong> ₹20 per executed order
            </li>
            <li>
              <strong>Currency Futures:</strong> ₹20 per executed order
            </li>
            <li>
              <strong>Currency & Commodity Options:</strong> ₹20 per executed order
            </li>
            <li>
              <strong>Call & Trade Charges:</strong> ₹50 + GST per order
            </li>
            <li>
              <strong>DP (Depository Participant) Charges:</strong> ₹13.5 + GST per sell transaction
            </li>
            <li>
              <strong>AMC (Annual Maintenance Charge):</strong> ₹300 per year (for demat accounts)
            </li>
            <li>
              <strong>Fund Transfer via Payment Gateway:</strong> ₹9 per transaction
            </li>
            <li>
              <strong>Physical Contract Note (if requested):</strong> ₹20 per contract note + courier charges
            </li>
          </ul>
        </div>

        {/* List of Charges Section */}
        <div className="col-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2", fontSize: "12px" }}
            className="text-muted"
          >
            <li>SEBI Turnover Charges: 0.0001% on turnover</li>
            <li>Exchange Transaction Charges: Varies based on segment</li>
            <li>GST: 18% on brokerage & transaction charges</li>
            <li>STT (Securities Transaction Tax): Applicable on Equity & F&O</li>
            <li>Stamp Duty: As per state government rates</li>
            <li>Payment Gateway Charges: ₹9 per transfer</li>
            <li>Margin Pledge Charges: ₹30 + GST per pledge request</li>
            <li>Penalty for Short Margin: As per exchange regulations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
