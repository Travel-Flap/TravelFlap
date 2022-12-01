import React from 'react'
import './PopularDestination0Cards.css'
import { FaCar ,FaHotel ,FaPlaneDeparture ,FaCoffee ,FaBinoculars } from "react-icons/fa";

export const PopularDestination0Cards = () => {
  return (
    
    <div  >
        <div className='PopularDestination0Cardsmaindiv'>
        <div className='PopularDestination0Filtermaindiv'>
       <div className='budgetdiv'>
        <div className='duretiondiv'>
          <div>
       <h5> Budget </h5>
       </div>
       <div className='persondiv'>
       <p> Per person</p>
       </div>
       </div>
       <div className='persondiv2'>
       <p> (1,00,000 - 5,00,000)</p></div>
       <div className='rangediv'>
       <input type = "range" min = "1" max = "100" value = "100" className='valuerange'/>
       </div>
       </div>
       <div className='budgetdiv'>
        <div className='duretiondiv'>
          <div>
       <h5> Duration </h5>
       </div>
       <div className='persondiv'>
       <p> in nights</p>
       </div>
       </div>
       <div className='persondiv2'>
       <p> (4 N - 7 N)</p></div>
       <div className='rangediv'>
       <input type = "range" min = "1" max = "100" value = "100" className='valuerange'/>
       </div>
       </div>
       


       <div className='hotelchoice'>
        <h5>Hotel Choice</h5>
        <div className='hotelchoicestar'>
          <div className='hotelrating'><p>  3★</p>
          </div>
          <div className='hotelrating'><p>  3★
          </p></div>
          <div className='hotelrating'><p>  3★</p>
          </div>
          <div className='hotelrating'><p>  3★</p>
          </div>
        </div>
       </div>


       <div className='radio0'>
        <h5>Flight</h5>
       <div class="form-check form-check-inline radio0div">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">With flight</label>
                    </div>
                    <div class="form-check form-check-inline radio0div1">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                        <label class="form-check-label" for="inlineRadio3">Without flight  </label>
                    </div>
       </div>
       <div className='hotelchoicedropdown'>
        <div className='selectoptiondiv'>
          <select className='selectoptiondiv1'>
            <option value = "true">Places</option>
            <option value = "1">Flight</option>
            <option value = "2">Flight</option>
            <option value = "3">Flight</option>
            <option value = "4">Flight</option>
          </select>
        </div>
        <div className='selectoptiondiv'>
          <select className='selectoptiondiv1'>
            <option value = "true">For Couples</option>
            <option value = "1">Flight</option>
            <option value = "2">Flight</option>
            <option value = "3">Flight</option>
            <option value = "4">Flight</option>
          </select>
        </div>
       
       
        
       </div>
      </div>
      <div className='ppcard'>

            <div className='PopularDestination0Cardsmaindiv2'>
            <div class="card mb- Destiouterdiv">
                            <div class="row g-0 DestiImagetextcontainer">
                                <div class="col-md-8 DestiCardimage">
                                    <img src="Images/cardofholiday.jpg" class="img-fluid DestiRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 DestiTextcard">
                                    <div class="card-body ">
                                        <h3 class="card-title DestiCardtitle">Majestic Istanbull</h3>
                                        <div className='travalflightactivity'>
                                        <div className='holidaytravalflightactivity'>
                                        <div className='flightacco'> <FaPlaneDeparture className='flaticondiv'/>  3 flight</div>
                                            <div className='flightacco'> <FaCar/>   8 tranfer </div>
                                            <div className='flightacco'><FaHotel/>  5 hotels</div>
                                            </div>
                                            <div className='holidaytravalflightactivity1'>
                                            
                                           
                                           
                                            <div className='flightacco'> <FaBinoculars/>   2 Activities</div>
                                            <div className='flightacco'> <FaCoffee/>  breakfast</div>
                                            </div>
                                            <div className='holidaytravalflightactivity2'>
                                                <div className='activitydays'>
                                                    <div className='nspan'> <span style={{ color: "#3380F2"}}>3N</span> Cappadocia</div>
                                                    <div className='nspan1'><span style={{ color: "#3380F2"}}>3N</span> Istanbul</div>
                                                </div>
                                                <div className='amountdiv'>
                                                   
                                                    <p>Per  Person on double sharing basis </p>
                                                <h5> ₹1.45.890</h5>
                                                
                                                </div>
                                                <div className='flightactivitybutton'>
                                                <div className=''>
                                                <button className=' viwemorebutton'>View Details </button>
                                                </div>
                                                <div className='bookingbutton'>
                                                <button className=' viwemorebutton1'>Book Now</button>
                                                </div>
                                                </div>
                                                
                                                

                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card mb- Destiouterdiv">
                            <div class="row g-0 DestiImagetextcontainer">
                                <div class="col-md-8 DestiCardimage">
                                    <img src="Images/cardofholiday.jpg" class="img-fluid DestiRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 DestiTextcard">
                                    <div class="card-body ">
                                        <h3 class="card-title DestiCardtitle">Majestic Istanbull</h3>
                                        <div className='travalflightactivity'>
                                        <div className='holidaytravalflightactivity'>
                                        <div className='flightacco'> <FaPlaneDeparture/> 3 flight</div>
                                            <div className='flightacco'> <FaCar/>  8 tranfer </div>
                                            <div className='flightacco'><FaHotel/>  5 hotels</div>
                                            </div>
                                            <div className='holidaytravalflightactivity1'>
                                            
                                           
                                           
                                            <div className='flightacco'> <FaBinoculars/>  2 Activities</div>
                                            <div className='flightacco'> <FaCoffee/>  breakfast</div>
                                            </div>
                                            <div className='holidaytravalflightactivity2'>
                                                <div className='activitydays'>
                                                    <div className='nspan'> <span style={{ color: "#3380F2"}}>3N</span> Cappadocia</div>
                                                    <div className='nspan1'><span style={{ color: "#3380F2"}}>3N</span> Istanbul</div>
                                                </div>
                                                <div className='amountdiv'>
                                                   
                                                    <p>Per  Person on double sharing basis </p>
                                                <h5> ₹1.45.890</h5>
                                                
                                                </div>
                                                <div className='flightactivitybutton'>
                                                <div className=''>
                                                <button className=' viwemorebutton'>View Details </button>
                                                </div>
                                                <div className='bookingbutton'>
                                                <button className=' viwemorebutton1'>Book Now</button>
                                                </div>
                                                </div>
                                                
                                                

                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb- Destiouterdiv">
                            <div class="row g-0 DestiImagetextcontainer">
                                <div class="col-md-8 DestiCardimage">
                                    <img src="Images/cardofholiday.jpg" class="img-fluid DestiRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 DestiTextcard">
                                    <div class="card-body ">
                                        <h3 class="card-title DestiCardtitle">Majestic Istanbull</h3>
                                        <div className='travalflightactivity'>
                                        <div className='holidaytravalflightactivity'>
                                        <div className='flightacco'> <FaPlaneDeparture/> 3 flight</div>
                                            <div className='flightacco'> <FaCar/>  8 tranfer </div>
                                            <div className='flightacco'><FaHotel/>  5 hotels</div>
                                            </div>
                                            <div className='holidaytravalflightactivity1'>
                                            
                                           
                                           
                                            <div className='flightacco'> <FaBinoculars/>  2 Activities</div>
                                            <div className='flightacco'> <FaCoffee/>    breakfast</div>
                                            </div>
                                            <div className='holidaytravalflightactivity2'>
                                                <div className='activitydays'>
                                                    <div className='nspan'> <span style={{ color: "#3380F2"}}>3N</span> Cappadocia</div>
                                                    <div className='nspan1'><span style={{ color: "#3380F2"}}>3N</span> Istanbul</div>
                                                </div>
                                                <div className='amountdiv'>
                                                   
                                                    <p>Per  Person on double sharing basis </p>
                                                <h5> ₹1.45.890</h5>
                                                
                                                </div>
                                                <div className='flightactivitybutton'>
                                                <div className=''>
                                                <button className=' viwemorebutton'>View Details </button>
                                                </div>
                                                <div className='bookingbutton'>
                                                <button className=' viwemorebutton1'>Book Now</button>
                                                </div>
                                                </div>
                                                
                                                

                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
            <div className='PopularDestination0Cardsmaindiv2'>
            <div class="card mb- Destiouterdiv">
                            <div class="row g-0 DestiImagetextcontainer">
                                <div class="col-md-8 DestiCardimage">
                                    <img src="Images/cardofholiday.jpg" class="img-fluid DestiRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 DestiTextcard">
                                    <div class="card-body ">
                                        <h3 class="card-title DestiCardtitle">Majestic Istanbull</h3>
                                        <div className='travalflightactivity'>
                                        <div className='holidaytravalflightactivity'>
                                        <div className='flightacco'> <FaPlaneDeparture/> 3 flight</div>
                                            <div className='flightacco'> <FaCar/>  8 tranfer </div>
                                            <div className='flightacco'><FaHotel/>  5 hotels</div>
                                            </div>
                                            <div className='holidaytravalflightactivity1'>
                                            
                                           
                                           
                                            <div className='flightacco'> <FaBinoculars/>  2 Activities</div>
                                            <div className='flightacco'> <FaCoffee/>   breakfast</div>
                                            </div>
                                            <div className='holidaytravalflightactivity2'>
                                                <div className='activitydays'>
                                                    <div className='nspan'> <span style={{ color: "#3380F2"}}>3N</span> Cappadocia</div>
                                                    <div className='nspan1'><span style={{ color: "#3380F2"}}>3N</span> Istanbul</div>
                                                </div>
                                                <div className='amountdiv'>
                                                   
                                                    <p>Per  Person on double sharing basis </p>
                                                <h5> ₹1.45.890</h5>
                                                
                                                </div>
                                                <div className='flightactivitybutton'>
                                                <div className=''>
                                                <button className=' viwemorebutton'>View Details </button>
                                                </div>
                                                <div className='bookingbutton'>
                                                <button className=' viwemorebutton1'>Book Now</button>
                                                </div>
                                                </div>
                                                
                                                

                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb- Destiouterdiv">
                            <div class="row g-0 DestiImagetextcontainer">
                                <div class="col-md-8 DestiCardimage">
                                    <img src="Images/cardofholiday.jpg" class="img-fluid DestiRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 DestiTextcard">
                                    <div class="card-body ">
                                        <h3 class="card-title DestiCardtitle">Majestic Istanbull</h3>
                                        <div className='travalflightactivity'>
                                        <div className='holidaytravalflightactivity'>
                                        <div className='flightacco'> <FaPlaneDeparture/> 3 flight</div>
                                            <div className='flightacco'> <FaCar/>  8 tranfer </div>
                                            <div className='flightacco'><FaHotel/>  5 hotels</div>
                                            </div>
                                            <div className='holidaytravalflightactivity1'>
                                            
                                           
                                           
                                            <div className='flightacco'> <FaBinoculars/>  2 Activities</div>
                                            <div className='flightacco'> <FaCoffee/>  breakfast</div>
                                            </div>
                                            <div className='holidaytravalflightactivity2'>
                                                <div className='activitydays'>
                                                    <div className='nspan'> <span style={{ color: "#3380F2"}}>3N</span> Cappadocia</div>
                                                    <div className='nspan1'><span style={{ color: "#3380F2"}}>3N</span> Istanbul</div>
                                                </div>
                                                <div className='amountdiv'>
                                                   
                                                    <p>Per  Person on double sharing basis </p>
                                                <h5> ₹1.45.890</h5>
                                                
                                                </div>
                                                <div className='flightactivitybutton'>
                                                <div className=''>
                                                <button className=' viwemorebutton'>View Details </button>
                                                </div>
                                                <div className='bookingbutton'>
                                                <button className=' viwemorebutton1'>Book Now</button>
                                                </div>
                                                </div>
                                                
                                                

                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb- Destiouterdiv">
                            <div class="row g-0 DestiImagetextcontainer">
                                <div class="col-md-8 DestiCardimage">
                                    <img src="Images/cardofholiday.jpg" class="img-fluid DestiRecommendedimage" alt="..." />
                                </div>
                                <div class="col-md-4 DestiTextcard">
                                    <div class="card-body ">
                                        <h3 class="card-title DestiCardtitle">Majestic Istanbull</h3>
                                        <div className='travalflightactivity'>
                                        <div className='holidaytravalflightactivity'>
                                        <div className='flightacco'> <FaPlaneDeparture/> 3 flight</div>
                                            <div className='flightacco'> <FaCar/>  8 tranfer </div>
                                            <div className='flightacco'><FaHotel/>  5 hotels</div>
                                            </div>
                                            <div className='holidaytravalflightactivity1'>
                                            
                                           
                                           
                                            <div className='flightacco'> <FaBinoculars/>  2 Activities</div>
                                            <div className='flightacco'> <FaCoffee/>  breakfast</div>
                                            </div>
                                            <div className='holidaytravalflightactivity2'>
                                                <div className='activitydays'>
                                                    <div className='nspan'> <span style={{ color: "#3380F2"}}>3N</span> Cappadocia</div>
                                                    <div className='nspan1'><span style={{ color: "#3380F2"}}>3N</span> Istanbul</div>
                                                </div>
                                                <div className='amountdiv'>
                                                   
                                                    <p>Per  Person on double sharing basis </p>
                                                <h5> ₹1.45.890</h5>
                                                
                                                </div>
                                                <div className='flightactivitybutton'>
                                                <div className=''>
                                                <button className=' viwemorebutton'>View Details </button>
                                                </div>
                                                <div className='bookingbutton'>
                                                <button className=' viwemorebutton1'>Book Now</button>
                                                </div>
                                                </div>
                                                
                                                

                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
            </div>
            </div>


        </div>
    </div>
    
  )
}
