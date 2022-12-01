import React from 'react'
import './SearchDestination.css'
import { FaSearch  } from "react-icons/fa";
export const SearchDestination = () => {
  return (
    <div>
       <div className='FlightSearchmaindiv'>
        <div className='flightlogodiv'>
            
            {/* <input type="datetime-local" placeholder='Check-Out Date' /> */}
                        <div className='chooseClass2'>
                            <select className='selectoptiondiv'>
                            <option value>1 Adult</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>  
                            </select> 
                        </div>
                        <div className='chooseClass2'>
                            <select className='selectoptiondiv'>
                            <option value>Return</option>
                            <option value="1">Economy</option>
                            <option value="2">Business</option>
                            <option value="3">Premium</option>
                            <option value="3">First Class</option>  
                            </select> 
                        </div>
                        <div className='chooseClass2'>
                            <select className='selectoptiondiv'>
                            <option value>Economy</option>
                            <option value="1">Economy</option>
                            <option value="2">Business</option>
                            <option value="3">Premium</option>
                            <option value="3">First Class</option>  
                            </select> 
                        </div>
                        <div className='visalogodiv'> 
                        <div className='visadiv'>
                            <div className='visadivimg'>
                                <img src="Images/flightdestinationlogo/britisairway.png" ></img>
                                </div>
                                <div className='visadivimg'>
                                <img src="Images/flightdestinationlogo/EK.png"></img>
                                </div>
                                <div className='visadivimg'>
                                <img src="Images/flightdestinationlogo/PR.png" ></img>
                                </div>
                                <div className='visadivimg'>
                                <img src="Images/flightdestinationlogo/QF.png" ></img>
                                </div>
                                </div>
                                <div className='visadiv'>
                            <div className='visadivimg'>
                                <img src="Images/flightdestinationlogo/QR.png" ></img>
                                </div>
                                <div className='visadivimg'>
                                <img src="Images/flightdestinationlogo/SQ.png"></img>
                                </div>
                                <div className='visadivimg'>
                                <img src="Images/flightdestinationlogo/UL.png" ></img>
                                </div>
                                <div className='visadivimg'>
                                <img src="Images/flightdestinationlogo/WY.png " ></img>
                                </div>
                                </div>
                                </div>
        </div>
        <div className='flightdestinationdiv'>
        <div className='flightinputdiv'>
                      <div className='flightgoingtodiv'><input type="text" value='Starting from'   className='flightgoingtodiv1'/></div>
                      {/* <img src='Images/flightdestinationlogo/exchange (1).png'></img> */}
                      <div className='flightgoingtodiv'><input type="text" value='Going to' className='flightgoingtodiv1' /></div>
                      <div className='flightgoingtodiv2'><input type="datetime-local" placeholder='Starting date '   className='flightgoingtodiv1'/></div>
                      <div className='flightgoingtodivbuttonseacrh'><button type="button" class="btn btn-primary flightgoingtodivbutton "><FaSearch/></button></div>
                    </div>



        </div>

        <div className='flightselectdiv'>
        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Direct</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">1 Stop</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                        <label class="form-check-label" for="inlineRadio3">2 stop </label>
                    </div>

        </div>
       </div>
    </div>
  )
}
