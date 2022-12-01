import "./ActivitiesChildInnerPageButtonsDetails.css";
import { FaStar } from "react-icons/fa";
import { FaWhatsapp,FaPhoneAlt,FaRegClock } from "react-icons/fa";


export const ActivitiesChildInnerPageButtonsDetails = () => {

    return (

            <>
            <div className="activitiesChildInnerPageButtonsDetails">
                <div className="activitiesChildInnerPageButtonsOuterDiv">
                        <div className="activitiesChildInnerPageButtonsDiv1 activitiesChildInnerPageButtonsDiv">
                            <a href="#activitiesChildInnerPageDetailsOverviewSection">  Overview and Iternary </a>
                        </div>
                        <div className="activitiesChildInnerPageButtonsDiv2 activitiesChildInnerPageButtonsDiv">
                             <a href="#activitiesChildInnerPageDetailsLocationSection"> Location </a>
                        </div>
                        <div className="activitiesChildInnerPageButtonsDiv3 activitiesChildInnerPageButtonsDiv">
                             <a href="#activitiesChildInnerPageDetailsHighlightSection"> Highlights </a>
                        </div>
                        <div className="activitiesChildInnerPageButtonsDiv4 activitiesChildInnerPageButtonsDiv">
                            <a href="#activitiesChildInnerPageDetailsPackageSection"> Package section </a>
                        </div>
                        <div className="activitiesChildInnerPageButtonsDiv5 activitiesChildInnerPageButtonsDiv">
                            <a href="#activitiesChildInnerPageDetailsReviewSection">User Reviews</a>
                        </div>
                        <div className="activitiesChildInnerPageButtonsDiv6 activitiesChildInnerPageButtonsDiv">
                            <a href="#activitiesChildInnerPageDetailsExtraSection">Extras</a>
                        </div>
                </div>


                <div className="activitiesChildInnerPageDetailsOuterDiv">
                    <div className="activitiesChildInnerPageDetailsMainDiv">
                        <div id="activitiesChildInnerPageDetailsOverviewSection">
                            <h3>About The Activity</h3>
                            <div className="activitiesChildInnerPageRefundDates">
                                <div className="activitiesChildInnerPageRefund">
                                    <h6>Non Refundable</h6>
                                    <p>Incase Tours and Tickets get Cancelled after booking 100% charge will be applicable</p>
                                </div>
                                <div className="activitiesChildInnerPageDates">
                                    <h6>90 Minutes</h6>
                                    <p>Check availability to check  starting times</p>
                                </div>
                            </div>
                            <h4>  Overview </h4>
                            <p>
                                Enjoy a day at Genting Highlands with your family and kids for fun rides and activities at the theme parks. Visit First World Plaza full with colorful shopping complex and restaurants, great place for food lovers and shoppers.
                                - An adventure to the hidden resort world of Genting Highlands
                                - Panoramic views from your perch on Gunung Ulu Kali's peak
                                - Spectacular views from the Genting Skyway cable-car ride
                                - English-speaking driver & comfortable roundtrip transfer
                                - Action-packed day exploring
                            </p>
                        </div>
                        <div id="activitiesChildInnerPageDetailsLocationSection">
                            <div className="activitiesChildInnerPageDetailsLocationHeading">
                                <h4>Location : </h4> <p>Kuala Lumpur , Malayasia</p>
                            </div>
                            <div className="activitiesChildInnerPageDetailsLocation">
                                <img className="activitiesChildInnerPageDetailsLocationImage" src="Images/ActivitiesInnerPage/mapimage.png"/>
                            </div>
                            <div className="activitiesChildInnerGetDirection">
                                Get Direction
                            </div>
                        </div>
                        <div id="activitiesChildInnerPageDetailsHighlightSection">
                            <h5>Highlights</h5>
                            <ul>
                                <li className="activitiesChildInnerHighlights">Enjoy a day away from hustle and  bustle of the city</li>
                                <li className="activitiesChildInnerHighlights">Enjoy Fantastic aerial views</li>
                                <li className="activitiesChildInnerHighlights">Popular choice for Kids</li>
                                <li className="activitiesChildInnerHighlights">Family Friendly</li>
                                <li className="activitiesChildInnerHighlights">Informative,friendly and professional guide.</li>
                            </ul>
                        </div>
                        <div id="activitiesChildInnerPageDetailsPackageSection">
                            <h4 className="activitiesChildInnerPagePackageHeading">Packages</h4>
                            <div className="activitiesChildInnerPagePackages">
                                <div className="activitiesChildPackageName">
                                    <h6>MidNight Cycling Tour (Bring your own Bicycle) </h6>
                                    <p>Duration:5 Hours</p>
                                </div>
                                <div className="activitiesChildPackageRate">
                                    <h4>₹ 359</h4>
                                    <p>Per Person</p>
                                    <button className="activitiesChildPackageRateButton">Select</button>
                                </div>
                            </div>
                            <div className="activitiesChildInnerPagePackages">
                                <div className="activitiesChildPackageName">
                                    <h6>MidNight Cycling Tour (Bring your own Bicycle) </h6>
                                    <p>Duration:5 Hours</p>
                                </div>
                                <div className="activitiesChildPackageRate">
                                    <h4>₹ 359</h4>
                                    <p>Per Person</p>
                                    <button className="activitiesChildPackageRateButton">Select</button>
                                </div>
                            </div>
                        </div>
                        <div id="activitiesChildInnerPageDetailsReviewSection">
                            <div className="activitiesChildInnerPageDetailsReviewDetails">
                                <div className="activitiesChildInnerPageDetailsReviewHeadings">
                                    Reviews from Our Valuable Customers
                                </div>
                                <div className="activitiesChildInnerPageDetailsReviewStars">
                                    (4.5) <FaStar/>  <FaStar/> <FaStar/> <FaStar/>
                                </div>
                                <div className="activitiesChildInnerPageDetailsReviewButtons">
                                    <p>459 reviews</p>
                                    <button className="activitieschildAllReviewButton">All</button>
                                    <button className="activitieschildLatestReviewButton">Latest</button>
                                    <button className="activitieschildOldestReviewButton">Oldest</button>
                                </div>
                            </div>

                            <div className="activitiesChildReviews">
                                <div className="activitiesChildReviewsBox">
                                    <div className="activitiesChildInnerPageDetailsReviewStars">
                                        <FaStar/>  <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                    </div>
                                    <div className="activitiesChildInnerPageDetailsReview">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat asperiores quidem aspernatur. Odit, ea. Tenetur iure nisi perspiciatis laudantium alias veniam, nobis quia deleniti voluptas non nam hic rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo, recusandae facere minus molestias illum quos optio quod dignissimos ipsum, ratione magni blanditiis distinctio veniam deserunt dolore ipsa ex saepe.
                                    </div>
                                    <div className="activitiesChildInnerPageDetailsCustomerName">
                                        Max Andrew
                                    </div>
                                    <div className="activitiesChildInnerPageDetailsdate">
                                        29 Nov 2022
                                    </div>
                                </div>

                                <div className="activitiesChildReviewsBox">
                                    <div className="activitiesChildInnerPageDetailsReviewStars">
                                        <FaStar/>  <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                    </div>
                                    <div className="activitiesChildInnerPageDetailsReview">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat asperiores quidem aspernatur. Odit, ea. Tenetur iure nisi perspiciatis laudantium alias veniam, nobis quia deleniti voluptas non nam hic rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo, recusandae facere minus molestias illum quos optio quod dignissimos ipsum, ratione magni blanditiis distinctio veniam deserunt dolore ipsa ex saepe.
                                    </div>
                                    <div className="activitiesChildInnerPageDetailsCustomerName">
                                        Max Andrew
                                    </div>
                                    <div className="activitiesChildInnerPageDetailsdate">
                                        29 Nov 2022
                                    </div>
                                </div>

                                <div className="activitiesChildReviewsBox">
                                    <div className="activitiesChildInnerPageDetailsReviewStars">
                                        <FaStar/>  <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                    </div>
                                    <div className="activitiesChildInnerPageDetailsReview">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat asperiores quidem aspernatur. Odit, ea. Tenetur iure nisi perspiciatis laudantium alias veniam, nobis quia deleniti voluptas non nam hic rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo, recusandae facere minus molestias illum quos optio quod dignissimos ipsum, ratione magni blanditiis distinctio veniam deserunt dolore ipsa ex saepe.
                                    </div>
                                    <div className="activitiesChildInnerPageDetailsCustomerName">
                                        Max Andrew
                                    </div>
                                    <div className="activitiesChildInnerPageDetailsdate">
                                        29 Nov 2022
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="activitiesChildInnerPageDetailsExtraSection">
                            
                        </div>
                    </div>
                    <div className="activitiesChildInnerPageBookingDiv">
                    <div className='innervisadetailsform'>
                <h1>Contact Us</h1>
                <input type="text" placeholder='Email ID' className='innervisadetailforminputs'/> <br/>
                <input type="text" placeholder='Contact Number' className='innervisadetailforminputs'/><br/>
               
                <button className='innervisadetailsapplybutton'>Let Us Call You</button>
                <button className='innervisadetailsapplybutton'> <FaWhatsapp size="1.2em" style={{marginRight:"3%"}}/> Visa On WhatsApp</button>
                <button className='innervisadetailsapplybutton'> <FaPhoneAlt size="1.2em" style={{marginRight:"3%"}}/> Call Us On</button>
                <button className='innervisadetailsapplybutton'> <FaRegClock size="1.2em" style={{marginRight:"3%"}}/> 9:00AM to 9:00PM</button>
            </div>
                    </div>
                </div>
            </div>
            </>
    );
}

