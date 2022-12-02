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
                            <h4>Check-in/Check-out</h4>

                            <div className='hotelBookingFactSubDiv'>
                                <div className='hotelBookingFactSubDivDetails1' >
                                    <h5>Check-In from</h5>
                                    <h5>Check-In until</h5>
                                    <h5>Check-out until</h5>
                                    <h5>Reception open until</h5>
                                    <h5>Parking(Daily Parking Fee)</h5>
                                </div>

                                <div className='hotelBookingFactSubDivDetails2' >
                                    <h5>: 02:00 PM</h5>
                                    <h5>: 12:00 PM</h5>
                                    <h5>: 12:00 PM</h5>
                                    <h5>: 12:00 PM</h5>
                                    <h5>: 250 INR</h5>
                                </div>
                            </div>
                        </div>

                        <div className='hotelPoliciesFactInnerDiv2'>
                            <h4> The Property </h4>
                            <div className='hotelPoliciesPropertyInnerDiv'>
                                <div className='hotelBookingPropertySubDetailsDiv1' >
                                    <h5> Non-Smoking rooms /floors </h5>
                                    <h5> Non-Smoking bars /lounges </h5>
                                    <h5> Non-Smoking floors </h5>
                                    <h5> Non-Smoking restraunts </h5>
                                    <h5> Non-Smoking rooms </h5>
                                    <h5> Room Voltage </h5>
                                    <h5> Year property opened </h5>
                                    <h5> Most recent renovation </h5>
                                </div>

                                <div className='hotelBookingPropertySubDetailsDiv2'>
                                    <h5> : no </h5>
                                    <h5> : 01 </h5>
                                    <h5> : 28 </h5>
                                    <h5> : 3 </h5>
                                    <h5> : 461 </h5>
                                    <h5> : 220 </h5>
                                    <h5> : 1988 </h5>
                                    <h5> : 2008 </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hotelBookingPropertyInfoDiv3'>
                        <h4>Getting around</h4>
                        <div className='hotelBookingPropertyInfoInnerDiv'>
                            <div className='hotelPropertyInfoSubDiv1'>
                                <h5> Airport transfer fee </h5>
                                <h5> Distance from city center </h5>
                                <h5> Travel time to airport (minutes) </h5>
                            </div>
                            <div className='hotelPropertyIndoSubDiv2'>
                                <h5> : 4368 INR </h5>
                                <h5> : 2Km,2 miles </h5>
                                <h5> : 25 </h5>
                            </div>
                        </div>
                    </div>

                    <div className='hotelBoookingPropertyOtherDiv'>
                        <h4>Others</h4>
                        <h5>Joiners or visitors are not allowed in the residential area except for the lobby.
                            Otherwise, charges will be applied. Please contact the property for more information.
                        </h5>

                        <div className='hotelBookingPropertOthrSubDiv'>
                            <ul>
                                <li> <h5> The property does not permit food from outside. </h5> </li> 
                                <h5> Alcohol is strictly not allowed at the property. </h5>
                                <h5> Covid Vaccination Certificate is to be produced at the time of check-in </h5>
                                <h5> When booking more than 5 rooms, different policies and additional supplements may apply. </h5>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
