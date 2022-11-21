import "./ContactUSForm.css";
import { FaPhoneAlt,FaMailBulk,FaSearchLocation } from "react-icons/fa";
import React from 'react';
import { BsFacebook, BsPinterest, BsTwitter, BsInstagram, BsBehance, BsLinkedin, BsWhatsapp, } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IconContext } from "react-icons";

export const ContactUSForm = () => {
  return (
    <>
      <div className="contactUSFormMainDiv">
        <div className="contactUSFormcontainerdiv">
          
          <div class="contactInformation">
            <img className="contactInformationBackground" src="Images/NewHomeLayout/ContactPage/rectangle.png" alt='banner image'/>
            <div class="contactInformationDetails">

              <div className="contactInformationDetailsheading">
              <h3>Contact Information</h3>
              <p>Say Something to Start a live Chat !</p>
              </div>

              <div className="contactInformationsocial">

                <div className="contactInformationsocial1">
                  <div className="contactInformationsocial1Icon">
                     <FaPhoneAlt/>
                  </div>
                  <div className="contactInformationsocial1Text">+54854965645</div>
                </div>

                <div className="contactInformationsocial2">
                  <div className="contactInformationsocial1Icon">
                     <FaMailBulk/>
                  </div>
                  <div className="contactInformationsocial1Text">Info@tarvelflap.com</div>
                </div>

                <div className="contactInformationsocial3">
                  <div className="contactInformationsocial1Icon">
                     <FaSearchLocation/>
                  </div>
                  <div className="contactInformationsocial1Text"> Jtm Mall, Office no 422, 4th floor, Jagatpura, Jaipur, Rajasthan 302025</div>
                </div>
              </div>

              <div className="contactIconsSocialMedia"> 
                    <div className="contactfootersocialmedia1">
                        <a href="https://www.pinterest.com/travelflap/"><BsPinterest style={{color:"white"}} size={"1.5em"}/></a>
                        <a href=" https://www.facebook.com/travelflap/"><BsFacebook style={{color:"white"}} size={"1.5em"}/></a>
                        <a href="https://www.instagram.com/travelflap/"><BsInstagram style={{color:"white"}} size={"1.5em"}/></a>
                        <a href="https://www.behance.net/travelflap"><BsBehance style={{color:"white"}} size={"1.5em"}/></a>
                        <a href="https://twitter.com/TravelFlap"><BsTwitter style={{color:"white"}} size={"1.5em"}/></a>
                        <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin style={{color:"white"}} size={"1.5em"}/></a>
                    </div>
              </div>
            </div>
          </div>

          <div className="contactFormMaindiv">

            <div className="contactformDiv1">
              <input type="text" placeholder="First Name" className="contactFirstName"/>
              <input type="text" placeholder="Last Name" className="contactLastName"/>
            </div>

            <div className="contactformDiv1">
              <input type="text" placeholder="Email" className="contactFirstName"/>
              <input type="text" placeholder="Phone Number" className="contactLastName"/>
            </div>


            <div className="contactformDiv2">
              <p>Enter Message</p>
              <textarea placeholder="Type Your Message" className="textareamsg"/>
            </div>



            <div className="submitcontact">
              Send Message
            </div>

            <div className="planeimage">
              <img src="Images/NewHomeLayout/ContactPage/aeroplane.png"/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
