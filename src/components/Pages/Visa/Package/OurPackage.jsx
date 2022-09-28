import React from 'react';
import "./OurPackage.css";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';

export const OurPackage = () => {

   const sliderRef = useRef(null);
   useEffect(() => {
       console.log(sliderRef);
   }, []);

    return (
        <>
            <div className="famousdestinationsheadingcontainer" >
                <h2 className="famousdestinationsheading">Our Packages</h2>
                
                <div className='selectcountry'>
                            <select className="form-select famousvisadestinationdropdown" aria-label="Default select example" >
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
                
             <Slider
                    arrows={false}
                      autoplay={true}
                    speed={1000}
                    autoplaySpeed={2000}
                    // dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={5}
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

                     


                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_India_-_Circle-512.png' />
                   <h2>India</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/323/323301.png' />
                   <h2>Dubai</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='data:image/jpeg;base64,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' />
                   <h2>Italy</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/197/197560.png' />
                   <h2>France</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src="https://cdn-icons-png.flaticon.com/512/197/197616.png?w=360"/>
                   <h2>Mauritius</h2>
                  <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_India_-_Circle-512.png' />
                   <h2>India</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/323/323301.png' />
                   <h2>Dubai</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='data:image/jpeg;base64,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' />
                   <h2>Italy</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/197/197560.png' />
                   <h2>France</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src="https://cdn-icons-png.flaticon.com/512/197/197616.png?w=360"/>
                   <h2>Mauritius</h2>
                  <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_India_-_Circle-512.png' />
                   <h2>India</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/323/323301.png' />
                   <h2>Dubai</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='data:image/jpeg;base64,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' />
                   <h2>Italy</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src='https://cdn-icons-png.flaticon.com/512/197/197560.png' />
                   <h2>France</h2>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <img className='packageflagimage' src="https://cdn-icons-png.flaticon.com/512/197/197616.png?w=360"/>
                   <h2>Mauritius</h2>
                  <p>₹ 19,999</p>
                </div>


                {/* <div className='packagecountrydetails'>
                   <h2>India</h2>
                   <img className='packageflagimage' src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Dubai</h2>
                   <img className='packageflagimage' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Italy</h2>
                   <img className='packageflagimage' src='https://cdn.countryflags.com/thumbs/italy/flag-400.png' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>France</h2>
                   <img className='packageflagimage' src='https://flagpictures.imgix.net/fr.png' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Mauritius</h2>
                   <img className='packageflagimage' src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg"/>
                   <h4>Africa</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>India</h2>
                   <img className='packageflagimage' src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Dubai</h2>
                   <img className='packageflagimage' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png' />
                   <h4>Asia</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Italy</h2>
                   <img className='packageflagimage' src='https://cdn.countryflags.com/thumbs/italy/flag-400.png' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>France</h2>
                   <img className='packageflagimage' src='https://flagpictures.imgix.net/fr.png' />
                   <h4>Europe</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div>
                <div className='packagecountrydetails'>
                   <h2>Mauritius</h2>
                   <img className='packageflagimage' src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg"/>
                   <h4>Africa</h4>
                   <button className='packagebutton'>View Details</button>
                   <p>₹ 19,999</p>
                </div> */}

                
                
                
                </Slider >
             </div>
          </div>
        </>
    )
}
