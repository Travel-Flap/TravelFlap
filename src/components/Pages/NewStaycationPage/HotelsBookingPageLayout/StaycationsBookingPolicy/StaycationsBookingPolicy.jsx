import React from 'react';
import "./StaycationsBookingPolicy.css";

export const StaycationBookingPolicy = () => {
    return (
        <>
            <div className='hotelBookingPloiciesMainContainer'>
                <h3 className='hotelBookingPoliciesOuterHeading'>Policies</h3>

                <div className='hotelBookingPoliciesInnerContainer'>
                    <div className='hotelBookingPoliciesTopContextDiv'>
                        <h4>Property policies</h4>

                        <div className='hotelBookingPolicyContextSubDiv'>
                            <p>Children and extra beds</p>
                            <p className='hotelBookingPolicyContextSubDivChild1' >Extra beds are dependent on the room you choose. Please check the individual room capacity for more details.</p>
                            <p className='hotelBookingPolicyContextSubDivChild1' >Minimum age of guests is: 1 year(s).</p>
                        </div>
                    </div>

                    <div className='hotelBookingPoliciesCardsMainDiv'>
                        <div class="card hotelBookingPoliciesCards">
                            <div class="card-header">
                                Infant 1-4 year(s)
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p> Stay for free if using existing bedding. </p>
                                    <footer class="blockquote-footer"> Baby cot/crib available upon request. <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>

                        <div class="card hotelBookingPoliciesCards">
                            <div class="card-header">
                                Children 5-7 years(s).
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p> Stay for free if using existing bedding. </p>
                                    <footer class="blockquote-footer"> If you need extra bed, it will incur and
                                        additional changes. <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>

                        <div class="card hotelBookingPoliciesCards">
                            <div class="card-header">
                                Guests 8 years and older are considered as adults.
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p> Must use an extra bed which will incur and additional charge. </p>
                                    {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hotelBookingPoliciesInnerContainer1'>
                    <h2>Some helpful facts</h2>

                    <div className='hotelBookingPoliciesHelpfulFactsDiv'>
                        <div className='hotelPoliciesFactInnerDiv1'>
                            <h5>Check-in/Check-out</h5>

                            <div className='hotelBookingFactSubDiv'>
                                <div className='hotelBookingFactSubDivDetails1' >
                                    <p>Check-In from</p>
                                    <p>Check-In until</p>
                                    <p>Check-out until</p>
                                    <p>Reception open until</p>
                                    <p>Parking(Daily Parking Fee)</p>
                                </div>

                                <div className='hotelBookingFactSubDivDetails2' >
                                    <p>: 02:00 PM</p>
                                    <p>: 12:00 PM</p>
                                    <p>: 12:00 PM</p>
                                    <p>: 12:00 PM</p>
                                    <p>: 250 INR</p>
                                </div>
                            </div>
                        </div>

                        <div className='hotelPoliciesFactInnerDiv2'>
                            <h5> The Property </h5>
                            <div className='hotelPoliciesPropertyInnerDiv'>
                                <div className='hotelBookingPropertySubDetailsDiv1' >
                                    <p> Non-Smoking rooms /floors </p>
                                    <p> Non-Smoking bars /lounges </p>
                                    <p> Non-Smoking floors </p>
                                    <p> Non-Smoking restraunts </p>
                                    <p> Non-Smoking rooms </p>
                                    <p> Room Voltage </p>
                                    <p> Year property opened </p>
                                    <p> Most recent renovation </p>
                                </div>

                                <div className='hotelBookingPropertySubDetailsDiv2'>
                                    <p> : no </p>
                                    <p> : 01 </p>
                                    <p> : 28 </p>
                                    <p> : 3 </p>
                                    <p> : 461 </p>
                                    <p> : 220 </p>
                                    <p> : 1988 </p>
                                    <p> : 2008 </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hotelBookingPropertyInfoDiv3'>
                        <h5>Getting around</h5>
                        <div className='hotelBookingPropertyInfoInnerDiv'>
                            <div className='hotelPropertyInfoSubDiv1'>
                                <p> Airport transfer fee </p>
                                <p> Distance from city center </p>
                                <p> Travel time to airport (minutes) </p>
                            </div>
                            <div className='hotelPropertyIndoSubDiv2'>
                                <p> : 4368 INR </p>
                                <p> : 2Km,2 miles </p>
                                <p> : 25 </p>
                            </div>
                        </div>
                    </div>

                    <div className='hotelBoookingPropertyOtherDiv'>
                        <p>Others</p>
                        <p>Joiners or visitors are not allowed in the residential area except for the lobby.
                            Otherwise, charges will be applied. Please contact the property for more information.
                        </p>

                        <div className='hotelBookingPropertOthrSubDiv'>
                            <ul>
                                <li> <p> The property does not permit food from outside. </p> </li> 
                                <p> Alcohol is strictly not allowed at the property. </p>
                                <p> Covid Vaccination Certificate is to be produced at the time of check-in </p>
                                <p> When booking more than 5 rooms, different policies and additional supplements may apply. </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
