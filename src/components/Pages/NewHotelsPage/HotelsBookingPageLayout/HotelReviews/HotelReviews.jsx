import React from 'react';
import "./HotelReviews.css";
import { AiFillStar } from "react-icons/ai";

export const HotelReviews = () => {
    return (
        <>
            <div className='hotelReviewOuterDiv'>
                <h3> Our reviews from valuable customer's  </h3>
            </div>
            <div className='hotelBookingStarRatingDiv'>
                <h3>(4.5) < AiFillStar style={{ fontSize: 20 }} /> < AiFillStar style={{ fontSize: 20 }} />
                    < AiFillStar style={{ fontSize: 20 }} /> < AiFillStar style={{ fontSize: 20 }} />
                    < AiFillStar style={{ fontSize: 20 }} />
                </h3>
            </div>

            <div className='hotelBookingReviewButtonDiv'>
                <h5>123 reviews</h5>

                <div className='hotelBookingReviewButton'>
                    <div class="btn-group hotelBookingReviewButtonMainDiv" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingReviewButton1" for="btnradio1"> All </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingReviewButton2" for="btnradio2"> Latest </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingReviewButton3" for="btnradio3"> Positive </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingReviewButton4" for="btnradio4"> Negative </label>

                        {/* <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingReviewButton5" for="btnradio4"> Beach Hotel </label> */}
                    </div>
                    {/* <div class="btn-group hotelBookingReviewInnerButtonDiv" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                        <label class="btn btn-outline-primary hotelBookingReviewButton1" for="btnradio1"> All </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingReviewButton2" for="btnradio2"> Latest </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingReviewButton3" for="btnradio3"> Positive </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingReviewButton4" for="btnradio3"> Negative </label>
                    </div> */}
                </div>
            </div>

            <div className='hotelBookingReviewTextContainer'>
                <div className='hotelBookingReviewInnerDiv'>
                    <div className='hotelBookingClientStarRating'>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                    </div>
                    <div className='hotelBookingClientReviewContent'>
                        <p>Everything is great except for two things 1. Lot of loud drunkards making loud noise during the weekend starting Friday night.
                            It’s quite calm during the weekdays. 2. No kettle/coffee maker. May not be a big deal for most people but for some, like me,
                            it’s extremely hard. Like I said except for these two everything else is great. Highly recommended.
                        </p>

                        <h5>Sanket Parek</h5>
                        <p className='hotelBookingReviewDate'>Nov,2022</p>
                    </div>
                </div>

                <div className='hotelBookingReviewInnerDiv'>
                    <div className='hotelBookingClientStarRating'>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                    </div>
                    <div className='hotelBookingClientReviewContent'>
                        <p>Everything is great except for two things 1. Lot of loud drunkards making loud noise during the weekend starting Friday night.
                            It’s quite calm during the weekdays. 2. No kettle/coffee maker. May not be a big deal for most people but for some, like me,
                            it’s extremely hard. Like I said except for these two everything else is great. Highly recommended.
                        </p>

                        <h5> Aman Gupta </h5>
                        <p className='hotelBookingReviewDate'>Nov,2022</p>
                    </div>
                </div>

                <div className='hotelBookingReviewInnerDiv'>
                    <div className='hotelBookingClientStarRating'>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                    </div>
                    <div className='hotelBookingClientReviewContent'>
                        <p>Everything is great except for two things 1. Lot of loud drunkards making loud noise during the weekend starting Friday night.
                            It’s quite calm during the weekdays. 2. No kettle/coffee maker. May not be a big deal for most people but for some, like me,
                            it’s extremely hard. Like I said except for these two everything else is great. Highly recommended.
                        </p>

                        <h5> Manav Sharma </h5>
                        <p className='hotelBookingReviewDate'>Nov,2022</p>
                    </div>
                </div>

                <div className='hotelBookingReviewInnerDiv'>
                    <div className='hotelBookingClientStarRating'>
                        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                    </div>
                    <div className='hotelBookingClientReviewContent'>
                        <p>Everything is great except for two things 1. Lot of loud drunkards making loud noise during the weekend starting Friday night.
                            It’s quite calm during the weekdays. 2. No kettle/coffee maker. May not be a big deal for most people but for some, like me,
                            it’s extremely hard. Like I said except for these two everything else is great. Highly recommended.
                        </p>

                        <h5> Sharman Rathore </h5>
                        <p className='hotelBookingReviewDate'>Nov,2022</p>
                    </div>
                </div>

                <div className='hotelBookingMoreClientReviews'>
                    <h5>More Reviews</h5>
                </div>
            </div>
        </>
    )
}
