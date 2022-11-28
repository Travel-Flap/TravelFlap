import React,{useState} from 'react';
import './FlightNearYouInnerWebpageData.css'
import {FaPlane } from "react-icons/fa";


export const FlightNearYouInnerWebpageData = () => {
    const[showtab, setShowtab]= useState(1);

    const handletab = (e)=>{
        setShowtab(e);
          }

    return (
            <>
                <div className='flightNearYouInnerWebpageDataMainDiv'>
                    <div className='flightNearYouInnerWebpageDataFiltersDiv'>
                        <div className='flightNearYouInnerWebpageDataFilter'>
                            <div className='flightNearYouInnerWebpageFilter1'>
                                  <p className='flightNearYouInnerWebpageStops'>Stops</p>
                                  <input type="radio" value="Direct"/>
                                  <label for="html">Direct</label><br/>
                                  <input type="radio" value="One Stop"/>
                                  <label for="css">One Stop</label><br/>
                                  <input type="radio" id="javascript"  value="Multi Stop"/>
                                  <label for="javascript">Multi Stop</label>
                            </div>

                            <div className='flightNearYouInnerWebpageFilter2'>
                                  <p className='flightNearYouInnerWebpageStops'>Payment Methods</p>
                                  <input type="radio" value="Visa"/>
                                  <label for="html">Visa</label><br/>
                                  <input type="radio"   value="Debit Card"/>
                                  <label for="css">Debit Card</label><br/>
                                  <input type="radio" id="javascript"  value="Net Banking"/>
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
                                  <input type="radio"   value="Indigo"/>
                                  <label for="css">Indigo</label><br/>
                                  <input type="radio" id="javascript"  value="Spice jet"/>
                                  <label for="javascript">Spice jet</label><br/>
                                  <input type="radio"   value="Alliance Air"/>
                                  <label for="css">Alliance Air</label><br/>
                                  <input type="radio" id="javascript"  value="Vistara"/>
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
                                  <input type="radio"   value="Mumbai"/>
                                  <label for="css">Mumbai</label><br/>
                                  <input type="radio" id="javascript"  value="Udaipur"/>
                                  <label for="javascript">Udaipur</label><br/>
                                  <input type="radio" id="javascript"  value="Jaipur"/>
                                  <label for="javascript">Jaipur</label>
                            </div> */}
                        </div>
                    </div>
                    
                    <div className='flightNearYouInnerWebpageDataDetails'>
                        
                        <div className='flightNearYouInnerWebpageDataDetailsButtons'>
                            <div className= {showtab===1? "flightNearinnerBest active": "flightNearinnerBest" }  onClick={()=>handletab(1)}>
                                <h3>Best</h3>
                                <p>₹ 3,596 : 1Hrs 13Min</p>
                            </div>
                            <div className= {showtab===2? "flightNearinnerCheap active": "flightNearinnerCheap" }  onClick={()=>handletab(2)}>
                                <h3>Cheapest</h3>
                                <p>₹ 3,596 : 1Hrs 13Min</p>
                            </div>
                            <div className= {showtab===3? "flightNearinnerFast active": "flightNearinnerFast" }  onClick={()=>handletab(3)}>
                                <h3>Fastest</h3>
                                <p>₹ 3,596 : 1Hrs 13Min</p>
                            </div>
                        </div>
                        <div className='flightNearYouinnerpageFlightDetails'>

                            

                    <div class="tab-content text-dark" id="pills-tabContent">

                        <div  className= { showtab===1 ? "tab-pane fade show active":"tab-pane fade show"} style={{textDecoration:"none",borderBottom:"none"}}> 

                        <div className='flightNearYouinnerPageDatesOptions'>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon Nov 29</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon Nov 29</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon Nov 29</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon Nov 29</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv1'>
                                    <h4>Mon Nov 29</h4>
                                    <h6>$2563</h6>
                                </div>
                            </div>
                            <div className='flightNearYouFlightDetails'>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/Emirates.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                       $6852   
                                        </div>

                                        
                                    </div>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option2" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners logos/Emirates.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                            
                                            <button className='flightNearinnerpageViewallDealsButton'>View all Deals</button>
                                            <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                        </div>

                                        
                                    </div>
                            </div>
                            

                            <div className='flightNearYouFlightDetails'>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners logos/Emirates.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500    
                                        </div>

                                        
                                    </div>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners logos/Emirates.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                            
                                            <button className='flightNearinnerpageViewallDealsButton'>View all Deals</button>
                                            <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                        </div>

                                        
                                    </div>
                            </div>

                            <div className='flightNearYouFlightDetails'>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners logos/Emirates.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500    
                                        </div>

                                        
                                    </div>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners logos/Emirates.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                            
                                            <button className='flightNearinnerpageViewallDealsButton'>View all Deals</button>
                                            <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                        </div>

                                        
                                    </div>
                            </div>
                        </div>

                        <div  className= { showtab===2 ? "tab-pane fade show active":"tab-pane fade show"} style={{textDecoration:"none",borderBottom:"none"}}> 
                        <div className='flightNearYouinnerPageDatesOptions'>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon Nov 30</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon Nov 30</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon Nov 30</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon Nov 30</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv1'>
                                    <h4>Mon Nov 30</h4>
                                    <h6>$2563</h6>
                                </div>
                            </div>
                            <div className='flightNearYouFlightDetails'>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/Air India.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500    
                                        </div>

                                        
                                    </div>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option2" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/Air India.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                            
                                            <button className='flightNearinnerpageViewallDealsButton'>View all Deals</button>
                                            <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                        </div>

                                        
                                    </div>
                            </div>
                            

                            <div className='flightNearYouFlightDetails'>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/Air India.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500    
                                        </div>

                                        
                                    </div>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/Air India.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                            
                                            <button className='flightNearinnerpageViewallDealsButton'>View all Deals</button>
                                            <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                        </div>

                                        
                                    </div>
                            </div>

                            <div className='flightNearYouFlightDetails'>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/Air India.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500    
                                        </div>

                                        
                                    </div>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/Air India.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                            
                                            <button className='flightNearinnerpageViewallDealsButton'>View all Deals</button>
                                            <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                        </div>

                                        
                                    </div>
                            </div>
                        </div>

                        <div  className= { showtab===3 ? "tab-pane fade show active":"tab-pane fade show"} style={{textDecoration:"none",borderBottom:"none"}}> 
                        <div className='flightNearYouinnerPageDatesOptions'>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon DEC 05</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon DEC 05</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon DEC 05</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv'>
                                    <h4>Mon DEC 05</h4>
                                    <h6>$2563</h6>
                                </div>
                                <div className='flightNearYouinnerPageDatesOptionsDiv1'>
                                    <h4>Mon DEC 05</h4>
                                    <h6>$2563</h6>
                                </div>
                            </div>
                            <div className='flightNearYouFlightDetails'>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/South_African.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                        $2500    
                                        </div>

                                        
                                    </div>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option2" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/South_African.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                            
                                            <button className='flightNearinnerpageViewallDealsButton'>View all Deals</button>
                                            <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                        </div>

                                        
                                    </div>
                            </div>
                            

                            <div className='flightNearYouFlightDetails'>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/South_African.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                       $6852   
                                        </div>

                                        
                                    </div>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/South_African.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                            
                                            <button className='flightNearinnerpageViewallDealsButton'>View all Deals</button>
                                            <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                        </div>

                                        
                                    </div>
                            </div>

                            <div className='flightNearYouFlightDetails'>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/South_African.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                       $6852   
                                        </div>

                                        
                                    </div>
                                    <div className='flightNearinnerpagedetails'>
                                        <div className='flightNearinnerOption1'>
                                        <input type="radio" id="option1" name="" value=""/>
                                        <label for=""></label><br/>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightlogos'>
                                            <img src='Images/Partners Logos/South_African.png' />
                                        </div>
                                        <div className='flightNearinnerpagenames'>
                                            01:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>JAI</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightTimming'>
                                            2Hrs  10Minutes
                                            <br/>
                                            <p style={{ color: "gray",borderTop:"2px solid lightGray" }}>Direct</p>
                                        </div>
                                        <div className='flightNearinnerpageplaneIcon'><FaPlane/></div>
                                        <div className='flightNearinnerpagedetailsflightStops'>
                                            03:45AM
                                            <br />
                                            <p style={{ color: "gray" }}>Delhi</p>
                                        </div>
                                        <div className='flightNearinnerpagedetailsflightPrice'>
                                            
                                            <button className='flightNearinnerpageViewallDealsButton'>View all Deals</button>
                                            <button className='flightNearinnerpageBooknowButton'>Book Now</button>
                                        </div>

                                        
                                    </div>
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
