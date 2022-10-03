import React from "react";
import './FamousDestinations.css';
import { Component } from 'react';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";

export const FamousDestinations = () => {
   
   const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

  
   
   return (
      <>
             <div className="famousdestinationsheadingcontainer" >
                <h2 className="famousdestinationsheading">Top Demanded Visas</h2>
                
                <div className='selectcountry'>
                            <select className="form-select famousvisadestinationdropdown" aria-label="Default select example">
                                <option value>Country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                 <option value="Aland Islands">Aland Islands</option>
                                 <option value="Albania">Albania</option>
                                 <option value="Algeria">Algeria</option>
                                 <option value="American Samoa">American Samoa</option>
                                 <option value="Andorra">Andorra</option>
                                 <option value="Angola">Angola</option>
                                 <option value="Anguilla">Anguilla</option>
                                 <option value="Antarctica">Antarctica</option>
                                 <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                 <option value="Argentina">Argentina</option>
                                 <option value="Armenia">Armenia</option>
                                 <option value="Aruba">Aruba</option>
                                 <option value="Australia">Australia</option>
                                 <option value="Austria">Austria</option>
                                 <option value="Azerbaijan">Azerbaijan</option>
                                 <option value="Bahamas">Bahamas</option>
                                 <option value="Bahrain">Bahrain</option>
                                 <option value="Bangladesh">Bangladesh</option>
                                 <option value="Barbados">Barbados</option>
                                 <option value="Belarus">Belarus</option>
                                 <option value="Belgium">Belgium</option>
                                 <option value="Belize">Belize</option>
                                 <option value="Benin">Benin</option>
                                 <option value="Bermuda">Bermuda</option>
                                 <option value="Bhutan">Bhutan</option>
                                 <option value="Bolivia">Bolivia</option>
                                 <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                 <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                 <option value="Botswana">Botswana</option>
                                 <option value="Bouvet Island">Bouvet Island</option>
                                 <option value="Brazil">Brazil</option>
                                 <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                 <option value="Brunei Darussalam">Brunei Darussalam</option>
                                 <option value="Bulgaria">Bulgaria</option>
                                 <option value="Burkina Faso">Burkina Faso</option>
                                 <option value="Burundi">Burundi</option>
                                 <option value="Cambodia">Cambodia</option>
                                 <option value="Cameroon">Cameroon</option>
                                 <option value="Canada">Canada</option>
                                 <option value="Cape Verde">Cape Verde</option>
                                 <option value="Cayman Islands">Cayman Islands</option>
                                 <option value="Central African Republic">Central African Republic</option>
                                 <option value="Chad">Chad</option>
                                 <option value="Chile">Chile</option>
                                 <option value="China">China</option>
                                 <option value="Christmas Island">Christmas Island</option>
                                 <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                 <option value="Colombia">Colombia</option>
                                 <option value="Comoros">Comoros</option>
                                 <option value="Congo">Congo</option>
                                 <option value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</option>
                                 <option value="Cook Islands">Cook Islands</option>
                                 <option value="Costa Rica">Costa Rica</option>
                                 <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                                 <option value="Croatia">Croatia</option>
                                 <option value="Cuba">Cuba</option>
                                 <option value="Curacao">Curacao</option>
                                 <option value="Cyprus">Cyprus</option>
                                 <option value="Czech Republic">Czech Republic</option>
                                 <option value="Denmark">Denmark</option>
                                 <option value="Djibouti">Djibouti</option>
                                 <option value="Dominica">Dominica</option>
                                 <option value="Dominican Republic">Dominican Republic</option>
                                 <option value="Ecuador">Ecuador</option>
                                 <option value="Egypt">Egypt</option>
                                 <option value="El Salvador">El Salvador</option>
                                 <option value="Equatorial Guinea">Equatorial Guinea</option>
                                 <option value="Eritrea">Eritrea</option>
                                 <option value="Estonia">Estonia</option>
                                 <option value="Ethiopia">Ethiopia</option>
                                 <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                 <option value="Faroe Islands">Faroe Islands</option>
                                 <option value="Fiji">Fiji</option>
                                 <option value="Finland">Finland</option>
                                 <option value="France">France</option>
                                 <option value="French Guiana">French Guiana</option>
                                 <option value="French Polynesia">French Polynesia</option>
                                 <option value="French Southern Territories">French Southern Territories</option>
                                 <option value="Gabon">Gabon</option>
                                 <option value="Gambia">Gambia</option>
                                 <option value="Georgia">Georgia</option>
                                 <option value="Germany">Germany</option>
                                 <option value="Ghana">Ghana</option>
                                 <option value="Gibraltar">Gibraltar</option>
                                 <option value="Greece">Greece</option>
                                 <option value="Greenland">Greenland</option>
                                 <option value="Grenada">Grenada</option>
                                 <option value="Guadeloupe">Guadeloupe</option>
                                 <option value="Guam">Guam</option>
                                 <option value="Guatemala">Guatemala</option>
                                 <option value="Guernsey">Guernsey</option>
                                 <option value="Guinea">Guinea</option>
                                 <option value="Guinea-Bissau">Guinea-Bissau</option>
                                 <option value="Guyana">Guyana</option>
                                 <option value="Haiti">Haiti</option>
                                 <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                 <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                 <option value="Honduras">Honduras</option>
                                 <option value="Hong Kong">Hong Kong</option>
                                 <option value="Hungary">Hungary</option>
                                 <option value="Iceland">Iceland</option>
                                 <option value="India">India</option>
                                 <option value="Indonesia">Indonesia</option>
                                 <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                 <option value="Iraq">Iraq</option>
                                 <option value="Ireland">Ireland</option>
                                 <option value="Isle of Man">Isle of Man</option>
                                 <option value="Israel">Israel</option>
                                 <option value="Italy">Italy</option>
                                 <option value="Jamaica">Jamaica</option>
                                 <option value="Japan">Japan</option>
                                 <option value="Jersey">Jersey</option>
                                 <option value="Jordan">Jordan</option>
                                 <option value="Kazakhstan">Kazakhstan</option>
                                 <option value="Kenya">Kenya</option>
                                 <option value="Kiribati">Kiribati</option>
                                 <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                 <option value="Korea, Republic of">Korea, Republic of</option>
                                 <option value="Kosovo">Kosovo</option>
                                 <option value="Kuwait">Kuwait</option>
                                 <option value="Kyrgyzstan">Kyrgyzstan</option>
                                 <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                 <option value="Latvia">Latvia</option>
                                 <option value="Lebanon">Lebanon</option>
                                 <option value="Lesotho">Lesotho</option>
                                 <option value="Liberia">Liberia</option>
                                 <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                 <option value="Liechtenstein">Liechtenstein</option>
                                 <option value="Lithuania">Lithuania</option>
                                 <option value="Luxembourg">Luxembourg</option>
                                 <option value="Macao">Macao</option>
                                 <option value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of</option>
                                 <option value="Madagascar">Madagascar</option>
                                 <option value="Malawi">Malawi</option>
                                 <option value="Malaysia">Malaysia</option>
                                 <option value="Maldives">Maldives</option>
                                 <option value="Mali">Mali</option>
                                 <option value="Malta">Malta</option>
                                 <option value="Marshall Islands">Marshall Islands</option>
                                 <option value="Martinique">Martinique</option>
                                 <option value="Mauritania">Mauritania</option>
                                 <option value="Mauritius">Mauritius</option>
                                 <option value="Mayotte">Mayotte</option>
                                 <option value="Mexico">Mexico</option>
                                 <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                 <option value="Moldova, Republic of">Moldova, Republic of</option>
                                 <option value="Monaco">Monaco</option>
                                 <option value="Mongolia">Mongolia</option>
                                 <option value="Montenegro">Montenegro</option>
                                 <option value="Montserrat">Montserrat</option>
                                 <option value="Morocco">Morocco</option>
                                 <option value="Mozambique">Mozambique</option>
                                 <option value="Myanmar">Myanmar</option>
                                 <option value="Namibia">Namibia</option>
                                 <option value="Nauru">Nauru</option>
                                 <option value="Nepal">Nepal</option>
                                 <option value="Netherlands">Netherlands</option>
                                 <option value="Netherlands Antilles">Netherlands Antilles</option>
                                 <option value="New Caledonia">New Caledonia</option>
                                 <option value="New Zealand">New Zealand</option>
                                 <option value="Nicaragua">Nicaragua</option>
                                 <option value="Niger">Niger</option>
                                 <option value="Nigeria">Nigeria</option>
                                 <option value="Niue">Niue</option>
                                 <option value="Norfolk Island">Norfolk Island</option>
                                 <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                 <option value="Norway">Norway</option>
                                 <option value="Oman">Oman</option>
                                 <option value="Pakistan">Pakistan</option>
                                 <option value="Palau">Palau</option>
                                 <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                 <option value="Panama">Panama</option>
                                 <option value="Papua New Guinea">Papua New Guinea</option>
                                 <option value="Paraguay">Paraguay</option>
                                 <option value="Peru">Peru</option>
                                 <option value="Philippines">Philippines</option>
                                 <option value="Pitcairn">Pitcairn</option>
                                 <option value="Poland">Poland</option>
                                 <option value="Portugal">Portugal</option>
                                 <option value="Puerto Rico">Puerto Rico</option>
                                 <option value="Qatar">Qatar</option>
                                 <option value="Reunion">Reunion</option>
                                 <option value="Romania">Romania</option>
                                 <option value="Russian Federation">Russian Federation</option>
                                 <option value="Rwanda">Rwanda</option>
                                 <option value="Saint Barthelemy">Saint Barthelemy</option>
                                 <option value="Saint Helena">Saint Helena</option>
                                 <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                 <option value="Saint Lucia">Saint Lucia</option>
                                 <option value="Saint Martin">Saint Martin</option>
                                 <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                 <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                 <option value="Samoa">Samoa</option>
                                 <option value="San Marino">San Marino</option>
                                 <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                 <option value="Saudi Arabia">Saudi Arabia</option>
                                 <option value="Senegal">Senegal</option>
                                 <option value="Serbia">Serbia</option>
                                 <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                 <option value="Seychelles">Seychelles</option>
                                 <option value="Sierra Leone">Sierra Leone</option>
                                 <option value="Singapore">Singapore</option>
                                 <option value="Sint Maarten">Sint Maarten</option>
                                 <option value="Slovakia">Slovakia</option>
                                 <option value="Slovenia">Slovenia</option>
                                 <option value="Solomon Islands">Solomon Islands</option>
                                 <option value="Somalia">Somalia</option>
                                 <option value="South Africa">South Africa</option>
                                 <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                 <option value="South Sudan">South Sudan</option>
                                 <option value="Spain">Spain</option>
                                 <option value="Sri Lanka">Sri Lanka</option>
                                 <option value="Sudan">Sudan</option>
                                 <option value="Suriname">Suriname</option>
                                 <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                 <option value="Swaziland">Swaziland</option>
                                 <option value="Sweden">Sweden</option>
                                 <option value="Switzerland">Switzerland</option>
                                 <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                 <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                 <option value="Tajikistan">Tajikistan</option>
                                 <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                 <option value="Thailand">Thailand</option>
                                 <option value="Timor-Leste">Timor-Leste</option>
                                 <option value="Togo">Togo</option>
                                 <option value="Tokelau">Tokelau</option>
                                 <option value="Tonga">Tonga</option>
                                 <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                 <option value="Tunisia">Tunisia</option>
                                 <option value="Turkey">Turkey</option>
                                 <option value="Turkmenistan">Turkmenistan</option>
                                 <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                 <option value="Tuvalu">Tuvalu</option>
                                 <option value="Uganda">Uganda</option>
                                 <option value="Ukraine">Ukraine</option>
                                 <option value="United Arab Emirates">United Arab Emirates</option>
                                 <option value="United Kingdom">United Kingdom</option>
                                 <option value="United States">United States</option>
                                 <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                 <option value="Uruguay">Uruguay</option>
                                 <option value="Uzbekistan">Uzbekistan</option>
                                 <option value="Vanuatu">Vanuatu</option>
                                 <option value="Venezuela">Venezuela</option>
                                 <option value="Viet Nam">Viet Nam</option>
                                 <option value="Virgin Islands, British">Virgin Islands, British</option>
                                 <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
                                 <option value="Wallis and Futuna">Wallis and Futuna</option>
                                 <option value="Western Sahara">Western Sahara</option>
                                 <option value="Yemen">Yemen</option>
                                 <option value="Zambia">Zambia</option>
                                 <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>
                 <div className="famousdestinationviewalltext">
                  View all Deals
                 </div>
                <div className="famousdestinationssliderbuttons" >
                    
                    <div className="famousdestinationsbuttons">
                        <div style={{ display: "flex" }}>
                            <FaAngleLeft size={"2.5em"}
                            onClick={() => sliderRef.current.slickPrev()}
                            />
                            
                            <FaAngleRight size={"2.5em"}
                               onClick={() => sliderRef.current.slickNext()}
                           />
                        </div>
                    </div>

                </div>
            </div>
            <div className='data'>
            {/* <div className="famousdestinationsheading">Top Demanded Visas</div> */}
               <div className="famousdestinationscardmaindiv">
{/* 
               <div className="bestbudgetslidercontainer"> */}
                <Slider
                    arrows={false}
                      autoplay={true}
                    speed={1000}
                    autoplaySpeed={2000}
                    // dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={4}
                    slidesToScroll={2}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 950,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                infinite: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                initialSlide: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]}
                    customPaging={(i) => (
                        <div
                            style={{
                                // position: "absolute",
                                width: "100%",
                                top: "-10px",
                                opacity: 0,
                            }}
                        >
                            {i}
                        </div>
                    )}
                >

                  {/* <Slider  className="multiCardSlider"> */}
                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'>
                              <img src='https://lh3.googleusercontent.com/cC6_lOzZ9R9sfxxJosTORlW8GjW5bKxiHMeo_8LIVH3_gfStKc9ocqbjpcwaJZY8Cm6e-feRKwArtF8fK6sILmTg3KQdd01U3vLITByXCtYDEHe0HTG3-5DdYes' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title">Paris</h4>
                              </div>
                              {/* <div className='awards_desc'>
                                    <p className="card-text">In more than 9 countries.</p>
                                </div> */}
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2020/08/2-RENAME-THIS-SEQUENCE-Copy-01.00_02_10_17.Still002.jpg?resize=1200%2C800&quality=85&strip=all&zoom=1&ssl=1' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Turkey</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In more than 3 countries.</p>
                           </div> */}
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_650,q_auto,w_576/v1/filestore/mv8lii5npb2sujxt08nke8voknys_1582311630_1508222873_burj-khalifa.jpg.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Dubai</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In Kinshasa,RDC.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://img.freepik.com/free-photo/beautiful-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-851.jpg?w=1060&t=st=1664191398~exp=1664191998~hmac=878a5f832e2ccf6c9717d2fa8e1b9c335ccb9f4e06c168af8a211835492281c9' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Thailand</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In Bangui Car.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://honeymoongoals.com/wp-content/uploads/2021/06/overwater-bungalows-not-maldives.jpeg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Maldives</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">From Rwanda Arilines in 2017.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://i.pinimg.com/originals/37/b3/ad/37b3ad883bf891dd165304d04cae8a88.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Switzerland</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In Madagascar from amadues 2018.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://i.pinimg.com/originals/22/40/f5/2240f57c3e5473d544f1ec73d5eb4aea.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="margin-top: 2.5%;-title ">Mauritius</h4>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://www.tripsavvy.com/thmb/eylx9Qked6-p8_WEC7c1tIg-O28=/2992x2992/smart/filters:no_upscale()/aerial-view-of-sigiriya-rock-at-misty-morning--sri-lanka--drone-photo--1129567907-a6628ce7d636462f9a0e0361a3808178.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Srilanka</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Namibia(2017).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://assets.traveltriangle.com/blog/wp-content/uploads/2018/08/big-ben.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body mainfamousdestinationscardwrapper">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">UK</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://theconstructor.org/wp-content/uploads/2020/08/italy-rome-colosseum-visiting-highlights-tips-tours.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">Italy</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>
                     <div className="card-wrapper mainfamousdestinationscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="famousdestinationscard">
                           <div className='famousdestinationscard_img'><img src='https://i.pinimg.com/originals/e9/16/1d/e9161dc16cbc4c3b1678dbcd4d73eef8.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top" alt="..." /></div>

                           <div className="card-body mainfamousdestinationscardwrapper">
                              <div className='famousdestinations_title'>
                                 <h4 className="famousdestinationscard-title ">United States</h4>
                              </div>
               
                           </div>
                        </div>
                       
                     </div>
                  </Slider >
               </div>

      



            </div>
        
      </>
   );
}

// export default International;
