import React from "react";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./Styles/App.scss"
import { Layout, Space, Typography } from "antd";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app" >
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/exchanges" element={<Exchanges />} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
      </div>
      <div className="footer" >
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          All rights reserverd
        </Typography.Title>
        <Space>
          <Link to="/"> Home</Link>
          <Link to="/cryptocurrencies"> Cryptocurrencies</Link>
          <Link to="/exchanges"> Exchanges</Link>
          <Link to="/news"> News</Link>
        </Space>
      </div>
    </div>
  );
};

export default App;
