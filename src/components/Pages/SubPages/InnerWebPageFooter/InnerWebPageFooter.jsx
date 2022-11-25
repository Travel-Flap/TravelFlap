// import React from 'react';
import React, { useState } from 'react';
import { BsFacebook, BsPinterest, BsTwitter, BsInstagram, BsBehance, BsLinkedin, BsWhatsapp, } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import countrydata from '../../../../CountryData.json';
import { IconContext } from "react-icons";
import { FaInstagram } from "react-icons/fa";
import "./InnerWebPageFooter.css";
import { Link } from 'react-router-dom';
var embedId = "Oe4h16qpveg"

export const InnerWebPageFooter = () => {

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
    return (
        <>
            {
                <div className='Footermaindiv'>
                    <div className='Footerlogodiv'>
                        <div className='Footercontaindiv'>

                            {/* <img src="Images/innerwebpagefooter/Group 2051.png "
                                alt="footer logo"
                            /> */}

                            <div className='innerfooterlogoSocialIcon'>
                                <img style={{ height: "60px", marginTop: "2%" }} src="Images/innerwebpagefooter/Group 2051.png " alt="footer logo" />

                                <div className="innerfootersocialmedia">
                                    <a href="https://www.pinterest.com/travelflap/"><BsPinterest size={"1.4em"} style={{ color: "white" }} /></a>
                                    <a href=" https://www.facebook.com/travelflap/"><BsFacebook size={"1.4em"} style={{ color: "white" }} /></a>
                                    <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin size={"1.4em"} style={{ color: "white" }} /></a>
                                    <a href="https://www.instagram.com/travelflap/"><FaInstagram size={"1.4em"} style={{ color: "white" }} /></a>
                                    <a href="https://www.behance.net/travelflap"><BsBehance size={"1.4em"} style={{ color: "white" }} /></a>
                                    <a href="https://twitter.com/TravelFlap"><BsTwitter size={"1.4em"} style={{ color: "white" }} /></a>
                                </div>
                            </div>

                            <p className='Footerlogocontain'> TravelFlap is one of the best service provider in the industry.We are a organization with a dream to provide our customers
                                a safer and the best experience of there life.
                            </p>

                        </div>

                        <div className='dropdowndiv'>
                            {/* <div> */}
                            <div className="DropDownlist">
                                <h5 className='countryselectlistheading'>State/Currency</h5>
                                <div className="countryselectlist">
                                    <select className="form-select FooterCountryDroplist" onChange={(e) => handlecounty(e)}
                                        style={{ border: "2px solid gray", width: "60%", appearance: "none" }}>
                                        <option value="" >Country</option>
                                        {
                                            countrydata.map((getcountry, index) => (
                                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="countryselectlist">
                                    <select className="form-select FooterCountryDroplist" onChange={(e) => handlecounty(e)}
                                        style={{ border: "2px solid gray", width: "60%", appearance: "none" }}>
                                        <option value="" >Currency</option>
                                        {
                                            countrydata.map((getcountry, index) => (
                                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>

                    </div>

                    <div className='Footervideodiv'>
                        <div className='videocontainer'>
                            <div className="Footervideoexperimentcontainer-items">
                                <iframe
                                    width="500"
                                    height="340"
                                    src={`https://www.youtube.com/embed/${embedId}`}
                                    frameBorder="0"
                                    //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>

                        </div>

                        <div className='listdiv'>
                            <ul>
                                <Link to="" style={{ textDecoration: "none", color: "white" }} >
                                    <li className='listwiseheading'>
                                        Easy Visa Places
                                    </li>
                                </Link>
                                <div className='listwise'>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}>
                                        <li>
                                            India Visa
                                        </li>
                                    </Link>
                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}>
                                        <li>
                                            Dubai Visa
                                        </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}>
                                        <li>USA Visa</li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}><li>
                                        Vietnam Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}> <li>
                                        Thailand Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}> <li>
                                        Argentina Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}><li>
                                        Malaysia Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}><li>
                                        France Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}><li>
                                        Egypt Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}><li>
                                        Iceland Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}><li>
                                        Greece Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}><li>
                                        Spain visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}><li>
                                        Venice Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}><li>
                                        Japan Visa
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}>
                                        <li>
                                            Italy Visa
                                        </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}> <li>
                                        Switzerland
                                    </li>
                                    </Link>

                                    <Link to="" style={{ textDecoration: "none", color: "#C2C2C2" }}> <li>
                                        Greenland
                                    </li>
                                    </Link>
                                </div>
                            </ul>
                            <div>
                                <ul>
                                    <li className='listwiseheading'>top destinations</li>
                                    <div className='listwise'>
                                        <li>goa</li>
                                        <li>delhi</li>
                                        <li>goa</li>
                                        <li>delhi</li>
                                        <li>goa</li>
                                        <li>delhi</li>
                                        <li>goa</li>
                                        <li>delhi</li>
                                        <li>goa</li>
                                        <li>delhi</li>
                                    </div>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li className='listwiseheading'>Best place visit this month </li>
                                    <div className='listwise'>
                                        <li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li>
                                    </div>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='listwiseheading'>trensing Collection </li>
                                    <div className='listwise'>
                                        <li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li>
                                    </div>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='listwiseheading'>offbeat placece </li>
                                    <div className='listwise'>
                                        <li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li><li>goa</li>
                                        <li>delhi</li>
                                    </div>
                                </ul>
                            </div>




                        </div>


                    </div>


                    <div className='Footercontactinfo'>

                        <div className='Learnmorediv'>
                            <ul>
                                <li>
                                    <li className='listwiseheading2'>
                                        Learn More
                                    </li>
                                </li>
                                <div className='listwise'>
                                    <li className='newFooterContentHeadingDiv' > About Us </li>
                                    <li className='newFooterContentHeadingDiv' > Home</li>
                                    <li className='newFooterContentHeadingDiv' > FAQ</li>
                                    <li className='newFooterContentHeadingDiv' > Blogs</li>
                                    <li className='newFooterContentHeadingDiv' > Contact us</li>
                                    <li className='newFooterContentHeadingDiv' > Terms & Conditions </li>
                                </div>
                            </ul>
                        </div>

                        <div className='productsdiv'>
                            <li className='listwiseheading1'>Services</li>

                            <div className='innerFooterContactUsDiv'>
                                <div>
                                    <ul>
                                        <div className='listwise'>
                                            <Link to="/flights" style={{ textDecoration: "none", color: "#C2C2C2" }} >
                                                <li className='newFooterContentHeadingDiv' >Flight</li>
                                            </Link>
                                            <Link to="/hotel" style={{ textDecoration: "none", color: "#C2C2C2" }} >
                                                <li className='newFooterContentHeadingDiv' >Hotel</li>
                                            </Link>
                                            <Link to="/visa" style={{ textDecoration: "none", color: "#C2C2C2" }} >
                                                <li className='newFooterContentHeadingDiv' >Visa</li>
                                            </Link>
                                            <Link to="/holidays" style={{ textDecoration: "none", color: "#C2C2C2" }} >
                                                <li className='newFooterContentHeadingDiv' >Holiday</li>
                                            </Link>
                                            <Link to="/staycations" style={{ textDecoration: "none", color: "#C2C2C2" }} >
                                                <li className='newFooterContentHeadingDiv' >Staycation</li>
                                            </Link>
                                            <Link to="/rentals" style={{ textDecoration: "none", color: "#C2C2C2" }} >
                                                <li className='newFooterContentHeadingDiv' >Car rentals</li>
                                            </Link>
                                        </div>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <div className='listwise'>
                                            <Link to="/cruise" style={{ textDecoration: "none", color: "#C2C2C2" }} >
                                                <li className='newFooterContentHeadingDiv' > Cruise</li>
                                            </Link>
                                            <Link to="/activities" style={{ textDecoration: "none", color: "#C2C2C2" }} >
                                                <li className='newFooterContentHeadingDiv' >Activity</li>
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                            </div>


                        </div>



                        <div className='contactusdiv'>
                            <li className='listwiseheading1'> Contact us</li>

                            <div className='innerFooterContactUsDiv'>
                                <div>
                                    <ul>
                                        <div className='listwise'>
                                            <li className='newFooterContentHeadingDiv' >India</li>
                                            <li className='newFooterContentHeadingDiv' >UAE</li>
                                            <li className='newFooterContentHeadingDiv' >GEM</li>
                                            <li className='newFooterContentHeadingDiv' >SA</li>
                                        </div>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                        <div className='listwise'>
                                            <li className='newFooterContentHeadingDiv' >123-456-789</li>
                                            <li className='newFooterContentHeadingDiv' >123-456-789</li>
                                            <li className='newFooterContentHeadingDiv' >123-456-789</li>
                                            <li className='newFooterContentHeadingDiv' >123-456-789</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>


                        </div>

                        <div className='weacceptdiv'>
                            <ul>
                                <li className='listwiseheading1'>
                                    We Accept
                                </li>
                            </ul>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div className='weacceptinnerdiv'>
                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2000.png " alt='payment gateway image' ></img>
                                    </div>

                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2001.png " alt='payment gateway image' ></img>
                                    </div>

                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2004.png " alt='payment gateway image' ></img>
                                    </div>

                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2003.png " alt='payment gateway image'  ></img>
                                    </div>
                                </div>

                                <div className='weacceptinnerdiv'>
                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2062.png " alt='payment gateway image'  ></img>
                                    </div>

                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2061.png " alt='payment gateway image' ></img>
                                    </div>

                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2063.png " alt='payment gateway image'  ></img>
                                    </div>

                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2064.png " alt='payment gateway image'  ></img>
                                    </div>
                                </div>

                                <div className='weacceptinnerdiv'>
                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2065.png " alt='payment gateway image'  ></img>
                                    </div>

                                    <div className='newFooterPaymentImages' >
                                        <img src="Images/innerwebpagefooter/Group 2007.png " alt='payment gateway image' ></img>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <p className='copyrightdiv'>©2022 Travalflap | Global Product</p>

                    </div>

                    <div className='footerlogolastdiv'>
                        {/* <div>
                            <p className='copyrightdiv'>©2022 Travalflap | Global Product</p>
                        </div> */}
                        {/* <div className='footerlogoinnerdiv'>
                        <div className=''>
                                <img  src='Images/innerwebpagefooter/Group 2051.png ' />
                            </div>
                            <div className='imageset'>
                                <img className=''
                                    src='Images/innerwebpagefooter/BBT_1.png'
                                />
                            </div>
                            <div className=''>
                                <img className='' src='Images/innerwebpagefooter/logo_minified.png' />
                            </div>
                            <div className=''>
                                <img className='' src='Images/innerwebpagefooter/visafetch.png' />
                            </div>
                        </div> */}
                        {/* <div className='innerwebpageFooter'>
                            <p className='copyrightdiv'>©2022 Travalflap | Global Product</p>

                            <div className='innerwebpageFooterDiv'>
                                <div className='innerwebpageFooterImages'>
                                    <img className='innerwebpageFooterTravelFlap' src='Images/NewHomeLayout/FooterContent/TravelFlap.png' />
                                </div>
                                <div className='innerwebpageFooterImages'>
                                    <img className='innerwebpageFooterBlueberry' src='Images/NewHomeLayout/FooterContent/BBT.webp' />
                                </div>
                                <div className='innerwebpageFooterImages'>
                                    <img className='innerwebpageFooterNextHolidays' src='Images/NewHomeLayout/FooterContent/NextHolidaysNew.png' />
                                </div>
                                <div className='innerwebpageFooterImages'>
                                    <img className='innerwebpageFooterVisaFetch' src='Images/NewHomeLayout/FooterContent/visafetch (1).png' />
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            }

        </>
    );
}