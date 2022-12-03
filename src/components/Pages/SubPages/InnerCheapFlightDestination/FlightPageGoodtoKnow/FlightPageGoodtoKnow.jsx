import React from 'react'
import './FlightPageGoodtoKnow.css';

export const FlightPageGoodtoKnow = () => {
  return (
    <div>
        <div className='FlightPageGoodtoKnowmaindiv'>
          <div className='flighttopdiv'>
          <p> Good to Know</p>
          </div>
            <div className='flighttopdiv1'>
             
               <div className='seasondiv1' >
                <p className='intrectcolor'>Low Season</p>
                <h3 className='intrectwithheading'>January</h3>
                <p>Best time to beat the crowd (22% less expensive on avreage)</p>
              </div>
              <div className='seasondiv1' >
                <p className='intrectcolor'>Cheapest flight</p>
                <h3 className='intrectwithheading'>₹1.989</h3>
                <p>Flight from jaipur to delhi india</p>
              </div>
              <div className='seasondiv1' >
                <p className='intrectcolor'>Good deal return flight</p>
                <h3 className='intrectwithheading'>₹ 3,890</h3>
                <p>Or less</p>
              </div>
              
              </div>

              <div className='flighttopdiv2'>
              <div className='seasondiv' >
                <p className='intrectcolor'>High season</p>
                <h3 className='intrectwithheading'>April</h3>
                <p>Most Popular time to fly (18% more expensive on Average )</p>
              </div>
              <div className='seasondiv' >
                <p className='intrectcolor'>Average price(return flight)</p>
                <h3 className='intrectwithheading'>₹5,749</h3>
                <p>(Ave. price over the last 2 week )</p>
              </div>
              <div className='seasondiv' >
                <p className='intrectcolor'>Good deal one way </p>
                <h3 className='intrectwithheading'>₹2,459</h3>
                <p> Or Less</p>
              </div>

              </div>
        </div>
    </div>
  )
}
