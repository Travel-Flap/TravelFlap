import React, { useState } from "react";
import "./footer.css";
import { BsChevronDown } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  const [footerToggle, setFooterToggle] = useState(false);

  const footerServises = () => {
    footerToggle ? setFooterToggle(false) : setFooterToggle(true);
  };

  return (
    <div className="footerSection">
      <div className="mapSection">
        <div className="worldMapSection">
          <img src='images/WorldMapImage.png' alt="" />
        </div>
        <div>
          <div className="footerMapContactSection">
            <li>+91 79 4032 4566</li>
            <li></li>
            <li>hello@uplers.com</li>
          </div>

          <div className="footerSocialMediaSection">
            <IconContext.Provider value={{ className: "socialIcons" }}>
              <FaFacebookF />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "socialIcons" }}>
              <FaTwitter />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "socialIcons" }}>
              <FaLinkedin />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "socialIcons" }}>
              <FaInstagram />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "socialIcons" }}>
              <FaYoutube />
            </IconContext.Provider>
          </div>

          <div className="footerMapContactSection privacySection">
            <li>Privacy Policy</li>
            <li></li>
            <li>ISMS Policy</li>
          </div>
          <p>© 2022 Uplers Solutions Private Limited. All rights reserved.</p>
        </div>
      </div>
      <div className="mainFooter">
        <div className="innerFooterPart">
          <div>
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Vetting Process</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>About Us</li>
              <li>Vetting Process</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
            </ul>
          </div>

          {/* <div>
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Vetting Process</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
            </ul>
          </div> */}

          <div>
            <h3>Contact Us</h3>
            <ul>
              <li><IconContext.Provider value={{ className: "footercontecticons" }}><FiPhoneCall /></IconContext.Provider></li>
              <li>Mobile India : +918209366227, +917877680588</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
            </ul>
          </div>
        </div>

        <div onClick={footerServises} className="moreSection">
          <p>More Services</p>
          <BsChevronDown
            className={footerToggle ? "iconRotation" : "downIcon"}
          />
        </div>

        <div className={footerToggle ? "innerFooterPart" : "moreServices"}>
          <div>
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Vetting Process</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Vetting Process</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Vetting Process</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li>About Us</li>
              <li>Vetting Process</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
              <li>How it Works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
