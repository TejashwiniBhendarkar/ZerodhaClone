
import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu"; 
import Summary from "./Components/Summary";
import Orders from "./Components/Orders";
import Holdings from "./Components/Holdings";
import Positions from "./Components/Positions";
import Funds from "./Components/Funds";
import Apps from "./Components/Apps";

const App = () => {
  console.log("✅ App component is rendering!");

  return (
    <div className="app-container flex w-screen min-h-screen">
  <Menu className="w-64 bg-gray-900 text-white min-h-screen" />
  <div className="content flex-1 p-4 bg-gray-800 text-white">
    <Routes>
      <Route path="/" element={<Summary />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/holdings" element={<Holdings />} />
      <Route path="/positions" element={<Positions />} />
      <Route path="/funds" element={<Funds />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </div>
</div>

  );
};

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

