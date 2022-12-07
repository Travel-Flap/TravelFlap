// export const CruiseFacilitiesFacilities = () => {

import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import "./CruiseFacilities.css";
import countrydata from '../../../../../CountryData.json';
// import { InnerCruiseFacilitiesPageContactDiv } from '../InnerCruiseFacilitiesPageContactDiv/InnerCruiseFacilitiesPageContactDiv';

export const CruiseFacilities = () => {

    const [showtab, setShowtab] = useState(1);
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');
    const [counter, setCounter] = useState(0);

    const handletab = (e) => {
        setShowtab(e);
    }

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

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        setCounter(count => count - 1);
    };
    return (
        <>
            <div className='innerCruiseFacilitiespagemainDiv'>
                <h3> Facilities Provided </h3>
                <React.Fragment>
                    <Container>
                        <div className="row">
                            <div className="col-sm-12 bg-light innerCruiseFacilitiesChangemainDiv">

                                <ul class="nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist" className='innerCruiseFacilitiesbuttonouterDiv'>
                                    <li class="nav-item" role="presentation" className="innerCruiseFacilitiesbuttonDiv">
                                        <button className={showtab === 1 ? "innerCruiseFacilitiesHeadingButtons active" : "innerCruiseFacilitiesHeadingButtons"} onClick={() => handletab(1)}> Salon & Fitness at Sea </button>
                                    </li>
                                    <li class="nav-item" role="presentation" className="innerCruiseFacilitiesbuttonDiv">
                                        <button className={showtab === 2 ? "innerCruiseFacilitiesHeadingButtons active" : "innerCruiseFacilitiesHeadingButtons"} onClick={() => handletab(2)}> Entertainment & nightlife </button>
                                    </li>

                                    <li class="nav-item" role="presentation" className="innerCruiseFacilitiesbuttonDiv">
                                        <button className={showtab === 3 ? "innerCruiseFacilitiesHeadingButtons active" : "innerCruiseFacilitiesHeadingButtons"} onClick={() => handletab(3)}> Spa </button>
                                    </li>
                                    <li class="nav-item" role="presentation" className="innerCruiseFacilitiesbuttonDiv">
                                        <button className={showtab === 4 ? "innerCruiseFacilitiesHeadingButtons active" : "innerCruiseFacilitiesHeadingButtons"} onClick={() => handletab(4)}> Bar & Lounges </button>
                                    </li>
                                    <li class="nav-item" role="presentation" className="innerCruiseFacilitiesbuttonDiv">
                                        <button className={showtab === 5 ? "innerCruiseFacilitiesHeadingButtons active" : "innerCruiseFacilitiesHeadingButtons"} onClick={() => handletab(5)}> Kids and teenagers </button>
                                    </li>

                                    <li class="nav-item" role="presentation" className="innerCruiseFacilitiesbuttonDiv">
                                        <button className={showtab === 6 ? "innerCruiseFacilitiesHeadingButtons active" : "innerCruiseFacilitiesHeadingButtons"} onClick={() => handletab(6)}> Dining </button>
                                    </li>


                                </ul>
                                <div class="tab-content text-dark" id="pills-tabContent">

                                    <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>
                                        <div className='innerCruiseFacilitiesBookingOfferOuterDiv'>
                                            <div className='innerCruisefacilitiesChangeDiv'>
                                                <div className='innerCruiseFacilitiesImageDiv'>
                                                    <img src='/Images/NewHomeLayout/CruiseDetailsPage/CruiseClubImage.png' alt='image' />
                                                </div>

                                                <div className='innerCruiseFacilitiesContentDiv'>
                                                    <p>
                                                        From groovy nightclubs where you can dance the night away to Casinos brimming with opportunities to get lucky,
                                                        to sprawling amphitheaters where you can witness spectacular performances, the choices for entertainment are ample onboard Empress.
                                                        If you’re worried about the kids getting bored, worry no more because Empress has designated special zones for kids & teenagers, where
                                                        they can enjoy a range of fun activities, and can also mix and mingle with others their age. There’s always something exciting to do for every age group.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* <h5> Top Highlights </h5>

                                            <p>
                                                The Empress by Cordelia CruiseFacilitiess is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                                                The ship was initially ordered by Admiral CruiseFacilitiess and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                                                and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian CruiseFacilities Liner, Cordelia CruiseFacilitiess
                                                by Waterways Tourism Pvt. Ltd. Cordelia CruiseFacilitiess is proud to welcome the Empress to India
                                            </p> */}
                                        </div>
                                    </div>

                                    <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }} >
                                        <div className='innerCruiseFacilitiesBookingOfferOuterDiv'>
                                            <div className='innerCruisefacilitiesChangeDiv'>
                                                <div className='innerCruiseFacilitiesImageDiv'>
                                                    <img src='/Images/NewHomeLayout/CruiseDetailsPage/CruiseClubImage.png' alt='image' />
                                                </div>

                                                <div className='innerCruiseFacilitiesContentDiv'>
                                                    <p>
                                                        From groovy nightclubs where you can dance the night away to Casinos brimming with opportunities to get lucky,
                                                        to sprawling amphitheaters where you can witness spectacular performances, the choices for entertainment are ample onboard Empress.
                                                        If you’re worried about the kids getting bored, worry no more because Empress has designated special zones for kids & teenagers, where
                                                        they can enjoy a range of fun activities, and can also mix and mingle with others their age. There’s always something exciting to do for every age group.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* <h5> Top Highlights </h5>

                                            <p>
                                                The Empress by Cordelia CruiseFacilitiess is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                                                The ship was initially ordered by Admiral CruiseFacilitiess and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                                                and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian CruiseFacilities Liner, Cordelia CruiseFacilitiess
                                                by Waterways Tourism Pvt. Ltd. Cordelia CruiseFacilitiess is proud to welcome the Empress to India
                                            </p> */}
                                        </div>
                                    </div>

                                    <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }} >
                                        <div className='innerCruiseFacilitiesBookingOfferOuterDiv'>
                                            <div className='innerCruisefacilitiesChangeDiv'>
                                                <div className='innerCruiseFacilitiesImageDiv'>
                                                    <img src='/Images/NewHomeLayout/CruiseDetailsPage/CruiseClubImage.png' alt='image' />
                                                </div>

                                                <div className='innerCruiseFacilitiesContentDiv'>
                                                    <p>
                                                        From groovy nightclubs where you can dance the night away to Casinos brimming with opportunities to get lucky,
                                                        to sprawling amphitheaters where you can witness spectacular performances, the choices for entertainment are ample onboard Empress.
                                                        If you’re worried about the kids getting bored, worry no more because Empress has designated special zones for kids & teenagers, where
                                                        they can enjoy a range of fun activities, and can also mix and mingle with others their age. There’s always something exciting to do for every age group.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* <h5> Top Highlights </h5>

                                            <p>
                                                The Empress by Cordelia CruiseFacilitiess is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                                                The ship was initially ordered by Admiral CruiseFacilitiess and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                                                and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian CruiseFacilities Liner, Cordelia CruiseFacilitiess
                                                by Waterways Tourism Pvt. Ltd. Cordelia CruiseFacilitiess is proud to welcome the Empress to India
                                            </p> */}
                                        </div>
                                    </div>

                                    <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>

                                        <div className='innerCruiseFacilitiesBookingOfferOuterDiv'>
                                            <div className='innerCruisefacilitiesChangeDiv'>
                                                <div className='innerCruiseFacilitiesImageDiv'>
                                                    <img src='/Images/NewHomeLayout/CruiseDetailsPage/CruiseClubImage.png' alt='image' />
                                                </div>

                                                <div className='innerCruiseFacilitiesContentDiv'>
                                                    <p>
                                                        From groovy nightclubs where you can dance the night away to Casinos brimming with opportunities to get lucky,
                                                        to sprawling amphitheaters where you can witness spectacular performances, the choices for entertainment are ample onboard Empress.
                                                        If you’re worried about the kids getting bored, worry no more because Empress has designated special zones for kids & teenagers, where
                                                        they can enjoy a range of fun activities, and can also mix and mingle with others their age. There’s always something exciting to do for every age group.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* <h5> Top Highlights </h5>

                                            <p>
                                                The Empress by Cordelia CruiseFacilitiess is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                                                The ship was initially ordered by Admiral CruiseFacilitiess and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                                                and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian CruiseFacilities Liner, Cordelia CruiseFacilitiess
                                                by Waterways Tourism Pvt. Ltd. Cordelia CruiseFacilitiess is proud to welcome the Empress to India
                                            </p> */}
                                        </div>
                                        {/* <div className='innerCruiseFacilitiesChangeableButton'>
                          <div className='innerCruiseFacilitiesChangeableDataBannerdropcontainer'>
                            <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example">
                              <option value="" >Select Country</option>
                              {
                                countrydata.map((getcountry, index) => (
                                  <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                              }
                            </select>
                          </div>
    
                          <div className='innerCruiseFacilitiesChangeableDataBannerdropcontainer1'>
                            <select className="form-select newCruiseFacilitiesform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                              <option value="" >Select Nationality</option>
                              {
                                countrydata.map((getcountry, index) => (
                                  <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div> */}

                                        {/* <div className='CruiseFacilitiesTypeMainDiv'>
                          <div className='CruiseFacilitiesinnerSample'>
                            <div className='CruiseFacilitiesinnerImageDiv'>
                              <img src='Images/InnerCruiseFacilitiesPage/dubai-sample.jpg' />
                            </div>
                          </div>
                        </div> */}

                                    </div>

                                    <div className={showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"} style={{ textDecoration: "none", borderBottom: "none" }}>

                                        <div className='innerCruiseFacilitiesBookingOfferOuterDiv'>
                                            <div className='innerCruisefacilitiesChangeDiv'>
                                                <div className='innerCruiseFacilitiesImageDiv'>
                                                    <img src='/Images/NewHomeLayout/CruiseDetailsPage/CruiseClubImage.png' alt='image' />
                                                </div>

                                                <div className='innerCruiseFacilitiesContentDiv'>
                                                    <p>
                                                        From groovy nightclubs where you can dance the night away to Casinos brimming with opportunities to get lucky,
                                                        to sprawling amphitheaters where you can witness spectacular performances, the choices for entertainment are ample onboard Empress.
                                                        If you’re worried about the kids getting bored, worry no more because Empress has designated special zones for kids & teenagers, where
                                                        they can enjoy a range of fun activities, and can also mix and mingle with others their age. There’s always something exciting to do for every age group.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* <h5> Top Highlights </h5>

                                            <p>
                                                The Empress by Cordelia CruiseFacilitiess is an iconic grandeur vessel that first set sail in the year 1990 with the name The Nordic Empress.
                                                The ship was initially ordered by Admiral CruiseFacilitiess and later incorporated into the Royal Caribbean fleet. After sailing the Bahamas
                                                and the Caribbean, The Empress will be cruising the West and the East Coast of INDIA under the Indian CruiseFacilities Liner, Cordelia CruiseFacilitiess
                                                by Waterways Tourism Pvt. Ltd. Cordelia CruiseFacilitiess is proud to welcome the Empress to India
                                            </p> */}
                                        </div>

                                        {/* <div className='innerCruiseFacilitiesChangeableButton'>
                          <div className='innerCruiseFacilitiesChangeableDataBannerdropcontainer'>
                            <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example">
                              <option value="" >Select Country</option>
                              {
                                countrydata.map((getcountry, index) => (
                                  <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                              }
                            </select>
                          </div>
    
                          <div className='innerCruiseFacilitiesChangeableDataBannerdropcontainer1'>
                            <select className="form-select newCruiseFacilitiesform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                              <option value="" >Select Nationality</option>
                              {
                                countrydata.map((getcountry, index) => (
                                  <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div>
    
                        <div className='CruiseFacilitiesTypeMainDiv'>
                          <div className='CruiseFacilitiesInnerEmbasy'>
                            <div className='CruiseFacilitiesInnerEmbasyLinks'>
                              <h4 className='CruiseFacilitiesInnerEmbasyHeadings'>Vietnam CruiseFacilities Requirements</h4>
                              <ul>
                                <li className='CruiseFacilitiesEmbasyLinks'>Have a valid Passport and valid Vietnam CruiseFacilities.</li>
                                <li className='CruiseFacilitiesEmbasyLinks'>Be in good health.</li>
                              </ul>
                            </div>
    
                            <div className='CruiseFacilitiesInnerEmbasyLinks'>
                              <h4 className='CruiseFacilitiesInnerEmbasyHeadings'>Travel Checklist</h4>
                              <ul>
                                <li className='CruiseFacilitiesEmbasyLinks'>Passport.</li>
                                <li className='CruiseFacilitiesEmbasyLinks'>Valid Vietnam CruiseFacilities.</li>
                              </ul>
                            </div>
    
                            <div className='CruiseFacilitiesInnerEmbasyLinks'>
                              <h4 className='CruiseFacilitiesInnerEmbasyHeadings'>What to do when you arrive in Vietnam</h4>
                              <ul>
                                <li className='CruiseFacilitiesEmbasyLinks'>Keep your Declaration form in hand (provided to you on the flight).</li>
                              </ul>
                            </div>
    
                            <div className='CruiseFacilitiesInnerEmbasyLinks'>
                              <h4 className='CruiseFacilitiesInnerEmbasyHeadings'>Vietnam travel guide</h4>
                              <ul>
                                <li className='CruiseFacilitiesEmbasyLinks'>Vietnam is a nation of huge contrasts, immense cultural diversity, and breath-taking natural wonders that can keep its travellers – ranging from back packers to the world’s elite – entertained for weeks if not months.</li>
                              </ul>
                            </div>
                          </div>
    
                        </div> */}
                                    </div>

                                </div>


                            </div>
                        </div>
                    </Container>

                </React.Fragment>

            </div>
        </>
    );
}

