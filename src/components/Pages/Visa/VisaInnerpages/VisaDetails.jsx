import React from 'react';
import {  useState } from 'react';
import { ControlledCarousel } from "../../../TopCorousel/Corousel";
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
// import UAE1 from "./UAE1.jpg";
import {VisaCarousel} from "./VisaCarousel/VisaCarousel";

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
            
            <div className='visadetailsbanner'> <VisaCarousel/> </div>
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
                        <p className='visatypecountryheading'> <FaClock className='visadetailscountryicon'/>Processing Time</p>
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
                            
                            {/* <p>Select country of living</p> */}
                            <select className='visadetailsnationalityoptions'>
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
                            
                                <div className="visafaq">
                                <div className='questions'>Q1. What is an e-Visa and it mandatory for me to have it for my India visit?</div>
                                <div className='answers'>
                                    Ans. An e-Visa simply represents an electronic visa that is issued to foreigners 
                                    planning to visit India mostly for tourism purpose. If you are not qualified for any 
                                    kind of visa exemptions, it is mandatory have a passport and a valid e-Visa to enter India.
                                </div>
                                </div>
                                <div className="visafaq">
                                <div className='questions'>Q2. Does Blueberry Travel provide India visa services for foreigners from all over the world?</div>
                                <div className='answers'>
                                    Ans.Yes, we help nationalities from all over the world to obtain an India e-Visa.
                                </div>
                                </div>
                                <div className="visafaq">
                                <div className='questions'>Q3. What makes Blueberry Travel the number one choice for India visa services?</div>
                                <div className='answers'>
                                   Ans. Whether you are traveling to India for business or tourism purpose, Blueberry Travel offers the most reliable and value packed India e-Visa services. Our dedicated team of visa specialists is well aware of all visa requirements and procedures means they will take care of every minute aspect of your visa approval. In fact, you don't have to stand in long queue or worry about missing any key aspect of your visa processing.
                                </div>
                                </div>
                                <div className="visafaq">
                                <div className='questions'>Q4. Should I submit any document for the application of an India visa?</div>
                                <div className='answers'>
                                    Ans. You will be asked to submit the following for the prompt approval of your visa.
                                        - Duly filled out India visa application form
                                        - Passport with a validity of at least six months
                                        - Recent color passport-size photo taken against white background
                                        - Visa fee as specified by the embassy
                                </div>
                                </div>
                                <div className="visafaq">
                                <div className='questions'>Q5. Do kids require a visa to visit India?</div>
                                <div className='answers'>
                                    Ans. Yes, kids of all age groups will need a valid visa to enter India.
                                </div>
                                </div>
                                <div className="visafaq">
                                <div className='questions'>Q6.Once my visa application is submitted, how many days will it take for the visa processing?</div>
                                <div className='answers'>
                                    Ans.The processing time of an India visa is two to three working days.
                                </div>
                                </div>
                                <div className="visafaq">
                                <div className='questions'>Q7. What is the validity of an Indian E-Visa?</div>
                                <div className='answers'>
                                    Ans.An Indian E-Visa is valid for fully 30 days.
                                </div>
                                </div>
                                <div className="visafaq">
                                <div className='questions'>Q8. Can I extend my India visa?</div>
                                <div className='answers'>
                                    Ans.No; it is not possible to extend an India visa.
                                </div>
                                </div>
                                <div className="visafaq">
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
