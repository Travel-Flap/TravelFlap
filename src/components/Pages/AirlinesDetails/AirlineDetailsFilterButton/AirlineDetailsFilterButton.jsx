import React from 'react';
import "./AirlineDetailsFilterButton.css";
import Accordion from 'react-bootstrap/Accordion';
import { BsGlobe2 } from "react-icons/bs";
import { FaStar, FaCalendar } from "react-icons/fa";
import { FaWhatsapp, FaPhoneAlt, FaRegClock } from "react-icons/fa";

export const AirlineDetailsFilterButton = () => {
    return (
        <>
            <div className="airlinesDetailsButtonsDetails">
                <div className="airlinesDetailsButtonsOuterDiv">
                    <div className="airlinesDetailsButtonsDiv1 airlinesDetailsButtonsDiv">
                        <a href="#airlinesDetailsDetailsOverviewSection">  Overview </a>
                    </div>

                    <div className="airlinesDetailsButtonsDiv2 airlinesDetailsButtonsDiv">
                        <a href="#airlinesDetailsDetailsLocationSection"> Reviews </a>
                    </div>

                    <div className="airlinesDetailsButtonsDiv3 airlinesDetailsButtonsDiv">
                        <a href="#airlinesDetailsDetailsHighlightSection"> FAQ </a>
                    </div>
                    {/* <div className="airlinesDetailsButtonsDiv4 airlinesDetailsButtonsDiv">
                        <a href="#airlinesDetailsDetailsPackageSection"> Package section </a>
                    </div>
                    <div className="airlinesDetailsButtonsDiv5 airlinesDetailsButtonsDiv">
                        <a href="#airlinesDetailsDetailsReviewSection">User Reviews</a>
                    </div>
                    <div className="airlinesDetailsButtonsDiv6 airlinesDetailsButtonsDiv">
                        <a href="#airlinesDetailsDetailsExtraSection">Extras</a>
                    </div> */}
                </div>


                <div className="airlinesDetailsDetailsOuterDiv">
                    <div className="airlinesDetailsDetailsMainDiv">
                        <div id="airlinesDetailsDetailsOverviewSection">
                            <h3> United Airlines Contact information </h3>

                            <div className="airlinesDetailsRefundDates">
                                <div className='airlineDetailsCodeName'>
                                    <p className='airlineDetailsCodeNameBold'> UA
                                        <p> IATA code </p>
                                    </p>
                                </div>

                                <div className='airlineDetailsGlobeIcon'>
                                    <BsGlobe2 style={{ fontSize: "22px", color: "#3380f2", position: "absolute", top:"10%" }} />
                                </div>

                                <div className='airlineDetailsWebsite'>
                                    <p className='airlinesWebsiteContent'> united.com </p>
                                </div>

                                <div className='airlinesDetailsImage'>
                                    <img src='/Images/NewHomeLayout/AirlinesDetails/UA.png' alt='image' />
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

                                <p style={{ marginTop: "2%" }}>
                                    Enjoy a day at Genting Highlands with your family and kids for fun rides and activities at the theme parks. Visit First World Plaza full with colorful shopping complex and restaurants, great place for food lovers and shoppers.
                                    - An adventure to the hidden resort world of Genting Highlands
                                    - Panoramic views from your perch on Gunung Ulu Kali's peak
                                    - Spectacular views from the Genting Skyway cable-car ride
                                    - English-speaking driver & comfortable roundtrip transfer
                                    - Action-packed day exploring
                                </p>

                                <p style={{ marginTop: "2%" }}>
                                    Enjoy a day at Genting Highlands with your family and kids for fun rides and activities at the theme parks. Visit First World Plaza full with colorful shopping complex and restaurants, great place for food lovers and shoppers.
                                    - An adventure to the hidden resort world of Genting Highlands
                                    - Panoramic views from your perch on Gunung Ulu Kali's peak
                                    - Spectacular views from the Genting Skyway cable-car ride
                                    - English-speaking driver & comfortable roundtrip transfer
                                    - Action-packed day exploring
                                </p>
                            </p>
                        </div>

                        <div className='airlinesInfoMainDiv'>
                            <h3> United Airlines information </h3>

                            <div className='airlinesInfoInnerDiv'>
                                <div className='airlinesInfoSubDiv1'>
                                    <ul>
                                        <li> IATA code </li>
                                        <li> Routes </li>
                                        <li> Top route </li>
                                        <li> Airports served </li>
                                        <li> Top airport </li>
                                    </ul>
                                </div>

                                <div className='airlinesInfoSubDiv2'>
                                    <ul>
                                        <li> UA </li>
                                        <li> 1440 </li>
                                        <li> Newark to Oriando </li>
                                        <li> 230 </li>
                                        <li> Newark </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="airlinesDetailsDetailsLocationSection">
                            <div className='airlineDetailsReviewsOuterDiv'>
                                <h3> Traveller reviews </h3>

                                <div className='airlinesDetailsReviewInnerDiv'>
                                    <div className='airlinesDetaillsReviewSubDiv1'>
                                        <div className='airlineDetailsSubDiv1Heading'>
                                            <p> Boarding </p>
                                        </div>

                                        <div className='airlineSubDiv1Range'>
                                            <div className="progress">
                                                <div className="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                        <div className='airlineSubDivValue'>
                                            <p> 7.2 </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='airlinesDetailsReviewInnerDiv'>
                                    <div className='airlinesDetaillsReviewSubDiv1'>
                                        <div className='airlineDetailsSubDiv1Heading'>
                                            <p> Comfort </p>
                                        </div>

                                        <div className='airlineSubDiv1Range'>
                                            <div class="progress">
                                                <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                        <div className='airlineSubDivValue'>
                                            <p> 6.7 </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='airlinesDetailsReviewInnerDiv'>
                                    <div className='airlinesDetaillsReviewSubDiv1'>
                                        <div className='airlineDetailsSubDiv1Heading'>
                                            <p> Crew </p>
                                        </div>

                                        <div className='airlineSubDiv1Range'>
                                            <div className="progress">
                                                <div className="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                        <div className='airlineSubDivValue'>
                                            <p> 7.7 </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='airlinesDetailsReviewInnerDiv'>
                                    <div className='airlinesDetaillsReviewSubDiv1'>
                                        <div className='airlineDetailsSubDiv1Heading'>
                                            <p> Entertainment </p>
                                        </div>

                                        <div className='airlineSubDiv1Range'>
                                            <div className="progress">
                                                <div className="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                        <div className='airlineSubDivValue'>
                                            <p> 6.5 </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='airlinesDetailsReviewInnerDiv'>
                                    <div className='airlinesDetaillsReviewSubDiv1'>
                                        <div className='airlineDetailsSubDiv1Heading'>
                                            <p> Food </p>
                                        </div>

                                        <div className='airlineSubDiv1Range'>
                                            <div className="progress">
                                                <div className="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                        <div className='airlineSubDivValue'>
                                            <p> 6.0 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="airlinesDetailsDetailsHighlightSection">
                            <h5> United Airlines FAQ </h5>
                            <Accordion className='hotelsData_dropdowncontext'>
                                <Accordion.Item className='hotelsData_dropdowncontext' eventKey="0">
                                    <Accordion.Header className='hotelsData_dropdowncontext' style={{ backgroundColor: "white" }}>Delhi </Accordion.Header>
                                    <Accordion.Body className='hotelsData_dropdowncontext'>
                                        To book your car, all you need is a credit or debit card. When you pick the car up, you'll need:
                                        <ul>
                                            <li className='list_tags'>
                                                The main driver's credit / debit card, with enough available funds for the car's deposit.
                                            </li>
                                            <li>
                                                Each driver's full, valid driving licence, which they've held for at least 12 months (often 24).
                                            </li>

                                            <li>
                                                Your passport and any other ID the car hire company needs to see.
                                            </li>

                                        </ul>

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item className='hotelsData_dropdowncontext' eventKey="1">
                                    <Accordion.Header> Haryana  </Accordion.Header>
                                    <Accordion.Body>
                                        To book your car, all you need is a credit or debit card. When you pick the car up, you'll need:

                                        For most car hire companies, the age requirement is between 21 and 70 years old. If you're under 25 or over 70,
                                        you might have to pay an additional fee.

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item className='hotelsData_dropdowncontext' eventKey="2">
                                    <Accordion.Header> Chandigarh  </Accordion.Header>
                                    <Accordion.Body>

                                        Yes, as long as they meet these requirements. Just fill in their details while you're making the reservation.

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item className='hotelsData_dropdowncontext' eventKey="3">
                                    <Accordion.Header> Himachal Pradesh </Accordion.Header>
                                    <Accordion.Body>

                                        We work with all the major international car hire brands (and lots of smaller local companies)
                                        to bring you a huge choice of cars at the very best prices. That's how we can find you cheap car
                                        hire deals at over 60,000 locations worldwide. To compare prices and find your ideal car at an unbeatable price, just use our search form.

                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item className='hotelsData_dropdowncontext' eventKey="4">
                                    <Accordion.Header> Jammu & Kashmir
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li className='list_tags'>
                                                Space: You'll enjoy your rental far more if you choose a car with plenty of room for your passengers and luggage.
                                            </li>
                                            <li>
                                                Fuel policy: Not planning on driving much? A Like for like fuel policy can save you a lot of money.
                                            </li>

                                            <li>
                                                Location: You can't beat an 'on-airport' pick-up for convenience, but an 'off-airport' pick-up with a shuttle bus can be much cheaper.
                                            </li>

                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item className='hotelsData_dropdowncontext' eventKey="5">
                                    <Accordion.Header> Nagaland  </Accordion.Header>
                                    <Accordion.Body>

                                        The vast majority of our rentals include Theft Protection, Collision Damage Waiver (CDW), local taxes,
                                        airport surcharges and any road fees. You'll pay for any ‘extras' when you pick your car up, along
                                        with any young driver, additional driver or one-way fees – but we'll explain any additional costs
                                        before you book your car (and taking your own child seats or GPS can be an easy way to reduce your
                                        costs). For more details on what's included, just check the Ts&Cs of any car you're looking at.

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        {/* <div id="airlinesDetailsDetailsPackageSection">
                            <h4 className="airlinesDetailsPackageHeading">Packages</h4>
                            <div className="activitiesChildInnermainDiv">
                                <div className="activitieschildPackageDate">
                                    <div className="activitieschildPackageDatecalender">
                                        Travel date <FaCalendar size={"1.5em"} className="calenderIconActiviesInner" />
                                    </div>
                                    <div className="activitieschildPackageTravellers">
                                        Travellers
                                    </div>
                                </div>
                                <div className="airlinesDetailsPackages">
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
                                <div className="airlinesDetailsPackages">
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
                        </div>

                        <div id="airlinesDetailsDetailsReviewSection">
                            <div className="airlinesDetailsDetailsReviewDetails">
                                <div className="airlinesDetailsDetailsReviewHeadings">
                                    Reviews from Our Valuable Customers
                                </div>
                                <div className="airlinesDetailsDetailsReviewStars">
                                    (4.5) <FaStar />  <FaStar /> <FaStar /> <FaStar />
                                </div>
                                <div className="airlinesDetailsDetailsReviewButtons">
                                    <p>459 reviews</p>
                                    <button className="activitieschildAllReviewButton">All</button>
                                    <button className="activitieschildLatestReviewButton">Latest</button>
                                    <button className="activitieschildOldestReviewButton">Oldest</button>
                                </div>
                            </div>

                            <div className="activitiesChildReviews">
                                <div className="activitiesChildReviewsBox">
                                    <div className="airlinesDetailsDetailsReviewStars">
                                        <FaStar />  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </div>
                                    <div className="airlinesDetailsDetailsReview">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat asperiores quidem aspernatur. Odit, ea. Tenetur iure nisi perspiciatis laudantium alias veniam, nobis quia deleniti voluptas non nam hic rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo, recusandae facere minus molestias illum quos optio quod dignissimos ipsum, ratione magni blanditiis distinctio veniam deserunt dolore ipsa ex saepe.
                                    </div>
                                    <div className="airlinesDetailsDetailsCustomerName">
                                        Max Andrew
                                    </div>
                                    <div className="airlinesDetailsDetailsdate">
                                        29 Nov 2022
                                    </div>
                                </div>

                                <div className="activitiesChildReviewsBox">
                                    <div className="airlinesDetailsDetailsReviewStars">
                                        <FaStar />  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </div>
                                    <div className="airlinesDetailsDetailsReview">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat asperiores quidem aspernatur. Odit, ea. Tenetur iure nisi perspiciatis laudantium alias veniam, nobis quia deleniti voluptas non nam hic rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo, recusandae facere minus molestias illum quos optio quod dignissimos ipsum, ratione magni blanditiis distinctio veniam deserunt dolore ipsa ex saepe.
                                    </div>
                                    <div className="airlinesDetailsDetailsCustomerName">
                                        Max Andrew
                                    </div>
                                    <div className="airlinesDetailsDetailsdate">
                                        29 Nov 2022
                                    </div>
                                </div>

                                <div className="activitiesChildReviewsBox">
                                    <div className="airlinesDetailsDetailsReviewStars">
                                        <FaStar />  <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                    </div>
                                    <div className="airlinesDetailsDetailsReview">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat asperiores quidem aspernatur. Odit, ea. Tenetur iure nisi perspiciatis laudantium alias veniam, nobis quia deleniti voluptas non nam hic rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo, recusandae facere minus molestias illum quos optio quod dignissimos ipsum, ratione magni blanditiis distinctio veniam deserunt dolore ipsa ex saepe.
                                    </div>
                                    <div className="airlinesDetailsDetailsCustomerName">
                                        Max Andrew
                                    </div>
                                    <div className="airlinesDetailsDetailsdate">
                                        29 Nov 2022
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="airlinesDetailsBookingDiv">

                        <div className="airlinesDetailsBookingDates">
                            <h5>Select,Date,Time and Travellers</h5>
                            <div className="airlinesDetailsDate">
                                Choose Date
                            </div>
                            <div className="airlinesDetailsTime">
                                Choose Time
                            </div>
                            <div className="activitiesChildinnerPrice">
                                ₹ 315 <p>Per Person</p>
                            </div>
                            <div className="activitiesChildinnerBookNowButton">Book Now</div>
                        </div>

                        <div className="airlinesDetailsBookingContact">
                            <button className='activitiesinnerchildApplyButton'> <FaWhatsapp size="1.2em" style={{ marginRight: "3%" }} /> Visa On WhatsApp</button>
                            <button className='activitiesinnerchildApplyButton'> <FaPhoneAlt size="1.2em" style={{ marginRight: "3%" }} /> Call Us On</button>
                            <button className='activitiesinnerchildApplyButton'> <FaRegClock size="1.2em" style={{ marginRight: "3%" }} /> 9:00AM to 9:00PM</button>
                        </div>

                    </div> */}
                </div>
            </div>
        </>
    )
}
