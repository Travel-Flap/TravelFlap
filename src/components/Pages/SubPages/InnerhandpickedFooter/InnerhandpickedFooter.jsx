import React from 'react';
import { BsFacebook, BsPinterest, BsTwitter, BsInstagram, BsBehance, BsLinkedin, BsWhatsapp, } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";
import "./InnerhandpickedFooter.css";

export const InnerhandpickedFooter = () => {
    return (
        <> 
            <div className="innerHandPickedFooterMain-Container">
            
                <div className="innerHandPickedFooterMain-Container3">
                    <div className="innerHandPickedFootersubclass-item">

                        <IconContext.Provider value={{ className: "innerHandPickedFootersocialIcons" }}>
                            <div className="innerHandPickedFooterfootersocialmedia1">

                                <a href="https://www.pinterest.com/travelflap/"><BsPinterest /></a>
                                <a href=" https://www.facebook.com/travelflap/"><BsFacebook /></a>
                                <a href="https://www.instagram.com/travelflap/"><BsInstagram /></a>
                                <a href="https://www.behance.net/travelflap"><BsBehance /></a>
                                <a href="https://twitter.com/TravelFlap"><BsTwitter /></a>
                                <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin /></a>
                            </div>
                        </IconContext.Provider>
                    </div>

                    <div className="innerHandPickedFooterContact">
                        {/* <h1>Contact Details</h1> */}
                        <div className="innerHandPickedFooterContactDetailsdiv">
                            <div className="innerHandPickedFooterContactContent">
                                <div className="innerHandPickedFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><GoLocation /></IconContext.Provider>
                                </div>
                                <div className="innerHandPickedFooterContactContentInner2">
                                    <p>800 3rd Ave, New York, NY 10022, United States</p>
                                </div>

                            </div>

                            <div className="innerHandPickedFooterContactContent">
                                <div className="innerHandPickedFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><FiPhoneCall /></IconContext.Provider>
                                </div>
                                <div className="innerHandPickedFooterContactContentInner2">
                                    <p>Mobile India : +918209366227,
                                        <span className="innerHandPickedFooterContactContentInner2span"> +917877680588</span>
                                    </p>
                                </div>
                            </div>
                            <div className="innerHandPickedFooterContactContent">
                                <div className="innerHandPickedFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><BsWhatsapp /></IconContext.Provider>
                                </div>
                                <div className="innerHandPickedFooterContactContentInner2">
                                    <p className="">Mobile USA : +19176726964 </p>

                                    {/* <p className="">Mobile DXB : +971 58 597 8776 </p> */}
                                </div>

                                
                            </div>

                            <div className="innerHandPickedFooterContactContent">
                                <div className="innerHandPickedFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><HiOutlineMailOpen /></IconContext.Provider>
                                </div>
                                <div className="innerHandPickedFooterContactContentInner2">
                                    <p>Info@travelflap.com</p>
                                </div>

                            </div>

                            <div className="innerHandPickedFooterContactContent">
                                <div className="innerHandPickedFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><FaGlobeAmericas /></IconContext.Provider>
                                </div>
                                <div className="innerHandPickedFooterContactContentInner2">
                                    <p>www.travelflap.com</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </>
    );
}