import React from 'react';
import {  useState } from 'react'
import "./VisaDetails.css";
import { HotelNav } from '../../../Pages/Hotels/HotelNavbar/HotelNav';
import {VisadetailsSlider} from './VisadetailsSlider';
import Awards from '../../../Achievements/Awards';
import { Newsletter } from '../../../NewsLetter/NewsLetter';
import OurPartners from '../../../OurPatnersSection/OurPartners';
import { Footer } from '../../../Footer/Footer';
import { FooterLinks } from '../../../FooterLinks/FooterLinks';
import { FaArrowCircleDown } from "react-icons/fa";
import ImageSlider from "../../../MultipleCards/MultiCardSlider";
import { FaInfo,FaMapMarkerAlt,FaClock } from "react-icons/fa";
import UAE1 from "./UAE1.jpg";

export const VisaDetails = () => {

   const [counter, setCounter] = useState(0);

    const increase = () => {
    setCounter(count => count + 1);
  };

    const decrease = () => {
    setCounter(count => count - 1);
  };


    return (
        <>
            <div> <HotelNav/> </div>
            
            <div className='visadetailsbanner'> <img width="100%" height="100%" src={UAE1}/> </div>
            <div className='visadetailscontainer'>
               <div className='visamainheading'>
                   <h1>UAE Visa</h1>
               </div>
                     <div className='visadetailsiconsdiv'>
                        <div className='Visadetailslocation'>
                       <p className='visatypecountryheading'>  <FaMapMarkerAlt className='visadetailscountryicon'/>Country</p>
                            <p className='visadetailscountrytext'>United Arab Emirates</p>
                        </div>
                        <div className='visadetailsprocess'>
                        <p className='visatypecountryheading'> <FaClock className='visadetailscountryicon'/>processing Time</p>
                            <p className='visadetailscountrytext'>5-6 days</p>
                        </div>
                        </div>
                        <div className='Visadescription'>
                        <p className='visatypeheading'><FaInfo className='visadetailsdescicon'/> Description</p>
                            <p className='descriptiontext'>Long stretches of the white-sand beaches, magnificent desert dunes, and the stunning skyscrapers; The United Arab Emirates is quite the beauty. With over 10 million people visiting the city of Dubai, the UAE is one of the world’s top tourist destination. To enter the country, however, you would need a UAE Visa</p>
                        </div>

                 <div className='visadetailsmaindiv'>
                    <div className='visadetailtestdiv'><p>Visa Types</p>
                       <div className='visadetailsvisatypedetails'>
                          <div className='visadetailsinnerdiv'>
                            <div className='visadetailsfliteroptions'>
                           
                            {/* <p>Select Nationality</p> */}
                            <select className='visadetailsnationalityoptions'>
                                <option value>Select Nationality</option>
                                <option value="1">India Visa</option>
                                <option value="2">UAE Visa</option>
                                <option value="3">Pakistan Visa</option>
                                <option value="4">France Visa</option>
                                <option value="5">Spain Visa</option>
                                <option value="6">Turkey Visa</option>
                                <option value="7">Italy Visa</option>
                                <option value="8">Thailand Visa</option>
                                <option value="9">Mexico Visa</option>
                                <option value="10">Germany Visa</option>
                                <option value="11">United Kingdom Visa</option>
                                <option value="12">China Visa</option>
                                <option value="13">Korea Visa</option>
                            </select>
            
                            {/* <p>Select country of living</p> */}
                            <select className='visadetailsnationalityoptions'>
                                <option value>Select Residency</option>
                                <option value="1">India Visa</option>
                                <option value="2">UAE Visa</option>
                                <option value="3">Pakistan Visa</option>
                                <option value="4">France Visa</option>
                                <option value="5">Spain Visa</option>
                                <option value="6">Turkey Visa</option>
                                <option value="7">Italy Visa</option>
                                <option value="8">Thailand Visa</option>
                                <option value="9">Mexico Visa</option>
                                <option value="10">Germany Visa</option>
                                <option value="11">United Kingdom Visa</option>
                                <option value="12">China Visa</option>
                                <option value="13">Korea Visa</option>
                            </select>
                        
                            </div>

                            <div className='visadetailsofvisas'>
                               <div className='visadetailsvisaheadings'>
                                   96 Hours Transit Visa
                               </div>
                               <div className='visadetailscounter'>
                                   <p className='visadetailscounterheading'>Add Travellers</p>
                                   <div className='visadetailscounterdata'>
                                   <div className="addbutton" onClick={increase}>
                                     +
                                    </div>
                                    <p className='countertext'> {counter} </p>
                                    <div className="subtractbutton" onClick={decrease}>
                                     -
                                    </div>
                                    </div>
                               </div>
                               <div className='visadetailspricesummary'>
                                   <h4>INR 14,449/- </h4>
                                  <button className='visadetailsaddcartbutton'>Add to Cart</button>
                               </div>
                            </div>
                            <div className='visadetailsofvisas'>
                               <div className='visadetailsvisaheadings'>
                                   96 Hours Transit Visa
                               </div>
                               <div className='visadetailscounter'>
                                   <p className='visadetailscounterheading'>Add Travellers</p>
                                   <div className='visadetailscounterdata'>
                                   <div className="addbutton" onClick={increase}>
                                     +
                                    </div>
                                    <p className='countertext'> {counter} </p>
                                    <div className="subtractbutton" onClick={decrease}>
                                     -
                                    </div>
                                    </div>
                               </div>
                               <div className='visadetailspricesummary'>
                                   <h4>INR 14,449/- </h4>
                                  <button className='visadetailsaddcartbutton'>Add to Cart</button>
                               </div>
                            </div>
                            <div className='visadetailsofvisas'>
                               <div className='visadetailsvisaheadings'>
                                   96 Hours Transit Visa
                               </div>
                               <div className='visadetailscounter'>
                                   <p className='visadetailscounterheading'>Add Travellers</p>
                                   <div className='visadetailscounterdata'>
                                   <div className="addbutton" onClick={increase}>
                                     +
                                    </div>
                                    <p className='countertext'> {counter} </p>
                                    <div className="subtractbutton" onClick={decrease}>
                                     -
                                    </div>
                                    </div>
                               </div>
                               <div className='visadetailspricesummary'>
                                   <h4>INR 14,449/- </h4>
                                  <button className='visadetailsaddcartbutton'>Add to Cart</button>
                               </div>
                            </div>
                            <div className='visadetailsofvisas'>
                               <div className='visadetailsvisaheadings'>
                                   96 Hours Transit Visa
                               </div>
                               <div className='visadetailscounter'>
                                   <p className='visadetailscounterheading'>Add Travellers</p>
                                   <div className='visadetailscounterdata'>
                                   <div className="addbutton" onClick={increase}>
                                     +
                                    </div>
                                    <p className='countertext'> {counter} </p>
                                    <div className="subtractbutton" onClick={decrease}>
                                     -
                                    </div>
                                    </div>
                               </div>
                               <div className='visadetailspricesummary'>
                                   <h4>INR 14,449/- </h4>
                                  <button className='visadetailsaddcartbutton'>Add to Cart</button>
                               </div>
                            </div>
                          </div>
                       </div>
                       
                    </div>

                   
                   <div className='visadetailsimage'>
                      <img width="80%" height="80%" className='visadetailsflagimagge' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png'/>
                    </div>
                 </div>
                 
                        {/* <div className='Visadescription' >
                        <p className='visatypeheading'>Description</p>
                            <p className='descriptiontext'>Long stretches of the white-sand beaches, magnificent desert dunes, and the stunning skyscrapers; The United Arab Emirates is quite the beauty. With over 10 million people visiting the city of Dubai, the UAE is one of the world’s top tourist destination. To enter the country, however, you would need a UAE Visa</p>
                        </div> */}
                        <div className='Visadocuments'>
                            <p className='visatypedocheading'>Required Documents</p>
                            <ul>
                                <li className='visadetailslists'>Passport</li>
                                <li className='visadetailslists'>Completed Application Form</li>
                                <li className='visadetailslists'>Valid Identity Proof</li>
                                <li className='visadetailslists'>Recent Passport Size Photograph</li>
                            </ul>
                        </div>
                        <div className='Visaduration'>
                        <p className='visatypedocheading'>UAE Visa Application Steps</p>
                        <ul>
                        <li className='visadetailslists'>Gather all the required documents.</li>
                        <li className='visadetailslists'>Make JPEG copies of the documents.</li>
                        <li className='visadetailslists'>Send all the documents to the airline, hotel or tour agency sponsoring your visa to the UAE.</li>
                        <li className='visadetailslists'>Fill out the application form.</li>
                        {/* <li className='visadetailslists'>Alternatively, the sponsor may also fill out the application form for you. Provide them the information 
                        needed and confirm that everything on the application form is correct.</li> */}
                        <li className='visadetailslists'>Pay the visa application fee.</li>
                        <li className='visadetailslists'>Submit your UAE visa application.</li>
                        <li className='visadetailslists'>The sponsor may submit the application online on your behalf.</li>
                        <li className='visadetailslists'>Once the visa is approved, your sponsor will send you a copy which needs to be printed out.</li>
                         </ul>
                        </div>
                        <div className='Visadocuments'>
                            <p className='visatypedocheading'>Frequently Asked Questions</p>
                            
                                <div className="flightfaq">
                                <div className='questions'>Q1. What is an e-Visa and it mandatory for me to have it for my India visit?</div>
                                <div className='answers'>
                                    Ans. An e-Visa simply represents an electronic visa that is issued to foreigners 
                                    planning to visit India mostly for tourism purpose. If you are not qualified for any 
                                    kind of visa exemptions, it is mandatory have a passport and a valid e-Visa to enter India.
                                </div>
                                </div>
                                <div className="flightfaq">
                                <div className='questions'>Q2. Does Blueberry Travel provide India visa services for foreigners from all over the world?</div>
                                <div className='answers'>
                                    Ans.Yes, we help nationalities from all over the world to obtain an India e-Visa.
                                </div>
                                </div>
                                <div className="flightfaq">
                                <div className='questions'>Q3. What makes Blueberry Travel the number one choice for India visa services?</div>
                                <div className='answers'>
                                   Ans. Whether you are traveling to India for business or tourism purpose, Blueberry Travel offers the most reliable and value packed India e-Visa services. Our dedicated team of visa specialists is well aware of all visa requirements and procedures means they will take care of every minute aspect of your visa approval. In fact, you don't have to stand in long queue or worry about missing any key aspect of your visa processing.
                                </div>
                                </div>
                                <div className="flightfaq">
                                <div className='questions'>Q4. Should I submit any document for the application of an India visa?</div>
                                <div className='answers'>
                                    Ans. You will be asked to submit the following for the prompt approval of your visa.
                                        - Duly filled out India visa application form
                                        - Passport with a validity of at least six months
                                        - Recent color passport-size photo taken against white background
                                        - Visa fee as specified by the embassy
                                </div>
                                </div>
                                <div className="flightfaq">
                                <div className='questions'>Q5. Do kids require a visa to visit India?</div>
                                <div className='answers'>
                                    Ans. Yes, kids of all age groups will need a valid visa to enter India.
                                </div>
                                </div>
                                <div className="flightfaq">
                                <div className='questions'>Q6.Once my visa application is submitted, how many days will it take for the visa processing?</div>
                                <div className='answers'>
                                    Ans.The processing time of an India visa is two to three working days.
                                </div>
                                </div>
                                <div className="flightfaq">
                                <div className='questions'>Q7. What is the validity of an Indian E-Visa?</div>
                                <div className='answers'>
                                    Ans.An Indian E-Visa is valid for fully 30 days.
                                </div>
                                </div>
                                <div className="flightfaq">
                                <div className='questions'>Q8. Can I extend my India visa?</div>
                                <div className='answers'>
                                    Ans.No; it is not possible to extend an India visa.
                                </div>
                                </div>
                                <div className="flightfaq">
                                <div className='questions'>Q9. Is visa fee refundable if my visa application is rejected?</div>
                                <div className='answers'>
                                    Ans. No matter you cancel your visa or it is rejected, an India e-Visa is non-refundable once it is submitted to the Embassy.
                                </div>
                                </div>
                            
                        </div>
                 <div className='visadetailsform'>
              <h1>Apply Now!!</h1>
              <input type="text" placeholder='Email ID' className='visadetailforminputs'/> <br/>
              <input type="text" placeholder='Contact Number' className='visadetailforminputs'/><br/>
              <input type="text" placeholder='Visa Type' className='visadetailforminputs'/><br/>
              <input type="text" placeholder='Travellers' className='visadetailforminputs'/><br/>
              <button className='visadetailsapplybutton'>Apply</button>
           </div>
                 {/* <div className='visadetailsslider1'>
                    <p>Must Visit Destination</p>
                    <VisadetailsSlider/>
                 </div> */}
                 {/* <div className='visadetailsslider2'>
                    <p>Most Popular in UAE</p>
                    <VisadetailsSlider/>
                 </div> */}
           
            </div>
           
           
            {/* <div className="carousel">
            <h1 className="achievements_title">Achievement and Awards</h1>
            <Awards />
      </div> */}
      <div className="carousel">
                <h1 className="clientstestimonial_title" style={{marginTop:"95%"}}>What our Clients say about us</h1>
                <ImageSlider />
      </div>
      <div className='carousel'>
                <h1 className='partners_title'>Our Partners</h1>
                <OurPartners />
            </div>
      <Newsletter />
      <FooterLinks />
      <Footer />
        </>
    )
}
