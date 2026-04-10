import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
const DashBoard = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="sidebar-left-section">
          <SideBar />
        </div>
        <div className="right-section">
          <Header />
          <div className="outlet-section-wrapper">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
