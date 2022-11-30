import "./ActivitiesInnerWebPageCardsFilter.css"
import { FaStar } from "react-icons/fa";

export const ActivitiesInnerWebPageCardsFilter = () => {

    return (
            <>
              <div className="activitiesInnerWebPageCardsFilterContainer">
                <div className="activitiesInnerWebPageCardsFilterDiv">
                <div className='activitiesInnerWebpageDataFilter'>
                            <div className='activitiesInnerWebpageFilter1'>
                                  <p className='activitiesInnerWebpageStops'>Budget <sub style={{fontWeight:"100"}}>per person</sub></p>
                                  {/* <p>( 1000 - 5000 )</p> */}
                                  <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer"/>
                            </div>

                            <div className='activitiesInnerWebpageFilter2'>
                                  <p className='activitiesInnerWebpageStops'> Duration <sub style={{fontWeight:"100"}}>in Hour</sub></p>
                                  <div className='activitiesInnerWebpageDurations'>
                                    <select>
                                        <option value>0 Hours to 3 Hours</option>
                                        <option value="1">0 Hours to 3 Hours</option>
                                        <option value="2">3 Hours to 6 Hours</option>
                                        <option value="3">6 Hours to 9 Hours</option>
                                        <option value="3">9 Hours to 12 Hours</option>
                                    </select>
                                </div>
                                   
                            </div>

                            <div className='activitiesInnerWebpageFilter3'>
                                  <p className='activitiesInnerWebpageTime'>User ratings</p>
                                  <div className="activitiesInnerUserRatings">
                                    <div className="activitiesInnerRatings">
                                             3 <FaStar/>
                                             
                                    </div>
                                    <div className="activitiesInnerRatings">
                                             4 <FaStar/>
                                    </div>
                                    <div className="activitiesInnerRatings">
                                             5 <FaStar/>
                                    </div>
                                  </div>
                            </div>

                             <div className='activitiesInnerWebpageFilter4'>
                                  <p className='activitiesInnerWebpageStops'>Themes</p>
                                  <input type="radio" value="Air Asia"/>
                                  <label for="html">Romantic Destinations</label><br/>
                                  <input type="radio"   value="Indigo"/>
                                  <label for="css">Weekend Getaways</label><br/>
                                  <input type="radio" id="javascript"  value="Spice jet"/>
                                  <label for="javascript">Tour and SightSeeing</label><br/>
                                  <input type="radio"   value="Alliance Air"/>
                                  <label for="css">Cultural and Theme Tours</label><br/>
                                  <input type="radio" id="javascript"  value="Vistara"/>
                                  <label for="javascript">Walking and Biking Tours</label>
                            </div>

                            <div className='activitiesInnerWebpageFilter4'>
                                  <p className='activitiesInnerWebpageStops'>Activity type</p>
                                  <input type="radio" value="Air Asia"/>
                                  <label for="html">Trending Activity</label><br/>
                                  <input type="radio"   value="Indigo"/>
                                  <label for="css">Activity Around You</label><br/>
                                  <input type="radio" id="javascript"  value="Spice jet"/>
                                  <label for="javascript">Activity Around World</label><br/>
                                  <input type="radio"   value="Alliance Air"/>
                                  <label for="css">Adventure Activities</label><br/>
                                  <input type="radio" id="javascript"  value="Vistara"/>
                                  <label for="javascript">Love for Nature</label>
                            </div>

                            <div className='activitiesInnerWebpageFilter4'>
                                  <p className='activitiesInnerWebpageStops'>Cancellation</p>
                                  <input type="radio" value="Air Asia"/>
                                  <label for="html">Free Cancellation</label><br/>
                                  <input type="radio"   value="Indigo"/>
                                  <label for="css">Non-Refundable Cancellation</label><br/>
                            </div>

                            
                        </div>
                </div>
                <div className="activitiesInnerWebPageCardsDiv">
                   
                    <div className="activitiesInnerWebPageCardsContainer">
                        <div className="activitiesInnerWebPageCardsImage">
                            <img src="https://images-acme.mmtcdn.com/prod-acme-image/system/product_media/c/38584/media8MRGC27WR9CUV.jpg?imwidth=274"/>
                        </div>
                        <div className="activitiesInnerWebPageCardsHeadings">

                             <h3>Genting Highlands Day Trip from Kuala Lumpur with Skyway Cable Car Ride</h3>
                             <div className="activitiesInnerWebPageTimeRatings">
                                <button>Highest Rated</button> 
                                <button>Most Booked</button>
                             </div>
                             <p> Enjoy a day at Genting Highlands with your family and kids for fun rides and activities at the theme parks. Visit First World Plaza full with colorful shopping complex and restaurants, great place for food lovers and shoppers. </p>

                        </div>
                        <div className="activitiesInnerWebPageCardsButtons">
                            <p className="activitiesInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="activitiesInnerSemiHeadings2">Free Cancellation</p>
                            {/* <p> <s>4515</s> </p> */}
                            <h2>₹ 2569</h2>
                            <button className="activitiesInnerWebPageViewMoreButtons">View More</button>
                            <button className="activitiesInnerWebPageBookNowButtons">Book Now</button>
                        </div>
                    </div>

                    <div className="activitiesInnerWebPageCardsContainer">
                        <div className="activitiesInnerWebPageCardsImage">
                            <img src="https://images-acme.mmtcdn.com/prod-acme-image/system/product_media/c/38584/media8MRGC27WR9CUV.jpg?imwidth=274"/>
                        </div>
                        <div className="activitiesInnerWebPageCardsHeadings">

                             <h3>Genting Highlands Day Trip from Kuala Lumpur with Skyway Cable Car Ride</h3>
                             <div className="activitiesInnerWebPageTimeRatings">
                                <button>Highest Rated</button> 
                                <button>Most Booked</button>
                             </div>
                             <p> Enjoy a day at Genting Highlands with your family and kids for fun rides and activities at the theme parks. Visit First World Plaza full with colorful shopping complex and restaurants, great place for food lovers and shoppers. </p>

                        </div>
                        <div className="activitiesInnerWebPageCardsButtons">
                            <p className="activitiesInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="activitiesInnerSemiHeadings2">Free Cancellation</p>
                            {/* <p> <s>4515</s> </p> */}
                            <h2>₹ 2569</h2>
                            <button className="activitiesInnerWebPageViewMoreButtons">View More</button>
                            <button className="activitiesInnerWebPageBookNowButtons">Book Now</button>
                        </div>
                    </div>

                    <div className="activitiesInnerWebPageCardsContainer">
                        <div className="activitiesInnerWebPageCardsImage">
                            <img src="https://images-acme.mmtcdn.com/prod-acme-image/system/product_media/c/38584/media8MRGC27WR9CUV.jpg?imwidth=274"/>
                        </div>
                        <div className="activitiesInnerWebPageCardsHeadings">

                             <h3>Genting Highlands Day Trip from Kuala Lumpur with Skyway Cable Car Ride</h3>
                             <div className="activitiesInnerWebPageTimeRatings">
                                <button>Highest Rated</button> 
                                <button>Most Booked</button>
                             </div>
                             <p> Enjoy a day at Genting Highlands with your family and kids for fun rides and activities at the theme parks. Visit First World Plaza full with colorful shopping complex and restaurants, great place for food lovers and shoppers. </p>

                        </div>
                        <div className="activitiesInnerWebPageCardsButtons">
                            <p className="activitiesInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="activitiesInnerSemiHeadings2">Free Cancellation</p>
                            {/* <p> <s>4515</s> </p> */}
                            <h2>₹ 2569</h2>
                            <button className="activitiesInnerWebPageViewMoreButtons">View More</button>
                            <button className="activitiesInnerWebPageBookNowButtons">Book Now</button>
                        </div>
                    </div>

                    <div className="activitiesInnerWebPageCardsContainer">
                        <div className="activitiesInnerWebPageCardsImage">
                            <img src="https://images-acme.mmtcdn.com/prod-acme-image/system/product_media/c/38584/media8MRGC27WR9CUV.jpg?imwidth=274"/>
                        </div>
                        <div className="activitiesInnerWebPageCardsHeadings">

                             <h3>Genting Highlands Day Trip from Kuala Lumpur with Skyway Cable Car Ride</h3>
                             <div className="activitiesInnerWebPageTimeRatings">
                                <button>Highest Rated</button> 
                                <button>Most Booked</button>
                             </div>
                             <p> Enjoy a day at Genting Highlands with your family and kids for fun rides and activities at the theme parks. Visit First World Plaza full with colorful shopping complex and restaurants, great place for food lovers and shoppers. </p>

                        </div>
                        <div className="activitiesInnerWebPageCardsButtons">
                            <p className="activitiesInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="activitiesInnerSemiHeadings2">Free Cancellation</p>
                            {/* <p> <s>4515</s> </p> */}
                            <h2>₹ 2569</h2>
                            <button className="activitiesInnerWebPageViewMoreButtons">View More</button>
                            <button className="activitiesInnerWebPageBookNowButtons">Book Now</button>
                        </div>
                    </div>

                    <div className="activitiesInnerWebPageCardsContainer">
                        <div className="activitiesInnerWebPageCardsImage">
                            <img src="https://images-acme.mmtcdn.com/prod-acme-image/system/product_media/c/38584/media8MRGC27WR9CUV.jpg?imwidth=274"/>
                        </div>
                        <div className="activitiesInnerWebPageCardsHeadings">

                             <h3>Genting Highlands Day Trip from Kuala Lumpur with Skyway Cable Car Ride</h3>
                             <div className="activitiesInnerWebPageTimeRatings">
                                <button>Highest Rated</button> 
                                <button>Most Booked</button>
                             </div>
                             <p> Enjoy a day at Genting Highlands with your family and kids for fun rides and activities at the theme parks. Visit First World Plaza full with colorful shopping complex and restaurants, great place for food lovers and shoppers. </p>

                        </div>
                        <div className="activitiesInnerWebPageCardsButtons">
                            <p className="activitiesInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="activitiesInnerSemiHeadings2">Free Cancellation</p>
                            {/* <p> <s>4515</s> </p> */}
                            <h2>₹ 2569</h2>
                            <button className="activitiesInnerWebPageViewMoreButtons">View More</button>
                            <button className="activitiesInnerWebPageBookNowButtons">Book Now</button>
                        </div>
                    </div>

                    <button className='innerActivitiesShowButton'>Show More</button>
                </div>
              </div>
            </>
    );
}

