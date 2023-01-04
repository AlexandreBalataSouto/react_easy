import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaReact } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState("-100%");

  const toggleMenu = () => {
    setDisplayMenu(displayMenu === "-100%" ? "0" : "-100%");
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar_icon">
          <span>React</span>
          <FaReact className="FaReact"></FaReact>
        </div>
        <div className="navbar_options">
          <ul>
            <li className="btn_normal">Home</li>
            <li className="btn_normal">Services</li>
            <li className="btn_normal">Products</li>
            <li className="btn_normal">Contact Us</li>
            <li className="btn_sign">Sign up</li>
          </ul>
        </div>
        <div className="navbar_button_menu">
          {displayMenu === "-100%" ? (
            <FaBars
              className="button_burger"
              id="button_burger"
              onClick={() => toggleMenu()}
            ></FaBars>
          ) : (
            <BsXLg
              className="button_close"
              id="button_close"
              onClick={() => toggleMenu()}
            ></BsXLg>
          )}
        </div>
      </div>
      <div
        className="navbar_burger"
        id="navbar_burger"
        style={{ left: displayMenu }}
      >
        <ul>
          <li className="btn_normal">Home</li>
          <li className="btn_normal">Services</li>
          <li className="btn_normal">Products</li>
          <li className="btn_normal">Contact Us</li>
          <li className="btn_sign">Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
