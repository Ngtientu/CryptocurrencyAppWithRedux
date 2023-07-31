import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, Typography, Menu } from "antd";
import { Link, Route, Router } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectFilled,
  MoneyCollectOutlined,
  BulbFilled,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/image.jpeg";
import styled from "styled-components";
import { CodeOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    if (screenSize < 801) {
      setActiveMenu(false)
    }

  }
  useEffect(() => {
    if (screenSize < 801) {
      setActiveMenu(false);

    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container" >
      <div className="logo-container" >
        <Typography.Title level={2} className="logo" onClick={closeMenu}>
          <CodeOutlined className="avatar" />
          <Link className="link-logo" to="/">
            Crytoverse
          </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" className="menu" onClick={closeMenu}>
          <Menu.Item icon={<HomeOutlined />} className="menu-item">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} className="menu-item">
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} className="menu-item">
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbFilled />} className="menu-item">
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
