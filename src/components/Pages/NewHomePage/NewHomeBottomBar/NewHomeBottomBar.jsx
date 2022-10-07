import React from "react";
import "./NewHomeBottomBar.css";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import { AiOutlineCopyrightCircle } from "react-icons/ai";

export const NewHomeBottomBar = () => {
    return (
        <>
            <div className="BottomBarNewHomeSection">
                <div className="newHomeBottomButtons">
                    <ul className="nav-ul">
                        <li>HOME</li>
                        <li>Blogs</li>
                        <li>OFFERS</li>
                        <li>NEWS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>


                <div className="newHomeBottomImages">
                    <img className="bottomBarImage1" src="Images/NewHomeLayout/FooterBottomBar/GooglePlay.png" />
                    <img className="bottomBarImage2" src="Images/NewHomeLayout/FooterBottomBar/PlayStore.png" />
                </div>


                <div className="newHomeBotttomlogo">
                    <p className="logo-text">
                        <AiOutlineCopyrightCircle className="newHomeBottomBarCopyrightIcon"/>Copyrights all rights reserved to TravelFlap Global Private Limited
                    </p>
                </div>
            </div>

        </>
    );
};

