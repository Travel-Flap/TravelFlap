import React from 'react';
import { BsFacebook, BsPinterest, BsTwitter, BsInstagram, BsBehance, BsLinkedin, BsWhatsapp, } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";
import "./PopularDestinatioInnerFooter.css";
var embedId = "JQr1-VchonU"

export const PopularDestinatioInnerFooter = () => {
    return (
        <> 
            {/* <div className="PopularDestinatioInnerFooterMain-Container">
            
                <div className="PopularDestinatioInnerFooterMain-Container3">
                    <div className="PopularDestinatioInnerFootersubclass-item">

                        <IconContext.Provider value={{ className: "PopularDestinatioInnerFootersocialIcons" }}>
                            <div className="PopularDestinatioInnerFooterfootersocialmedia1">

                                <a href="https://www.pinterest.com/travelflap/"><BsPinterest /></a>
                                <a href=" https://www.facebook.com/travelflap/"><BsFacebook /></a>
                                <a href="https://www.instagram.com/travelflap/"><BsInstagram /></a>
                                <a href="https://www.behance.net/travelflap"><BsBehance /></a>
                                <a href="https://twitter.com/TravelFlap"><BsTwitter /></a>
                                <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin /></a>
                            </div>
                        </IconContext.Provider>
                    </div>

                    <div className="PopularDestinatioInnerFooter">
                  
                        <div className="PopularDestinatioInnerFooterDetailsdiv">
                            <div className="PopularDestinatioInnerFooterContent">
                                <div className="PopularDestinatioInnerFooterContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><GoLocation /></IconContext.Provider>
                                </div>
                                <div className="PopularDestinatioInnerFooterContentInner2">
                                    <p>800 3rd Ave, New York, NY 10022, United States</p>
                                </div>

                            </div>

                            <div className="PopularDestinatioInnerFooterContent">
                                <div className="PopularDestinatioInnerFooterContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><FiPhoneCall /></IconContext.Provider>
                                </div>
                                <div className="PopularDestinatioInnerFooterContentInner2">
                                    <p>Mobile India : +918209366227,
                                        <span className="PopularDestinatioInnerFooterContentInner2span"> +917877680588</span>
                                    </p>
                                </div>
                            </div>
                            <div className="PopularDestinatioInnerFooterContent">
                                <div className="PopularDestinatioInnerFooterContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><BsWhatsapp /></IconContext.Provider>
                                </div>
                                <div className="PopularDestinatioInnerFooterContentInner2">
                                    <p className="">Mobile USA : +19176726964 </p>

                                    
                                </div>

                                
                            </div>

                            <div className="PopularDestinatioInnerFooterContent">
                                <div className="PopularDestinatioInnerFooterContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><HiOutlineMailOpen /></IconContext.Provider>
                                </div>
                                <div className="PopularDestinatioInnerFooterContentInner2">
                                    <p>Info@travelflap.com</p>
                                </div>

                            </div>

                            <div className="PopularDestinatioInnerFooterContent">
                                <div className="PopularDestinatioInnerFooterContentInner1">
                                    <IconContext.Provider value={{ color: "white"}}><FaGlobeAmericas /></IconContext.Provider>
                                </div>
                                <div className="PopularDestinatioInnerFooterContentInner2">
                                    <p>www.travelflap.com</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div> */}

            {
                <div className='Footermaindiv'>
                    <div className='Footerlogodiv'>
                     <div className='Footercontaindiv'>
                        logo
                        <img src="Images/innerwebpagefooter/travelflap logo.png "
                          alt="footer logo"
                      />
                      <p className='Footerlogocontain'> TravelFlap is one of the best service provider in the industry.
                         We are a organization with a dream to provide our customers 
                         a safer and the best experience of there life. </p>

                     </div>
                     
                     <div className='dropdowndiv'>
                        dropdown
                     </div>

                    </div>
                    <div className='Footervideodiv'>
                        <div className='videocontainer'>
                            {/* <div className="Main-Content-Footer"> */}
            <br /><br />
            {/* <div className="Footervideoexperimentcontainer">
                <img src={Image} />
            </div> */}
            <div className="Footervideoexperimentcontainer-items">
                <iframe
                    width="550"
                    height="350"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
                             
                        </div>
                        <div className='listdiv'>



                        </div>


                         </div>
                         <div className='Footercontactinfo'>
                            <div className='Learnmorediv'>
                            <ul>
                                <li>
                                    <h5>
                                        Learn More
                                    </h5>
                                </li>
                                
                                <li>
                                    About Us
                                </li>
                                <li>home</li>
                                <li>FAQ</li>
                                <li>Blogs</li>
                                <li>Contact us</li>
                                <li>Trems & Service</li>
                            </ul>
                            </div>
                            <div className='contactusdiv'>
                                <ul>
                                    <li>
                                       <h5 > Contact us</h5>
                                        </li>
                                        <li>India     123-456-789</li>
                                        <li>UAE        123-456-789</li>
                                        <li>GEM         123-456-789</li>
                                        <li>SA         123-456-789</li>
                                </ul>

                            </div>

                            <div className='socialdiv'>
                                <ul>
                                    <li>Social

                                    </li>
                                </ul>
                            </div>
                            <div className='weacceptdiv'>
                                <ul>
                                    <li>
                                        We Accept
                                    </li>
                                </ul>

                            </div>
                         </div>

                </div>
            }

        </>
    );
}