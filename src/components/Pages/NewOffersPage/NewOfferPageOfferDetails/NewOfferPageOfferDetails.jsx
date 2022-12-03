import "./NewOfferPageOfferDetails.css";

export const NewOfferPageOfferDetails = () => {
    return (
        <>
           <div className="NewOfferPageOfferDetailsContainerDiv">
             <div className="NewOfferPageOfferDetailsMainDiv">

                <div className="NewOfferPageOfferDetailsFilterDiv">
                     <div className="NewOfferPageOfferDetailsFilter">
                        <div className="NewOfferPageOfferDetailsFilter1">
                           <h3>Search Offers</h3>
                           <input type="text" className="newOfferFilter1SearchBar" placeholder="Ex. Car Rentals Offers,Staycation Offers"/>
                        </div>
                        <div className="NewOfferPageOfferDetailsFilter2">
                           <h3>Offers</h3>
                           <select className="newOfferPagedetailforminputs">
                              <option value="Visa Types">Flight</option>
                              <option value="Transit Visa">Hotel</option>
                              <option value="Insurance Visa">Holidays</option>
                              <option value="job visa + insurance">Visa</option>
                              <option value="Student Visa">Staycations</option>
                              <option value="Buisness Visa">Activities</option>
                           </select>
                        </div>
                        <div className="NewOfferPageOfferDetailsFilter2">
                           <h3>Payment Offers</h3>
                           <select className="newOfferPagedetailforminputs">
                              <option value="Visa Types">Flight</option>
                              <option value="Transit Visa">Hotel</option>
                              <option value="Insurance Visa">Holidays</option>
                              <option value="job visa + insurance">Visa</option>
                              <option value="Student Visa">Staycations</option>
                              <option value="Buisness Visa">Activities</option>
                           </select>
                        </div>

                        <div className='NewOfferPageOfferDetailsFilter3'>
                            <p className='newOfferPagetimelyOffers'>TravelFlap Bizz</p>
                            <input type="radio" value="Air Asia" />
                            <label for="html">Weekly Traveller</label><br />
                            <input type="radio" value="Indigo" />
                            <label for="css">Monthly Traveller</label><br />
                            <input type="radio" id="javascript" value="Spice jet" />
                            <label for="javascript">Yearly Traveller</label><br />
                        </div>

                        <button type="button" className="btn btn-primary newOfferPageAddMoreButton" data-toggle="modal" data-target="#exampleModal">
                              Add More
                        </button>
                        
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                           <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel" style={{color:"black"}}>Modal title</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body">
                                 This is a Test Modal
                              </div>
                              <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                           </div>
                        </div>
                        </div> 
                        
                     </div>
                     <div className="NewOfferPageImage">
                         <img src="Images/NewOfferPage/offerstamp.png"/>
                     </div>
                </div>

                <div className="NewOfferPageOfferDetailsDataDiv">
                    <p className="NewOfferPageOfferNumber">8 Offers found on Flights</p>
                    <div className="NewOfferPageOfferDetailsDataContainer">
                      <div className="NewOfferPageOfferDetails1">
                         <div className="NewOfferPageOfferDetailsImage">
                           <img className="NewOffersPlanVacationBankImage" src="Images/NewOfferPage/hdfc.png"/>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>4000</h4>
                            <p>Actual Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3259</h4>
                            <p>Offer Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3 Months</h4>
                            <p>Tenture</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsButtons">
                            <button className="NewOfferPageOfferDetailsApplyButton">Apply Now</button>
                            <button  className="NewOfferPageOfferDetailsViewMoreButton">View More</button>
                         </div>
                      </div>

                      <div className="NewOfferPageOfferDetails">
                         <div className="NewOfferPageOfferDetailsImage">
                           <img className="NewOffersPlanVacationBankImage" src="Images/NewOfferPage/axis.png"/>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>4000</h4>
                            <p>Actual Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3259</h4>
                            <p>Offer Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3 Months</h4>
                            <p>Tenture</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsButtons">
                            <button className="NewOfferPageOfferDetailsApplyButton">Apply Now</button>
                            <button  className="NewOfferPageOfferDetailsViewMoreButton">View More</button>
                         </div>
                      </div>

                      <div className="NewOfferPageOfferDetails">
                         <div className="NewOfferPageOfferDetailsImage">
                           <img className="NewOffersPlanVacationBankImage" src="Images/NewOfferPage/bankofbaroda.png"/>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>4000</h4>
                            <p>Actual Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3259</h4>
                            <p>Offer Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3 Months</h4>
                            <p>Tenture</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsButtons">
                            <button className="NewOfferPageOfferDetailsApplyButton">Apply Now</button>
                            <button  className="NewOfferPageOfferDetailsViewMoreButton">View More</button>
                         </div>
                      </div>

                      <div className="NewOfferPageOfferDetails">
                         <div className="NewOfferPageOfferDetailsImage">
                           <img className="NewOffersPlanVacationBankImage" src="Images/NewOfferPage/pnblogo.png"/>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>4000</h4>
                            <p>Actual Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3259</h4>
                            <p>Offer Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3 Months</h4>
                            <p>Tenture</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsButtons">
                            <button className="NewOfferPageOfferDetailsApplyButton">Apply Now</button>
                            <button  className="NewOfferPageOfferDetailsViewMoreButton">View More</button>
                         </div>
                      </div>

                      <div className="NewOfferPageOfferDetails">
                         <div className="NewOfferPageOfferDetailsImage">
                           <img className="NewOffersPlanVacationBankImage" src="Images/NewOfferPage/axis.png"/>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>4000</h4>
                            <p>Actual Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3259</h4>
                            <p>Offer Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3 Months</h4>
                            <p>Tenture</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsButtons">
                            <button className="NewOfferPageOfferDetailsApplyButton">Apply Now</button>
                            <button  className="NewOfferPageOfferDetailsViewMoreButton">View More</button>
                         </div>
                      </div>

                      <div className="NewOfferPageOfferDetails">
                         <div className="NewOfferPageOfferDetailsImage">
                           <img className="NewOffersPlanVacationBankImage" src="Images/NewOfferPage/pnblogo.png"/>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>4000</h4>
                            <p>Actual Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3259</h4>
                            <p>Offer Price</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsPrice">
                            <h4>3 Months</h4>
                            <p>Tenture</p>
                         </div>
                         <div className="NewOfferPageOfferDetailsButtons">
                            <button className="NewOfferPageOfferDetailsApplyButton">Apply Now</button>
                            <button  className="NewOfferPageOfferDetailsViewMoreButton">View More</button>
                         </div>
                      </div>

                      <div className="NewOfferPageOfferDetailsShowMoreButton">
                         Load More Offers
                      </div>
                    </div>

                     
                </div>
             </div>
           </div>
        </>
    )
}
