
import React, { useState } from 'react';
import "./NewHomeFooter.css";
import { BsFacebook, BsPinterest, BsTwitter, BsInstagram, BsBehance, BsLinkedin, } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";
import countrydata from '../../../../CountryData.json';
import { BsWhatsapp } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { OverlayTrigger } from 'react-bootstrap';
import { WaveEffects } from './wave';

export const NewHomeFooter = () => {
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');

    const handlecounty = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);
        //console.log(getcountryId);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Get Country id" + countryid + " And " + stateid);
    }

    const address = [
        {
            address: "800 3rd Ave New York, NY 10022 United States",
            className: "newYorkLocation",
        },
        {
            address: "House No, 3 Nkanchibaya Rd, Lusaka, Zambia",
            className: "zambiaLocation",
        },
        {
            address: "422,Jtm Mall, Model Town, Jagatpura, Jaipur, Rajasthan 302017",
            className: "germanyLocation",
        },
        {
            address: "Jtm Mall, Office no 422, 4th Floor, Jaipur Rajasthan, 302025",

            className: "indiaLocation",
        },
        {
            address: "1210, The Regal Tower, Near Business Bay, Dubai, U.A.E.",
            className: "uaeLocation",
        },
    ];
    return (
        <>
            <div className='newHomeFootermainDiv'>
                <div className='newHomeFootersectionOne'>
                    <div className='newHomeFooterMapDiv'>
                        <img className='newHomeFooterMapImage' src="Images/NewHomeLayout/FooterContent/footerworldmap.gif" />
                        {address.map((item, i) => (
                            <OverlayTrigger
                                key={i}
                                placement="right"
                                marginTop="10%"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                    <div className="tooltipCustomised">
                                        <div className="indicate"></div>
                                        <p>{item.address}</p>
                                    </div>
                                }
                            >
                                <div key={i} className={item.className}></div>
                            </OverlayTrigger>
                        ))}

                        {/* <div className='newHomeFooterMapText'>
                            <p className='newHomeFooterMapText1'>India</p>
                            <p className='newHomeFooterMapText2'>Jtm Mall, Office no 422, 4th floor, Jagatpura, Jaipur, Rajasthan 302025</p>
                        </div> */}
                    </div>
                    <div className='newHomeFooterlinkDiv'>
                        <div className='newHomeFooterlogoCurrencyDropDown'>
                            <img className='newHomeFooterlinkImage' src='Images/NewHomeLayout/FooterContent/TravelFlap (2).png' />
                            <div className="newFooterCurrencyDropDown">
                                <h5>State/Currency</h5>
                                <div className="countryselect">
                                    <select className="form-select newFooterCountryDrop" onChange={(e) => handlecounty(e)}
                                        style={{ border: "1px solid #3380f2", width: "60%", appearance: "none" }}>
                                        <option value="" >Country</option>
                                        {
                                            countrydata.map((getcountry, index) => (
                                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="countryselect">
                                    <select className="form-select newFooterCountryDrop" onChange={(e) => handlecounty(e)}
                                        style={{ border: "1px solid #3380f2", width: "60%", appearance: "none" }}>
                                        <option value="" >Currency</option>
                                        {
                                            countrydata.map((getcountry, index) => (
                                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='newHomeFootersocialIconsText'>
                            <p className='newHomeFootersocialText'>TravelFlap is one of the best service provider in the industry. We are an organisation with a dream to provide our customer a best and the safest experience of their life.</p>
                            <div className="footernewHomesocialmedia">
                                <a href="https://www.pinterest.com/travelflap/"><BsPinterest size={"1.4em"} /></a>
                                <a href=" https://www.facebook.com/travelflap/"><BsFacebook size={"1.4em"} /></a>
                                <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin size={"1.4em"} /></a>
                                <a href="https://www.instagram.com/travelflap/"><FaInstagram size={"1.4em"} /></a>
                                <a href="https://www.behance.net/travelflap"><BsBehance size={"1.4em"} /></a>
                                <a href="https://twitter.com/TravelFlap"><BsTwitter size={"1.4em"} /></a>
                            </div>
                        </div>
                        <div className='newHomefooterlinks'>
                            <div className='newHomefooterlinks1'>
                                <ul>
                                    <li><h5>About Us</h5></li>
                                    <li>Home</li>
                                    {/* <li>Terms of Services</li>
                                    <li>Term of Services</li> */}
                                    <li>Privacy Statement</li>
                                    <li>FAQ</li>
                                    <li>Blog</li>
                                    <li>Terms & Service</li>
                                </ul>
                            </div>
                            <div className='newHomefooterlinks1'>
                                <ul>
                                    <li className='footerContext'><h5>Our Services</h5></li>
                                    <Link style={{ textDecoration: "none" }} to="/flights"><li>Flights</li></Link>
                                    <Link style={{ textDecoration: "none" }} to="/holidays"><li>Holiday</li></Link>
                                    <Link style={{ textDecoration: "none" }} to="/cruise"><li>Cruises</li></Link>
                                    <Link style={{ textDecoration: "none" }} to="/activities"><li>Activities</li></Link>
                                    <Link style={{ textDecoration: "none" }} to="/holidays"><li>Holiday</li></Link>
                                    {/* <li>Holiday</li> */}
                                    {/* <li>Cruises</li>
                                    <li>Activities</li>
                                    <li>Special Offers</li> */}
                                </ul>
                            </div>
                            <div className='newHomefooterlinks1'>
                                <ul>
                                    <li><h5> Support</h5></li>
                                    <li>Why Us</li>
                                    <li>Contact Us</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='newHomeFootersectionTWo'>
                    <div className='newHomeFootersectionLogos'>
                        <p>The world leader in online travel & related services</p>
                        <div className='newHomeFootersectionLogosDiv'>
                            <div className='newHomeFooterImages'>
                                <img className='newHomeFootersectionLogosTravelFlap' src='Images/NewHomeLayout/FooterContent/TravelFlap.png' />
                            </div>
                            <div className='newHomeFooterImages'>
                                <img className='newHomeFootersectionLogosBlueberry'
                                    src='Images/NewHomeLayout/FooterContent/BBT.webp'
                                />
                            </div>
                            <div className='newHomeFooterImages'>
                                <img className='newHomeFootersectionLogosNextHolidays' src='Images/NewHomeLayout/FooterContent/NextHolidaysNew.png' />
                            </div>
                            <div className='newHomeFooterImages'>
                                <img className='newHomeFootersectionLogosVisaFetch' src='Images/NewHomeLayout/FooterContent/visafetch (1).png' />
                            </div>
                        </div>
                    </div>
                    <img className='newHomeFooterwavesection' src="Images/NewHomeLayout/FooterContent/footerbackground.png" />
                    <div className='newHomeFootertextandPayment'>
                        <p className='newHomeFootercopyrightText'>©2022 All Rights Reserved</p>
                        <p className='newHomeFootercopyrightText'>Privacy Policy</p>
                        <p className='newHomeFootercopyrightText'>Terms and Conditions</p>
                        <p className='newHomeFootercopyrightText'>Sales and Refund</p>

                        {/* <WaveEffects/> */}
                        {/* <div className='paymentGatewayGroup'>
                            <img className='newFooterPaymentIamges' src='Images/NewHomeLayout/FooterContent/PaymentGroup.png' />
                        </div> */}
                    </div>

                </div>

            </div>
        </>
    );
};

