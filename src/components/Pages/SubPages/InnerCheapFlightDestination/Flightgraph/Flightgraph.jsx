import React from 'react'
import './Flightgraph.css';

export const Flightgraph = () => {
  return (
    <div>
        <div className='Flightgraphmaindiv'>
            <div className='Flightgraphmainheading'>
                <h5>
                    When to book flight from jaipur to new delhi 
                </h5>
                <p>Estimate return price</p>
            </div>
            <div className='Flightgraphimagediv'>
                <div>
                    <img  className='Bannerimage'  src="Images/graph1.png" alt='banner image'/>
           
                </div>
                <div className='flightestimatepricediv'>
                   <p> Estimate price for</p>
                   <div className='tripdiv'> ← 4-days trips →</div>
                   <div className='resetdiv'><p> Reset Dates</p></div>
                   <div className='searchbuttondiv'><button className='searchdiv'>Search</button></div>

                </div>
                 {/* <div className='Flightgraphimagediv1'>
                    <div>
                    <img  className='Bannerimage'  src="https://cdn.statcdn.com/Statistic/560000/564769-blank-754.png" alt='banner image'/>
                     </div> 
                   
                </div> */}
                <div className='cheapFlightsdiv'>
                        <h3> Top tips to finding the cheap flights in jaipur </h3>
                        <ul >
                            <li style={{listStyleType : "square"}}>Looking for a cheap flight? 25 % of our users found  flight on this route for ₹2,2154 or less one-way and ₹3,915 or less round trip.

                            </li>
                            <li style={{listStyleType : "square"}}>Chepest flight was jaipur to new delhi was found on average, 25 days before departure.

                            </li>
                            <li style={{listStyleType : "square"}}>Book at least  2 weeks before departure in order to get a below-average price. 

                            </li>
                            <li style={{listStyleType : "square"}}>High season is considered  to be March, April and May. the chepest month is fly  is january. 

                            </li>
                        </ul>

                    </div>


            </div>

        </div>
    </div>
  )
}
