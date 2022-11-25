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
                            <div className='innerfooterlogoSocialIcon'>
                               <img style={{height:"65px",marginTop:"2%"}} src="Images/innerwebpagefooter/Group 2051.png " alt="footer logo" />
                               <div className="innerfootersocialmedia">
                                    <a href="https://www.pinterest.com/travelflap/"><BsPinterest size={"1.4em"} style={{color:"white"}}/></a>
                                    <a href=" https://www.facebook.com/travelflap/"><BsFacebook size={"1.4em"} style={{color:"white"}}/></a>
                                    <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin size={"1.4em"} style={{color:"white"}}/></a>
                                    <a href="https://www.instagram.com/travelflap/"><FaInstagram size={"1.4em"} style={{color:"white"}}/></a>
                                    <a href="https://www.behance.net/travelflap"><BsBehance size={"1.4em"} style={{color:"white"}}/></a>
                                    <a href="https://twitter.com/TravelFlap"><BsTwitter size={"1.4em"} style={{color:"white"}}/></a>
                               </div>
                            </div>

                            <p className='Footerlogocontain'> TravelFlap is one of the best service provider in the industry.
                                We are a organization with a dream to provide our customers
                                a safer and the best experience of there life. </p>

                        </div>

                        <div className='dropdowndiv'>
                            <div>
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
                            </div>
                        </div>

                    </div>



                    <div className='Footervideodiv'>
                        <div className='videocontainer'>
                            <div className="Footervideoexperimentcontainer-items">
                                <iframe
                                    width="550"
                                    height="300"
                                    src={`https://www.youtube.com/embed/${embedId}`}
                                    frameBorder="0"
                                    //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>

                        </div>
                        <div className='listdiv'>
                            <ul>
                                <li className='listwiseheading'>
                                    Place to visit
                                </li>
                                <div className='listwise'>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
                                    <li>
                                        Place to visit
                                    </li>
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
                                <li>
                                    About Us
                                </li>
                                <li>home</li>
                                <li>FAQ</li>
                                <li>Blogs</li>
                                <li>Contact us</li>
                                <li>Trems & Service</li>
                                </div>
                            </ul>
                        </div>
                        <div className='productsdiv'>
                            <li className='listwiseheading1'>Products</li>

                            <div className='innerFooterContactUsDiv'>
                                <div>
                                    <ul>
                                    <div className='listwise'>
                                        <li>Flight</li>
                                        <li>Hotel</li>
                                        <li>visa</li>
                                        <li>Holiday</li>
                                        <li>Staycation</li>
                                        <li>Car rentals</li>
                                        </div>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                    <div className='listwise'>
                                        <li>cruise</li>
                                        <li>Activity</li>
                                        
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
                                        <li>India</li>
                                        <li>UAE</li>
                                        <li>GEM</li>
                                        <li>SA</li>
                                        </div>
                                    </ul>
                                </div>

                                <div>
                                    <ul>
                                    <div className='listwise1'>
                                        <li>123-456-789</li>
                                        <li>123-456-789</li>
                                        <li>123-456-789</li>
                                        <li>123-456-789</li>
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
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <div className='weacceptinnerdiv'>
                                <div>
                                <img src="Images/innerwebpagefooter/Group 2000.png " ></img>
                                </div>
                                <div>
                                <img src="Images/innerwebpagefooter/Group 2001.png "></img>
                                </div>
                                <div>
                                <img src="Images/innerwebpagefooter/Group 2004.png " ></img>
                                </div>
                                <div>
                                <img src="Images/innerwebpagefooter/Group 2003.png " ></img>
                                </div>
                            </div>
                            <div className='weacceptinnerdiv'>
                            <div>
                                <img src="Images/innerwebpagefooter/Group 2062.png " ></img>
                                </div>
                                <div>
                                <img src="Images/innerwebpagefooter/Group 2061.png "></img>
                                </div>
                                <div>
                                <img src="Images/innerwebpagefooter/Group 2063.png " ></img>
                                </div>
                                <div>
                                <img src="Images/innerwebpagefooter/Group 2064.png " ></img>
                                </div>
                            </div>
                            <div className='weacceptinnerdiv'>
                            <div>
                                <img src="Images/innerwebpagefooter/Group 2065.png " ></img>
                                </div>
                                <div>
                                <img src="Images/innerwebpagefooter/Group 2007.png "></img>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='footerlogolastdiv'>
                        <div>
                         <p className='copyrightdiv'>©2022 Travalflap | Global Product</p>
                        </div>
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
                        <div className='innerwebpageFooter'>
                            <div className='innerwebpageFooterDiv'>
                                <div className='innerwebpageFooterImages'>
                                    <img className='innerwebpageFooterTravelFlap' src='Images/NewHomeLayout/FooterContent/TravelFlap.png' />
                                </div>
                                <div className='innerwebpageFooterImages'>
                                    <img className='innerwebpageFooterBlueberry' src='Images/NewHomeLayout/FooterContent/BBT.webp'/>
                                </div>
                                <div className='innerwebpageFooterImages'>
                                    <img className='innerwebpageFooterNextHolidays' src='Images/NewHomeLayout/FooterContent/NextHolidaysNew.png' />
                                </div>
                                <div className='innerwebpageFooterImages'>
                                    <img className='innerwebpageFooterVisaFetch' src='Images/NewHomeLayout/FooterContent/visafetch (1).png' />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            }

        </>
    );
}