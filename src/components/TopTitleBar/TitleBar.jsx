/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./TitleBar.css";
import { BsFacebook, BsPinterest, BsTwitter, BsInstagram, BsBehance, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";

export const TitleBar = () => {
    // const [sticky, setSticky] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setSticky(window.scrollY > 200);
    //         console.log(window.scrollY);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // });
    return (
        <nav className="">
            <div className="nav-inner">
                <div className="title-context">
                    <div className="title-heading">
                        <span className="logo">+45 345 3324 56789</span>
                    </div>

                    <IconContext.Provider value={{ className: "socialIconstop" }}>
                        <div className="socialmediatop">

                            <a href="https://www.pinterest.com/travelflap/"><BsPinterest /></a>
                            <a href=" https://www.facebook.com/travelflap/"><BsFacebook /></a>
                            <a href="https://www.instagram.com/travelflap/"><BsInstagram /></a>
                            <a href="https://www.behance.net/travelflap"><BsBehance /></a>
                            <a href="https://twitter.com/TravelFlap"><BsTwitter /></a>
                            <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin /></a>
                        </div>
                    </IconContext.Provider>

                </div>

                <div className="links">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                    {/* <a href="#">Projects</a>
          <a href="#">Contact</a> */}
                </div>
            </div>
        </nav>
    );
}

// export default Navbar;