
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
    return (
        <div className="newhomefooterparentcontainer">
            <div className="newHomeFootertextcontainer1">
                <img
                    src="Images/TravelFlapLogo.jpg"
                    alt="footer logo"
                />

                <div className="newHomeFooterHeadingIcons">
                    <IconContext.Provider value={{ className: "socialnewHomeFooterIcons" }}>

                        <div className="footernewHomesocialmedia">
                            <a href="https://www.pinterest.com/travelflap/"><BsPinterest/></a>
                            <a href=" https://www.facebook.com/travelflap/"><BsFacebook /></a>
                            <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin /></a>
                            <a href="https://www.instagram.com/travelflap/"><FaInstagram /></a>
                            <a href="https://www.behance.net/travelflap"><BsBehance /></a>
                            <a href="https://twitter.com/TravelFlap"><BsTwitter /></a>
                        </div>
                    </IconContext.Provider>
                </div>


            </div>

            <div className="newHomeFootertextcontainer2">
                <div className="newHomeFooterHeadingtexts">
                    <h5>
                        TravelFlap is one of the best service provider in the industry. We are a organization with a dream to provide our customers a
                        safer and the best experience of there life.
                    </h5>
                </div>

                <div className="newFooterCurrencyDropDown">
                    <h5>State/Currency</h5>
                    <div className="countryselect">
                        <select className="form-select newFooterCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ border: "3px solid #3380f2", width: "60%", appearance: "none" }}>
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
                            style={{ border: "3px solid #3380f2", width: "60%", appearance: "none" }}>
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


            <div className="newHomeFootermapMainContainer">

                <div className="newHomeFooterMapContainer">
                    <img
                        src="Images/NewHomeLayout/FooterContent/world-map-gif.gif"
                        alt="footer logo"
                    />
                </div>

                <div className="newHomeFooterBlogContainer">
                    <h5>Blog Posts</h5>
                    <div className="newHomeFooterblogscontextcontainer">
                        <div className="newHomeblogsimagecontentdiv">
                            <div className="newHomeBlogimagediv">
                                <img
                                    src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
                                    alt=""
                                />
                            </div>
                            <div className="newHomeBlogcontent">
                                <h4>Travel with us this New Year</h4>
                                <p>Nov 29,2022</p>
                            </div>
                        </div>

                        <div className="newHomeblogsimagecontentdiv">
                            <div className="newHomeBlogimagediv">
                                <img
                                    src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
                                    alt=""
                                />
                            </div>
                            <div className="newHomeBlogcontent">
                                <h4>Travel with us this New Year</h4>
                                <p>Nov 29,2022</p>
                            </div>
                        </div>

                        <div className="newHomeblogsimagecontentdiv">
                            <div className="newHomeBlogimagediv">
                                <img
                                    src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
                                    alt=""
                                />
                            </div>
                            <div className="newHomeBlogcontent">
                                <h4>Travel with us this New Year</h4>
                                <p>Nov 29,2022</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="newHomeFooterContactContainer">
                    <h5>Contact Details</h5>

                    <div className="newHomeFooterContact">
                        <div className="newHomeFooterContactDetailsdiv">
                            <div className="newHomeFooterContactContent">
                                <div className="newHomeFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFootermap" }}><GoLocation /></IconContext.Provider>
                                </div>
                                <div className="newHomeFooterContactContentInner2">
                                    <p>800 3rd Ave, New York, NY 10022, United States</p>
                                </div>

                            </div>

                            {/* <div className="newHomeFooterContactContent">
                                <div className="newHomeFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFootercall" }}><FiPhoneCall /></IconContext.Provider>
                                </div>
                                <div className="newHomeFooterContactContentInner2">
                                    <p>Mobile India : +918209366227,
                                        <span className="newHomeFooterContactContentInner2span"> +917877680588 <BsWhatsapp/></span>
                                    </p>
                                    <p className="">Mobile USA : +19176726964<BsWhatsapp/></p>
                                    <p>Mobile DXB : +971 58 597 8776 <BsWhatsapp /></p>
                                </div>
                            </div> */}

                            <div className="newHomeFooterContactContent">
                                <div className="newHomeFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFootercall" }}><BsWhatsapp/></IconContext.Provider>
                                </div>
                                <div className = "newHomeFooterContactContentInner2">
                                    <p className="">Mobile USA : +19176726964 </p>
                            
                                    <p className="">Mobile DXB : +971 58 597 8776 </p>
                                </div>
                            </div>

                            <div className="newHomeFooterContactContent">
                                <div className="newHomeFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFootermail" }}><HiOutlineMailOpen /></IconContext.Provider>
                                </div>
                                <div className="newHomeFooterContactContentInner2">
                                    <p className="footerContentmail">Info@travelflap.com</p>
                                </div>

                            </div>

                            <div className="newHomeFooterContactContent">
                                <div className="newHomeFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFooterglobe" }}><FaGlobeAmericas /></IconContext.Provider>
                                </div>
                                <div className="newHomeFooterContactContentInner2">
                                    <p className="footerContentwebsite">www.travelflap.com</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='newFooterPaymentGateways'>
                <h5>We accept</h5>

                <div className='newFooterPaymentImages'>
                    <div className='gatewayImage2'>
                        <img src='Images/NewHomeLayout/FooterContent/payingSystem.png'/>
                    </div>
                    {/* <div className='gatewayImage1'>
                        <img src='Images/NewHomeLayout/FooterContent/RupayLogo.png'/>
                    </div>
                    <div className='gatewayImage2'>
                        <img src='Images/NewHomeLayout/FooterContent/Masterclass.png'/>
                    </div>
                    <div className='gatewayImage3'>
                        <img src='Images/NewHomeLayout/FooterContent/visa.png'/>
                    </div>
                    <div className='gatewayImage1'>
                        <img src='Images/NewHomeLayout/FooterContent/RupayLogo.png'/>
                    </div>
                    <div className='gatewayImage2'>
                        <img src='Images/NewHomeLayout/FooterContent/Masterclass.png'/>
                    </div> */}
                    {/* <div className='gatewayImage3'>
                        <img src='Images/NewHomeLayout/FooterContent/visa.png'/>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

