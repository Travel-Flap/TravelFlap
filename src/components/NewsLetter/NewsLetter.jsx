import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import './NewsLetter.css';

// import { FlagApp } from './NewsletterForm';
// import newsletter from "images/travelFlapLogo.jpg";
export const Newsletter = () => {
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountryState({
          ...countryState,
          loading: true,
        });

        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry Something went wrong",
        });
      }
    };

    fetchData();
  }, []);
  const { loading, errorMessage, countries } = countryState;
  console.log("loading", loading);
  console.log("countries", countries);
  console.log("errorMessage", errorMessage);

  const [selectedCountry, setSelectedCountry] = useState();
  console.log("selectedCountry", selectedCountry);

  //   find selected country data
  //search selected country
  const searchSelectedCountry = countries.find((obj) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });
  console.log("searchSelectedCountry", searchSelectedCountry);
  return (
    <>

      <div className='newsLetterMainBox'>
        <div className='newsletterimagediv'>
          {/* <div className='newsletterimage'>/ */}
          {/* <img src="images/Newsletter/newsletter.png" /> */}
          <img src='https://cdn.pixabay.com/photo/2014/11/14/03/38/news-530220__340.jpg' alt='newslettterimage' />
          {/* </div> */}
        </div>

        <div className='newslettercontentdiv'>
          <div className='newslettercontentinnerdiv1'>
            <div className='newslettercontentinnerdiv1textdiv'>
              <h2>Our app takes your further</h2>
              <p>When you book on the app you can save even more — up to 25% on select hotels while earning double the points with
                every booking. With these app deals you'll save even more on trips, and that means you can take more trips,
                and manage it all on the go.</p>
            </div>

            <div className='newsletterinputboxcontainer'>
              <h4>Get download link on your phone for easy access</h4>

              {/* <FlagApp/> */}

              {/* This section is for choosing the country code and the putting phone number   */}
              {/* <section> */}
              <div className="inputcontentmaincontainer  w-auto h-96  sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
                {/* header section */}
                {/* <div className="h-32 flex justify-center items-center shadow">
                    <p className="uppercase font-bold text-3xl text-center">
                      Select Country 
                    </p>
                  </div> */}

                {/* body section */}
                <div>
                  {loading === true ?
                    <div className=" loadingtext flex justify-center items-center h-48">
                      <p className="uppercase font-bold text-3xl">...loading</p>
                    </div> :

                    <div className="flex justify-center mt-14 mx-10 space-y-10">

                      <div className="newsletterselectdrop">
                        <select
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className=" w-96 h-14 text-xl rounded-lg md:text-2xl "
                        >
                          <option>  Select Country  </option>
                          {countries.map((item) => {
                            return (
                              <option key={uuidv4()} value={item.name.common}>
                                {item.name.common}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        {searchSelectedCountry && (
                          <div className="imageandcontent flex space-x-4">
                            <div className="flagandcode items-end border-b-2 border-gray-500 pb-2">
                              <img
                                className=""
                                src={
                                  searchSelectedCountry &&
                                  searchSelectedCountry.flags.png
                                }
                                alt=""
                              />

                            </div>
                            {/* <div>
                                <p className="h-14 text-xl flex items-end border-b-2 border-gray-500 pb-3 md:text-2xl">
                                  {searchSelectedCountry &&
                                    searchSelectedCountry.idd.root}
                                  {searchSelectedCountry &&
                                    searchSelectedCountry.idd.suffixes}
                                </p>
                              </div> */}
                            <div className="newsletterinputcontainer">
                              <div className="newsletterinputinnerdiv">
                                <p className="h-14 text-xl flex items-end border-b-2 border-gray-500 pb-3 md:text-2xl">
                                  {searchSelectedCountry &&
                                    searchSelectedCountry.idd.root}
                                  {searchSelectedCountry &&
                                    searchSelectedCountry.idd.suffixes}
                                </p>

                                <input
                                  type="tel"
                                  placeholder="Phone"
                                  style={{ border: "none", color: "#3380f2" }}
                                // className="w-full h-14 text-xl border-b-2 border-t-0 border-l-0 border-r-0 focus:ring-white focus:border-b-2 focus:outline-none md:text-2xl"
                                />
                              </div>

                              <div className="newsletterbuttondiv">
                                <button type="button" class="btn btn-primary">Get the App</button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  }
                </div>
              </div>
              {/* </section> */}
            </div>
          </div>



          <div className='newslettercontentinnerdiv2'>
            <div className="scannermaindiv">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt="qr code image" />

              <p>Scan the QR code</p>
            </div>

            <div className="androidandisoimagesdiv">
              <div className='downloadButtons'>
                <div className='googleButtons'>
                  <div className='googelPlaybutton'>
                    <img src='https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png' />
                  </div>
                  <div className='appStoreButton'>
                    <img src='https://texttofloss.com/wp-content/uploads/2021/01/App-Store-Button-transparent.png' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* <div className='newsLetterOuter'>
        <div className="section1">
           <div className='newsHeading'>
             <div className='newslogo'>
               <img src="https://cdn.pixabay.com/photo/2014/11/14/03/38/news-530220__340.jpg"/>
             </div>
             <div className='updateText'><h1>Stay Updated</h1><p>Subscribe to receive all travel news.</p></div>
           </div>
           <div className='newsInputs'>
             <input className='inputdata' type="text" placeholder="Your Name"/>
             <input className='inputdata' type="text" placeholder='Your Email'/>
             <button className='newsSubscribeButton'>Subscribe</button>
           </div>
        </div>
      </div> */}
        {/* 
      <div className='downloadLinks'>
          <div className='section2'>
            <div className='downloadText'>
             <h2>Download  Our Mobile App</h2>
            </div>
            <div className='downloadButtons'>
               <div className='googleButtons'>
                <div className='googelPlaybutton'>
                  <img src='https://texttofloss.com/wp-content/uploads/2021/01/Google-Play-Store-Button.png'/>
                </div>
                <div className='appStoreButton'>
                  <img src='https://texttofloss.com/wp-content/uploads/2021/01/App-Store-Button-transparent.png'/>
                </div>
               </div>
            </div>
            <div className='scanner'>
              <div className='scanbar'>
                <div className='scanimage'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'/>
                </div>
                <div className='scannerText'>
                Scan the QR Code
                </div>
              </div>
            </div>
          </div>
      </div> */}
      </div>
    </>
  );
}

export default Newsletter;