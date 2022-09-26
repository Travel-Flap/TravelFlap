import React from "react";
import "./BottomBar.css";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";


export const BottomBar = () => {
  return (
    <>
    <div className="BottomBarSection">
      <div className="logo"> 
        <p className="logo-text"> 
          Copyrights all rights reserved to TravelFlap Global Private Limited
        </p>
      </div>
      <input id="checkbox" type="checkbox" />
      <div id="bar">
        <label htmlFor="checkbox">
          <AiOutlineMenu className="bars" />
        </label>
      </div>
      <ul className="nav-ul">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>OFFERS</li>
        <li>NEWS</li>
        <li>CONTACT</li>
      </ul>
    </div>
      
    </>
  );
};

