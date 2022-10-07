import React from "react";
import "./NewHomeFooter.css";
import { BsFacebook, BsPinterest, BsTwitter, BsInstagram, BsBehance, BsLinkedin, } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";
import { BsWhatsapp } from "react-icons/bs"

export const NewHomeFooter = () => {
    return (
        <div className="newhomefooterparentcontainer">
            <div className="newHomeFootertextcontainer1">
                <img
                    src="Images/TravelFlapLogo.jpg"
                    alt="footer logo"
                />
            </div>

            <div className="newHomeFootertextcontainer2">
                <div className="newHomeFooterHeadingtexts">
                    <h5>
                        TravelFlap is one of the best service provider in the industry. We are a organization with a dream to provide our customers a
                        safer and the best experience of there life.
                    </h5>
                </div>
                <div className="newHomeFooterHeadingIcons">
                    <IconContext.Provider value={{ className: "socialnewHomeFooterIcons" }}>

                        <div className="footernewHomesocialmedia">
                            <a href="https://www.pinterest.com/travelflap/"><BsPinterest /></a>
                            <a href=" https://www.facebook.com/travelflap/"><BsFacebook /></a>
                            <a href="https://www.instagram.com/travelflap/"><BsInstagram /></a>
                            <a href="https://www.behance.net/travelflap"><BsBehance /></a>
                            <a href="https://twitter.com/TravelFlap"><BsTwitter /></a>
                            <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin /></a>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>


            <div className="newHomeFootermapMainContainer">

                <div className="newHomeFooterMapContainer">
                    <img
                        src="Images/WorldMap/FooterMap.png"
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
                    {/* <div className="footernewHomeSectionbottom">
                        <h6 className="footer-heading">BLOG POSTS</h6>
                        <div className="newHomenewHomeblogs">
                            <div className="blognewHomeImg">
                                <img
                                    src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
                                    alt=""
                                />
                            </div>
                            <div className="blognewHomeText">
                                <p>Travel with us this year</p>
                                <p className="newHomeblogsecond">Nov 29, 2020</p>
                            </div>
                        </div>
                        <div className="newHomeblogs">
                            <div className="blognewHomeImg">
                                <img
                                    src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
                                    alt=""
                                />
                            </div>
                            <div className="blognewHomeText">
                                <p>Travel with us this year</p>
                                <p className="newHomeblogsecond">Nov 29, 2020</p>
                            </div>
                        </div>
                        <div className="newHomeblogs">
                            <div className="blognewHomeImg">
                                <img
                                    src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
                                    alt=""
                                />
                            </div>
                            <div className="blognewHomeText">
                                <p>Travel with us this year</p>
                                <p className="newHomeblogsecond">Nov 29, 2020</p>
                            </div>
                        </div>
                    </div> */}
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

                            <div className="newHomeFooterContactContent">
                                <div className="newHomeFooterContactContentInner1">
                                    <IconContext.Provider value={{ color: "white", className: "contecticonsnewHomeFootercall" }}><FiPhoneCall /></IconContext.Provider>
                                </div>
                                <div className="newHomeFooterContactContentInner2">
                                    <p>Mobile India : +918209366227,
                                        <span className="newHomeFooterContactContentInner2span"> +917877680588</span>
                                    </p>
                                    <p className="">Mobile USA : +19176726964 <BsWhatsapp style={{ fontSize: "26px", color: "white" }} /></p>
                                    <p>Mobile DXB : +971 58 597 8776</p>
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
            {/* <div className="mapnewhomeimagediv">
        <div className="footernewhomeSectionMapcontainer">
          <h2>Our Offices</h2>
          <img
            src="Images/WorldMap/FooterMap.png"
            alt="footer logo"
          />
        </div>
      </div> */}

            {/* <div className="footer">

                <div className="footernewHomeSectionbottom">
                    <h6 className="footernewHomeLogo">


                    </h6>

                    <p className="footernewHomelogodesc">
                        TravelFlap is one of the best service provider in the industry. We are a organization with a dream to provide our customers a
                        safer and the best experience of there life.
                    </p>

                    <IconContext.Provider value={{ className: "socialnewHomeFooterIcons" }}>
                        <div className="footernewHomesocialmedia">

                            <a href="https://www.pinterest.com/travelflap/"><BsPinterest /></a>
                            <a href=" https://www.facebook.com/travelflap/"><BsFacebook /></a>
                            <a href="https://www.instagram.com/travelflap/"><BsInstagram /></a>
                            <a href="https://www.behance.net/travelflap"><BsBehance /></a>
                            <a href="https://twitter.com/TravelFlap"><BsTwitter /></a>
                            <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin /></a>
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="footernewHomeSectionbottom">
                    <h6 className="footer-heading">BLOG POSTS</h6>
                    <div className="newHomenewHomeblogs">
                        <div className="blognewHomeImg">
                            <img
                                src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
                                alt=""
                            />
                        </div>
                        <div className="blognewHomeText">
                            <p>Travel with us this year</p>
                            <p className="newHomeblogsecond">Nov 29, 2020</p>
                        </div>
                    </div>
                    <div className="newHomeblogs">
                        <div className="blognewHomeImg">
                            <img
                                src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
                                alt=""
                            />
                        </div>
                        <div className="blognewHomeText">
                            <p>Travel with us this year</p>
                            <p className="newHomeblogsecond">Nov 29, 2020</p>
                        </div>
                    </div>
                    <div className="newHomeblogs">
                        <div className="blognewHomeImg">
                            <img
                                src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
                                alt=""
                            />
                        </div>
                        <div className="blognewHomeText">
                            <p>Travel with us this year</p>
                            <p className="newHomeblogsecond">Nov 29, 2020</p>
                        </div>
                    </div>
                </div>
                <div className="footernewHomeSectionbottom" id="contactdetails">
                    <h6 className="footer-heading">CONTACT INFO</h6>

                    <div className="footerContect">
                        <div className="contecticonsdiv">
                            <IconContext.Provider value={{ color: "white", className: "contecticonsmap" }}><GoLocation /></IconContext.Provider>
                        </div>

                        <p>800 3rd Ave, New York, NY 10022, United States</p>
                    </div>

                    <div className="footerContect">
                        <div className="contecticonsdiv">
                            <IconContext.Provider value={{ className: "contecticonscall" }}><FiPhoneCall /></IconContext.Provider>
                        </div>

                        <div className="contact_number">
                            <p >Mobile India : +918209366227, +917877680588</p>
                            <p>Mobile USA : +19176726964 (WhatsApp)</p>
                            <p>Mobile DXB : +971 58 597 8776</p>
                        </div>
                    </div>
                    <div className="footerContect">
                        <div className="contecticonsdivmail">
                            <IconContext.Provider value={{ className: "contecticonsmail" }}><HiOutlineMailOpen /></IconContext.Provider>
                        </div>

                        <p>Info@travelflap.com</p>
                    </div>
                    <div className="footerContect">
                        <div className="contecticonsdivmap">
                            <IconContext.Provider value={{ className: "contecticonsglobe" }}><FaGlobeAmericas /></IconContext.Provider>
                        </div>

                        <p>www.travelflap.com</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

