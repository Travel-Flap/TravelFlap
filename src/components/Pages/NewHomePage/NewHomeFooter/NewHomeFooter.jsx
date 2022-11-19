
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
        // <div className="newhomefooterparentcontainer">
        //     <div className="newHomeFootertextcontainer1">
        //         <img
        //             src="Images/TravelFlapLogo.jpg"
        //             alt="footer logo"
        //         />

        //         <div className="newHomeFooterHeadingIcons">
        //             <IconContext.Provider value={{ className: "socialnewHomeFooterIcons" }}>

        // <div className="footernewHomesocialmedia">
        //     <a href="https://www.pinterest.com/travelflap/"><BsPinterest/></a>
        //     <a href=" https://www.facebook.com/travelflap/"><BsFacebook /></a>
        //     <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin /></a>
        //     <a href="https://www.instagram.com/travelflap/"><FaInstagram /></a>
        //     <a href="https://www.behance.net/travelflap"><BsBehance /></a>
        //     <a href="https://twitter.com/TravelFlap"><BsTwitter /></a>
        // </div>
        //             </IconContext.Provider>
        //         </div>


        //     </div>

        //     <div className="newHomeFootertextcontainer2">
        //         <div className="newHomeFooterHeadingtexts">
        //             <h5>
        //                 TravelFlap is one of the best service provider in the industry. We are a organization with a dream to provide our customers a
        //                 safer and the best experience of there life.
        //             </h5>
        //         </div>

        // <div className="newFooterCurrencyDropDown">
        //     <h5>State/Currency</h5>
        //     <div className="countryselect">
        //         <select className="form-select newFooterCountryDrop" onChange={(e) => handlecounty(e)}
        //             style={{ border: "3px solid #3380f2", width: "60%", appearance: "none" }}>
        //             <option value="" >Country</option>
        //             {
        //                 countrydata.map((getcountry, index) => (
        //                     <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
        //                 ))
        //             }
        //         </select>
        //     </div>

        //     <div className="countryselect">
        //         <select className="form-select newFooterCountryDrop" onChange={(e) => handlecounty(e)}
        //             style={{ border: "3px solid #3380f2", width: "60%", appearance: "none" }}>
        //             <option value="" >Currency</option>
        //             {
        //                 countrydata.map((getcountry, index) => (
        //                     <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
        //                 ))
        //             }
        //         </select>
        //     </div>
        // </div>
        //     </div>


        //     <div className="newHomeFootermapMainContainer">

        //         <div className="newHomeFooterMapContainer">
        //             <img
        //                 src="Images/NewHomeLayout/FooterContent/world-map-gif.gif"
        //                 alt="footer logo"
        //             />
        //         </div>

        //         <div className="newHomeFooterBlogContainer">
        //             <h5>Blog Posts</h5>
        //             <div className="newHomeFooterblogscontextcontainer">
        //                 <div className="newHomeblogsimagecontentdiv">
        //                     <div className="newHomeBlogimagediv">
        //                         <img
        //                             src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
        //                             alt=""
        //                         />
        //                     </div>
        //                     <div className="newHomeBlogcontent">
        //                         <h4>Travel with us this New Year</h4>
        //                         <p>Nov 29,2022</p>
        //                     </div>
        //                 </div>

        //                 <div className="newHomeblogsimagecontentdiv">
        //                     <div className="newHomeBlogimagediv">
        //                         <img
        //                             src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
        //                             alt=""
        //                         />
        //                     </div>
        //                     <div className="newHomeBlogcontent">
        //                         <h4>Travel with us this New Year</h4>
        //                         <p>Nov 29,2022</p>
        //                     </div>
        //                 </div>

        //                 <div className="newHomeblogsimagecontentdiv">
        //                     <div className="newHomeBlogimagediv">
        //                         <img
        //                             src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
        //                             alt=""
        //                         />
        //                     </div>
        //                     <div className="newHomeBlogcontent">
        //                         <h4>Travel with us this New Year</h4>
        //                         <p>Nov 29,2022</p>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>

        //         <div className="newHomeFooterContactContainer">
        //             <h5>Contact Details</h5>

        //             <div className="newHomeFooterContact">
        //                 <div className="newHomeFooterContactDetailsdiv">
        //                     <div className="newHomeFooterContactContent">
        //                         <div className="newHomeFooterContactContentInner1">
        //                             <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFootermap" }}><GoLocation /></IconContext.Provider>
        //                         </div>
        //                         <div className="newHomeFooterContactContentInner2">
        //                             <p>800 3rd Ave, New York, NY 10022, United States</p>
        //                         </div>

        //                     </div>



        //                     <div className="newHomeFooterContactContent">
        //                         <div className="newHomeFooterContactContentInner1">
        //                             <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFootercall" }}><BsWhatsapp/></IconContext.Provider>
        //                         </div>
        //                         <div className = "newHomeFooterContactContentInner2">
        //                             <p className="">Mobile USA : +19176726964 </p>

        //                             <p className="">Mobile DXB : +971 58 597 8776 </p>
        //                         </div>
        //                     </div>

        //                     <div className="newHomeFooterContactContent">
        //                         <div className="newHomeFooterContactContentInner1">
        //                             <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFootermail" }}><HiOutlineMailOpen /></IconContext.Provider>
        //                         </div>
        //                         <div className="newHomeFooterContactContentInner2">
        //                             <p className="footerContentmail">Info@travelflap.com</p>
        //                         </div>

        //                     </div>

        //                     <div className="newHomeFooterContactContent">
        //                         <div className="newHomeFooterContactContentInner1">
        //                             <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFooterglobe" }}><FaGlobeAmericas /></IconContext.Provider>
        //                         </div>
        //                         <div className="newHomeFooterContactContentInner2">
        //                             <p className="footerContentwebsite">www.travelflap.com</p>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div className='newFooterPaymentGateways'>
        //         <h5>We accept</h5>

        //         <div className='newFooterPaymentImages'>
        //             <div className='gatewayImage2'>
        //                 <img src='Images/NewHomeLayout/FooterContent/payingSystem.png'/>
        //             </div>
        //         </div>
        //     </div>

        // </div>

        <>
            <div className='newHomeFootermainDiv'>
                <div className='newHomeFootersectionOne'>
                    <div className='newHomeFooterMapDiv'>
                        <img className='newHomeFooterMapImage' src="Images/NewHomeLayout/FooterContent/footerworldmap.gif" />
                        {address.map((item, i) => (
                            <OverlayTrigger
                                key={i}
                                placement="right"
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
                                    <li>Terms of Services</li>
                                    <li>Privacy Statement</li>
                                    <li>FAQ</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                            <div className='newHomefooterlinks1'>
                                <ul>
                                    <li className='footerContext'><h5>Our Services</h5></li>
                                    <Link style={{ textDecoration: "none" }} to="/flights"><li>Flights</li></Link>
                                    <li>Holiday Packages</li>
                                    <li>Cruises</li>
                                    <li>Activities</li>
                                    <li>Special Offers</li>
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

