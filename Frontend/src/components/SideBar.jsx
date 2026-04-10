import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
  const location = useLocation();
  return (
    <div className="sideBar">
      <h1 className="logo">Dev</h1>
      <ul className="list">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <i class="fa-solid fa-house"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/student-inquiry"  className={location.pathname === "/student-inquiry" ? "active" : ""}>
            <i class="fa-solid fa-circle-question"></i>Students inquiry
          </Link>
        </li>
        <li>
          <Link to="/lectures"  className={location.pathname === "/lectures" ? "active" : ""}>
            <i class="fa-solid fa-chalkboard-user"></i> Lectures
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
