import './FlightNearYouInnerWebpageData.css'


export const FlightNearYouInnerWebpageData = () => {

    return (
            <>
                <div className='flightNearYouInnerWebpageDataMainDiv'>
                    <div className='flightNearYouInnerWebpageDataFiltersDiv'>
                        <div className='flightNearYouInnerWebpageDataFilter'>
                            <div className='flightNearYouInnerWebpageFilter1'>
                                  <p className='flightNearYouInnerWebpageStops'>Stops</p>
                                  <input type="radio" value="Direct"/>
                                  <label for="html">Direct</label><br/>
                                  <input type="radio" id="css" name="fav_language" value="One Stop"/>
                                  <label for="css">One Stop</label><br/>
                                  <input type="radio" id="javascript" name="fav_language" value="Multi Stop"/>
                                  <label for="javascript">Multi Stop</label>
                            </div>

                            <div className='flightNearYouInnerWebpageFilter2'>
                                  <p className='flightNearYouInnerWebpageStops'>Payment Methods</p>
                                  <input type="radio" value="Visa"/>
                                  <label for="html">Visa</label><br/>
                                  <input type="radio" id="css" name="fav_language" value="Debit Card"/>
                                  <label for="css">Debit Card</label><br/>
                                  <input type="radio" id="javascript" name="fav_language" value="Net Banking"/>
                                  <label for="javascript">Net Banking</label>
                            </div>

                            <div className='flightNearYouInnerWebpageFilter3'>
                                  <p className='flightNearYouInnerWebpageTime'>Times</p>
                                  <button className='flightNearYouInnerWebpageTimeButtons'>Take-off</button><button className='flightNearYouInnerWebpageTimeButtons'>Landing</button>
                                  <p className='flightNeartakeoffData'>Take Off from JAI</p>
                                  <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer"/>
                                  <p className='flightNeartakeoffData'>Take Off from Delhi</p>
                                  <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer"/>
                            </div>

                             <div className='flightNearYouInnerWebpageFilter4'>
                                  <p className='flightNearYouInnerWebpageStops'>Airlines</p>
                                  <input type="radio" value="Air Asia"/>
                                  <label for="html">Air Asia</label><br/>
                                  <input type="radio" id="css" name="fav_language" value="Indigo"/>
                                  <label for="css">Indigo</label><br/>
                                  <input type="radio" id="javascript" name="fav_language" value="Spice jet"/>
                                  <label for="javascript">Spice jet</label><br/>
                                  <input type="radio" id="css" name="fav_language" value="Alliance Air"/>
                                  <label for="css">Alliance Air</label><br/>
                                  <input type="radio" id="javascript" name="fav_language" value="Vistara"/>
                                  <label for="javascript">Vistara</label>
                            </div>

                            <div className='flightNearYouInnerWebpageFilter5'>
                                  <p className='flightNearYouInnerWebpageTime'>Duration</p>
                                  <h5 className='flightNearDurationrangeText'>Flight leg</h5>
                                  <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer"/>
                                  <h5 className='flightNearDurationrangeText'>StopOver</h5>
                                  <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer"/>
                                  <h5 className='flightNearDurationrangeText'>Budget</h5>
                                  <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer"/>
                            </div>

                            {/* <div className='flightNearYouInnerWebpageFilter4'>
                                  <p className='flightNearYouInnerWebpageStops'>Stop Over Airports</p>
                                  <input type="radio" value="Ahmedabad"/>
                                  <label for="html">Ahmedabad</label><br/>
                                  <input type="radio" id="css" name="fav_language" value="Mumbai"/>
                                  <label for="css">Mumbai</label><br/>
                                  <input type="radio" id="javascript" name="fav_language" value="Udaipur"/>
                                  <label for="javascript">Udaipur</label><br/>
                                  <input type="radio" id="javascript" name="fav_language" value="Jaipur"/>
                                  <label for="javascript">Jaipur</label>
                            </div> */}
                        </div>
                    </div>
                    <div className='flightNearYouInnerWebpageDataDetails'>
                        <div className='flightNearYouInnerWebpageDataDetailsButtons'>
                            <div className='flightNearinnerBest'>
                                <h3>Best</h3>
                                <p>₹ 3,596 : 1Hrs 13Min</p>
                            </div>
                            <div className='flightNearinnerCheap'>
                                <h3>Cheapest</h3>
                                <p>₹ 3,596 : 1Hrs 13Min</p>
                            </div>
                            <div className='flightNearinnerFast'>
                                <h3>Fastest</h3>
                                <p>₹ 3,596 : 1Hrs 13Min</p>
                            </div>
                        </div>


                    <div className='flightNearYouinnerpageFlightDetails'>
                        <div className='flightNearYouFlightDetails'>
                                <div className='flightNearinnerpagedetails'>
                                    <div className='flightNearinnerpagedetailsflightlogos'>
                                        <img src='Images/Partners Logos/Air India.png' />
                                    </div>
                                    <div className='flightNearinnerpagenames'>
                                        01:45AM to 04:25PM
                                        <br />
                                        <p style={{ color: "gray" }}>Air India</p>
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightTimming'>
                                        2Hrs  10Minutes
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightStops'>
                                        Non Stop
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500
                                        <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                    </div>

                                    
                                </div>
                                <div className='flightNearinnerpagedetails'>
                                    <div className='flightNearinnerpagedetailsflightlogos'>
                                        <img src='Images/Partners Logos/Air India.png' />
                                    </div>
                                    <div className='flightNearinnerpagenames'>
                                        01:45AM to 04:25PM
                                        <br />
                                        <p style={{ color: "gray" }}>Air India</p>
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightTimming'>
                                        2Hrs  10Minutes
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightStops'>
                                        Non Stop
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500
                                        <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                    </div>

                                    
                                </div>
                         </div>

                         <div className='flightNearYouFlightDetails'>
                                <div className='flightNearinnerpagedetails'>
                                    <div className='flightNearinnerpagedetailsflightlogos'>
                                        <img src='Images/Partners Logos/Air India.png' />
                                    </div>
                                    <div className='flightNearinnerpagenames'>
                                        01:45AM to 04:25PM
                                        <br />
                                        <p style={{ color: "gray" }}>Air India</p>
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightTimming'>
                                        2Hrs  10Minutes
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightStops'>
                                        Non Stop
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500
                                        <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                    </div>

                                    
                                </div>
                                <div className='flightNearinnerpagedetails'>
                                    <div className='flightNearinnerpagedetailsflightlogos'>
                                        <img src='Images/Partners Logos/Air India.png' />
                                    </div>
                                    <div className='flightNearinnerpagenames'>
                                        01:45AM to 04:25PM
                                        <br />
                                        <p style={{ color: "gray" }}>Air India</p>
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightTimming'>
                                        2Hrs  10Minutes
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightStops'>
                                        Non Stop
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500
                                        <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                    </div>

                                    
                                </div>
                         </div>

                         <div className='flightNearYouFlightDetails'>
                                <div className='flightNearinnerpagedetails'>
                                    <div className='flightNearinnerpagedetailsflightlogos'>
                                        <img src='Images/Partners Logos/Air India.png' />
                                    </div>
                                    <div className='flightNearinnerpagenames'>
                                        01:45AM to 04:25PM
                                        <br />
                                        <p style={{ color: "gray" }}>Air India</p>
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightTimming'>
                                        2Hrs  10Minutes
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightStops'>
                                        Non Stop
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500
                                        <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                    </div>

                                    
                                </div>
                                <div className='flightNearinnerpagedetails'>
                                    <div className='flightNearinnerpagedetailsflightlogos'>
                                        <img src='Images/Partners Logos/Air India.png' />
                                    </div>
                                    <div className='flightNearinnerpagenames'>
                                        01:45AM to 04:25PM
                                        <br />
                                        <p style={{ color: "gray" }}>Air India</p>
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightTimming'>
                                        2Hrs  10Minutes
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightStops'>
                                        Non Stop
                                    </div>
                                    <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500
                                        <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                    </div>

                                    
                                </div>
                         </div>

                         <button className='innerflightNearYouShowButton'>Show More</button>
                         
                    </div>
                    </div>
                </div>
            </>
    );
}
