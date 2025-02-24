import React from "react";
import { Link } from "react-router-dom";
import WatchList from "./WatchList";
import TopBar from "./TopBar";

const Orders = () => {
  return (
    <>
      <TopBar />
      <div className="orders-container" style={{ display: "flex", height: "100vh" }}>
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

        {/* Orders Content Section */}
        <div
          style={{
            width: "67%",
            padding: "20px",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          <h3 className="title">Orders</h3>
          <div
            className="no-orders"
            style={{
              textAlign: "center",
              padding: "40px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              maxWidth: "400px",
              margin: "0 auto",
              marginTop: "100px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "20px",
                fontWeight: "500",
                color: "#333",
              }}
            >
              You haven't placed any orders today
            </p>

            <Link
              to="/"
              className="btn"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#6200ea",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "600",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#3700b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#6200ea")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
