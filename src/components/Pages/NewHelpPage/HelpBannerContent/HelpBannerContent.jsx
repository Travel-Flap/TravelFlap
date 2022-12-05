import React from 'react';
import { HelpFlightsFaq } from '../FlightsFaq/HelpFlightsFaq';
import "./HelpBannerContent.css";
import { FaWhatsapp, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";


export const HelpBannerContent = () => {
    return (
        <>
            <div className='helpContentMainOuterDiv'>
                <div className='helpContentMainDiv1'>
                    <div className='helpQuickLinksOuterDiv'>
                        <div className='helpQuickLinksInnerDiv1'>
                            <h4> Quick Links </h4>
                        </div>

                        <div className='helpQuickLinksInnerDiv2'>
                            <div className='helpQuickLinksSubDiv1'>
                                <p> Find my booking </p>
                                <p> Airlines </p>
                                <p> Airlines Fees </p>
                            </div>

                            <div className='helpQuickLinksSubDiv2'>
                                <p> Hotel Owner </p>
                                <p> Carrer </p>
                                <p> About </p>
                            </div>
                        </div>
                    </div>

                    <HelpFlightsFaq />

                    <div className='helpSeeMoreButton'>
                        <button className='btn btn-primary'> See More </button>
                    </div>

                </div>

                <div className='helpContentMainDiv2'>
                    <div className='helpContentInnerDiv1'>
                        <h3>
                            Questions of Feedbacks?
                        </h3>

                        <div className='helpContent2SubDiv1'>
                            <p className='helpContent2SubDiv1Content1'> Let us know </p>

                            <p className='helpContent2SubDiv1Content2'> Give Feedback </p>
                        </div>

                        <div className='helpContent2SubDiv2'>
                            <h3>
                                Accuracy Problems?
                            </h3>

                            <p> Found a price that doesn't match up?</p>

                            <p className='helpContent2SubDiv2Content1'> Tell us
                                <span> Report a problem </span>
                            </p>
                        </div>
                    </div>

                    <div className='helpContentInnerDiv2'>
                        <div className="helpConnectDivPageBookingContact">
                            <button className='helpConnectDivApplyButton'> <FaWhatsapp size="1.2em" style={{ fontSize: "20px", marginRight: "3%" }} /> Visa On WhatsApp</button>
                            <button className='helpConnectDivApplyButton'> <FaPhoneAlt size="1.2em" style={{ fontSize: "20px", marginRight: "3%" }} /> Call Us On</button>
                            <button className='helpConnectDivApplyButton'> <AiFillMail size="1.2em" style={{ fontSize: "20px", marginRight: "3%" }} /> Email </button>
                            <button className='helpConnectDivApplyButton mb-4'> <FaRegClock size="1.2em" style={{ fontSize: "20px", marginRight: "3%" }} /> 9:00AM to 9:00PM</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
