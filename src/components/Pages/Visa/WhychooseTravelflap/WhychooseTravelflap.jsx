import React from 'react';
import "./WhychooseTravelflap.css";
import services from "./services.png";
import assistance from "./assistance.png";
import branches from "./branches.png";
import experience from "./experience.png";
import pickup from "./pickup.png";
import safety from "./safety.png";
import offers from "./offers.png";
import Time from "./Time.png";
import EVisa from "./EVisa.png";


export const WhychooseTravelflap = () => {
    return (
        <>
          <div className='whychoosemaindiv'>
            <div className='whychooseheading'>
               <h1>
                  Why Choose TravelFlap ?
               </h1>
            </div>
            <div className='whychoosedatadiv'>
                
            <div className='onetest'>
               <div className='whychooseheadinglogos'>
                     <img className='whychooselogos' src={pickup} />
                     <h5>We Provide Pickup and drop at your door steps</h5>
                 </div>
               <div className='whychooseheadinglogos'>
                    <img className='whychooselogos' src={safety} />
                    <h5>We Provide Safety and confidentiality</h5>
                 </div>
               <div className='whychooseheadinglogos'>
                     <img className='whychooselogos' src={experience} />
                     <h5>We have 40+ year of experience</h5>
                 </div>
               </div>
               
               <div className='onetest'>
                <div className='whychooseheadinglogos'>
                     <img className='whychooselogos' src={services} />
                     <h5>We Provide Visa Services for all Countries</h5>
                 </div>
               <div className='whychooseheadinglogos'>
                     <img className='whychooselogos' src={assistance} />
                     <h5>We Provide End-to-End Visa Assistance</h5>
                 </div>
               <div className='whychooseheadinglogos'>
                     <img className='whychooselogos' src={branches} />
                     <h5>We have more than 150+ Branches</h5>
                 </div>
               </div>
               
               <div className='onetest'>
               <div className='whychooseheadinglogos' >
                     <img className='whychooselogos' src={offers} />
                     <h5>We provide exclusive deals and offers</h5>
               </div>
               
               <div className='whychooseheadinglogos'>
                     <img className='whychooselogos' src={EVisa} />
                     <h5>We Provide global E-visa assistance</h5>
               </div>
               <div className='whychooseheadinglogos'>
                     <img className='whychooselogos' src={Time} />
                     <h5>Time Saving and hassel free</h5>
               </div>
               </div>
            </div>
          </div>
        </>
    )
}
