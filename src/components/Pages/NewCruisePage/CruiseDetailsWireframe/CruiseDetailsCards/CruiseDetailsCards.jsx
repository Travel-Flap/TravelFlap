import "./CruiseDetailsCards.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export const CruiseDetailsCards = () => {

    return (
        <>
            <div className="cruiseDetailsInnerWebPageCardsFilterContainer">
                <div className="cruiseDetailsInnerWebPageCardsFilterDiv">
                    <div className='cruiseDetailsInnerWebpageDataFilter'>
                        <div className='cruiseDetailsInnerWebpageFilter1'>
                            <p className='cruiseDetailsInnerWebpageStops'>Budget <sub style={{ fontWeight: "100" }}>per person</sub></p>
                            {/* <p>( 1000 - 5000 )</p> */}
                            <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer" />
                        </div>

                        {/* <div className='cruiseDetailsInnerWebpageFilter2'>
                            <p className='cruiseDetailsInnerWebpageStops'> Duration <sub style={{ fontWeight: "100" }}>in Hour</sub></p>
                            <div className='cruiseDetailsInnerWebpageDurations'>
                                <select>
                                    <option value>0 Hours to 3 Hours</option>
                                    <option value="1">0 Hours to 3 Hours</option>
                                    <option value="2">3 Hours to 6 Hours</option>
                                    <option value="3">6 Hours to 9 Hours</option>
                                    <option value="3">9 Hours to 12 Hours</option>
                                </select>
                            </div>

                        </div> */}

                        {/* <div className='cruiseDetailsInnerWebpageFilter3'>
                            <p className='cruiseDetailsInnerWebpageTime'>User ratings</p>
                            <div className="cruiseDetailsInnerUserRatings">
                                <div className="cruiseDetailsInnerRatings">
                                    3 <FaStar />

                                </div>
                                <div className="cruiseDetailsInnerRatings">
                                    4 <FaStar />
                                </div>
                                <div className="cruiseDetailsInnerRatings">
                                    5 <FaStar />
                                </div>
                            </div>
                        </div> */}

                        <div className='cruiseDetailsInnerWebpageFilter4'>
                            <p className='cruiseDetailsInnerWebpageStops'> Cruise Length </p>
                            <input type="checkbox" id="javascript" value="Vistara" />
                            <label for="javascript"> 3 nights </label>
                            <br />
                            <input type="checkbox" value="Air Asia" />
                            <label for="html"> 5 nights </label>
                            <br />
                            <input type="checkbox" value="Indigo" />
                            <label for="css"> 7 nights </label>
                            <br />
                            <input type="checkbox" id="javascript" value="Spice jet" />
                            <label for="javascript"> 10 nights</label>
                            <br />
                            <input type="checkbox" value="Alliance Air" />
                            <label for="css"> 15 nights </label>
                            <br />
                        </div>

                        <div className='cruiseDetailsInnerWebpageFilter4'>
                            <p className='cruiseDetailsInnerWebpageStops'> Depart Port </p>
                            <input type="checkbox" value="Air Asia" />
                            <label for="html"> Mumbai Port </label>
                            <br />
                            <input type="checkbox" value="Indigo" />
                            <label for="css"> Goa Port </label>
                            <br />
                            <input type="checkbox" id="javascript" value="Spice jet" />
                            <label for="javascript"> Kochi Port </label>
                            <br />
                            <input type="checkbox" value="Alliance Air" />
                            <label for="css"> Chennai Port </label>
                            <br />
                            <input type="checkbox" id="javascript" value="Vistara" />
                            <label for="javascript"> Thiruvananthapuram Port </label>
                        </div>

                        <div className='cruiseDetailsInnerWebpageFilter4'>
                            <p className='cruiseDetailsInnerWebpageStops'> Ships </p>
                            <input type="checkbox" value="Air Asia" />
                            <label for="html"> Empress </label>
                            <br />
                            <input type="checkbox" value="Indigo" />
                            <label for="css">  Norwegian Bliss </label>
                            <br />
                            <input type="checkbox" id="javascript" value="Spice jet" />
                            <label for="javascript"> Norwegian Bliss </label>
                            <br />
                            <input type="checkbox" value="Alliance Air" />
                            <label for="css"> Norwegian Bliss </label>
                            <br />
                        </div>

                        <div className='cruiseDetailsInnerWebpageFilter4'>
                            <p className='cruiseDetailsInnerWebpageStops'> Type </p>
                            <input type="checkbox" value="Air Asia" />
                            <label for="html"> Trending </label>
                            <br />
                            <input type="checkbox" value="Indigo" />
                            <label for="css"> International </label>
                            <br />
                            <input type="checkbox" value="Indigo" />
                            <label for="css"> Domestic </label>
                            <br />
                        </div>

                        <div className='cruiseDetailsInnerWebpageFilter4'>
                            <p className='cruiseDetailsInnerWebpageStops'>Cancellation</p>
                            <input type="checkbox" value="Air Asia" />
                            <label for="html">Free Cancellation</label>
                            <br />
                            <input type="checkbox" value="Indigo" />
                            <label for="css">Non-Refundable Cancellation</label>
                            <br />
                        </div>


                    </div>
                </div>

                <div className="cruiseDetailsInnerWebPageCardsDiv">

                    <div className="cruiseDetailsInnerWebPageCardsContainer">
                        <Link to="/cruiseBookingPage">
                            <div className="cruiseDetailsInnerWebPageCardsImage">
                                <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseShipImage.png" alt="ship image" />
                            </div>
                        </Link>

                        <div className="cruiseDetailsInnerWebPageCardsHeadings">
                            <div className="cruiseDetailsInnerContentDiv">
                                <div className="cruiseDetailsInnerContentSubDiv1">
                                    <div className="cruiseDetailsContentDetailsIcons">
                                        <div className="cruiseDetailsMoonIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/night-mode.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsBoatIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/boat.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation1Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation2Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>
                                    </div>

                                    <div className="cruiseDetailsContentDetailsDiv">
                                        <p className="cruiseDetailsMoonDetails"> 2 Nights </p>
                                        <p className="cruiseDetailsBoatDetails"> Cordella Cruises / EMPRESS </p>
                                        <p className="cruiseDetailsLocation1Details"> <span> Start: </span> Chennai (port of departure) - Chennai
                                            - At Sea - Hambantota </p>
                                        <p className="cruiseDetailsLocation2Details"> <span> End: </span> Hambantota(port of arrival)</p>
                                    </div>
                                </div>

                                <div className="cruiseDetailsInnerContentSubDiv2">
                                    <div className="cruiseDetailsCompayLogo">
                                        <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseCompany.png" alt="company logo" />
                                    </div>

                                    <div className="cruiseDetailsCruisePriceContent">
                                        <p> Starting Price </p>
                                    </div>

                                    <div className="cruiseDetailsCruisePrice">
                                        <h3> ₹41,200 </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="cruiseDetailsInnerButtonDiv">
                                <Link to="/cruiseBookingPage" style={{textDecoration:"none"}}> <button className="btn btn-primary cruiseDetailsViewDealsBtn"> View Details </button> </Link>
                                <button className="btn btn-primary cruiseDetailsBookNowBtn"> Book now </button>
                            </div>
                        </div>

                        {/* <div className="cruiseDetailsInnerWebPageCardsButtons">
                            <p className="cruiseDetailsInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="cruiseDetailsInnerSemiHeadings2">Free Cancellation</p>
                            <h2>₹ 2569</h2>
                            <button className="cruiseDetailsInnerWebPageViewMoreButtons">View More</button>
                            <button className="cruiseDetailsInnerWebPageBookNowButtons">Book Now</button>
                        </div> */}
                    </div>

                    <div className="cruiseDetailsInnerWebPageCardsContainer">
                        <Link to="/cruiseBookingPage">
                            <div className="cruiseDetailsInnerWebPageCardsImage">
                                <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseShipImage.png" alt="ship image" />
                            </div>
                        </Link>

                        <div className="cruiseDetailsInnerWebPageCardsHeadings">
                            <div className="cruiseDetailsInnerContentDiv">
                                <div className="cruiseDetailsInnerContentSubDiv1">
                                    <div className="cruiseDetailsContentDetailsIcons">
                                        <div className="cruiseDetailsMoonIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/night-mode.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsBoatIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/boat.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation1Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation2Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>
                                    </div>

                                    <div className="cruiseDetailsContentDetailsDiv">
                                        <p className="cruiseDetailsMoonDetails"> 2 Nights </p>
                                        <p className="cruiseDetailsBoatDetails"> Cordella Cruises / EMPRESS </p>
                                        <p className="cruiseDetailsLocation1Details"> <span> Start: </span> Chennai (port of departure) - Chennai
                                            - At Sea - Hambantota </p>
                                        <p className="cruiseDetailsLocation2Details"> <span> End: </span> Hambantota(port of arrival)</p>
                                    </div>
                                </div>

                                <div className="cruiseDetailsInnerContentSubDiv2">
                                    <div className="cruiseDetailsCompayLogo">
                                        <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseCompany.png" alt="company logo" />
                                    </div>

                                    <div className="cruiseDetailsCruisePriceContent">
                                        <p> Starting Price </p>
                                    </div>

                                    <div className="cruiseDetailsCruisePrice">
                                        <h3> ₹41,200 </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="cruiseDetailsInnerButtonDiv">
                                <Link to="/cruiseBookingPage" style={{textDecoration:"none"}}> <button className="btn btn-primary cruiseDetailsViewDealsBtn"> View Details </button> </Link>
                                <button className="btn btn-primary cruiseDetailsBookNowBtn"> Book now </button>
                            </div>
                        </div>

                        {/* <div className="cruiseDetailsInnerWebPageCardsButtons">
                            <p className="cruiseDetailsInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="cruiseDetailsInnerSemiHeadings2">Free Cancellation</p>
                            <h2>₹ 2569</h2>
                            <button className="cruiseDetailsInnerWebPageViewMoreButtons">View More</button>
                            <button className="cruiseDetailsInnerWebPageBookNowButtons">Book Now</button>
                        </div> */}
                    </div>

                    <div className="cruiseDetailsInnerWebPageCardsContainer">
                        <Link to="/cruiseBookingPage">
                            <div className="cruiseDetailsInnerWebPageCardsImage">
                                <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseShipImage.png" alt="ship image" />
                            </div>
                        </Link>

                        <div className="cruiseDetailsInnerWebPageCardsHeadings">
                            <div className="cruiseDetailsInnerContentDiv">
                                <div className="cruiseDetailsInnerContentSubDiv1">
                                    <div className="cruiseDetailsContentDetailsIcons">
                                        <div className="cruiseDetailsMoonIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/night-mode.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsBoatIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/boat.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation1Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation2Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>
                                    </div>

                                    <div className="cruiseDetailsContentDetailsDiv">
                                        <p className="cruiseDetailsMoonDetails"> 2 Nights </p>
                                        <p className="cruiseDetailsBoatDetails"> Cordella Cruises / EMPRESS </p>
                                        <p className="cruiseDetailsLocation1Details"> <span> Start: </span> Chennai (port of departure) - Chennai
                                            - At Sea - Hambantota </p>
                                        <p className="cruiseDetailsLocation2Details"> <span> End: </span> Hambantota(port of arrival)</p>
                                    </div>
                                </div>

                                <div className="cruiseDetailsInnerContentSubDiv2">
                                    <div className="cruiseDetailsCompayLogo">
                                        <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseCompany.png" alt="company logo" />
                                    </div>

                                    <div className="cruiseDetailsCruisePriceContent">
                                        <p> Starting Price </p>
                                    </div>

                                    <div className="cruiseDetailsCruisePrice">
                                        <h3> ₹41,200 </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="cruiseDetailsInnerButtonDiv">
                                <Link to="/cruiseBookingPage" style={{textDecoration:"none"}}> <button className="btn btn-primary cruiseDetailsViewDealsBtn"> View Details </button> </Link>
                                <button className="btn btn-primary cruiseDetailsBookNowBtn"> Book now </button>
                            </div>
                        </div>

                        {/* <div className="cruiseDetailsInnerWebPageCardsButtons">
                            <p className="cruiseDetailsInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="cruiseDetailsInnerSemiHeadings2">Free Cancellation</p>
                            <h2>₹ 2569</h2>
                            <button className="cruiseDetailsInnerWebPageViewMoreButtons">View More</button>
                            <button className="cruiseDetailsInnerWebPageBookNowButtons">Book Now</button>
                        </div> */}
                    </div>

                    <div className="cruiseDetailsInnerWebPageCardsContainer">
                        <Link to="/cruiseBookingPage">
                            <div className="cruiseDetailsInnerWebPageCardsImage">
                                <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseShipImage.png" alt="ship image" />
                            </div>
                        </Link>

                        <div className="cruiseDetailsInnerWebPageCardsHeadings">
                            <div className="cruiseDetailsInnerContentDiv">
                                <div className="cruiseDetailsInnerContentSubDiv1">
                                    <div className="cruiseDetailsContentDetailsIcons">
                                        <div className="cruiseDetailsMoonIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/night-mode.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsBoatIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/boat.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation1Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation2Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>
                                    </div>

                                    <div className="cruiseDetailsContentDetailsDiv">
                                        <p className="cruiseDetailsMoonDetails"> 2 Nights </p>
                                        <p className="cruiseDetailsBoatDetails"> Cordella Cruises / EMPRESS </p>
                                        <p className="cruiseDetailsLocation1Details"> <span> Start: </span> Chennai (port of departure) - Chennai
                                            - At Sea - Hambantota </p>
                                        <p className="cruiseDetailsLocation2Details"> <span> End: </span> Hambantota(port of arrival)</p>
                                    </div>
                                </div>

                                <div className="cruiseDetailsInnerContentSubDiv2">
                                    <div className="cruiseDetailsCompayLogo">
                                        <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseCompany.png" alt="company logo" />
                                    </div>

                                    <div className="cruiseDetailsCruisePriceContent">
                                        <p> Starting Price </p>
                                    </div>

                                    <div className="cruiseDetailsCruisePrice">
                                        <h3> ₹41,200 </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="cruiseDetailsInnerButtonDiv">
                                <Link to="/cruiseBookingPage" style={{textDecoration:"none"}}> <button className="btn btn-primary cruiseDetailsViewDealsBtn"> View Details </button> </Link>
                                <button className="btn btn-primary cruiseDetailsBookNowBtn"> Book now </button>
                            </div>
                        </div>

                        {/* <div className="cruiseDetailsInnerWebPageCardsButtons">
                            <p className="cruiseDetailsInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="cruiseDetailsInnerSemiHeadings2">Free Cancellation</p>
                            <h2>₹ 2569</h2>
                            <button className="cruiseDetailsInnerWebPageViewMoreButtons">View More</button>
                            <button className="cruiseDetailsInnerWebPageBookNowButtons">Book Now</button>
                        </div> */}
                    </div>

                    <div className="cruiseDetailsInnerWebPageCardsContainer">
                        <Link to="/cruiseBookingPage">
                            <div className="cruiseDetailsInnerWebPageCardsImage">
                                <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseShipImage.png" alt="ship image" />
                            </div>
                        </Link>

                        <div className="cruiseDetailsInnerWebPageCardsHeadings">
                            <div className="cruiseDetailsInnerContentDiv">
                                <div className="cruiseDetailsInnerContentSubDiv1">
                                    <div className="cruiseDetailsContentDetailsIcons">
                                        <div className="cruiseDetailsMoonIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/night-mode.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsBoatIcon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/boat.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation1Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>

                                        <div className="cruiseDetailsLocation2Icon">
                                            <img src="/Images/NewHomeLayout/CruiseDetailsPage/Location.png" alt="icon image" />
                                        </div>
                                    </div>

                                    <div className="cruiseDetailsContentDetailsDiv">
                                        <p className="cruiseDetailsMoonDetails"> 2 Nights </p>
                                        <p className="cruiseDetailsBoatDetails"> Cordella Cruises / EMPRESS </p>
                                        <p className="cruiseDetailsLocation1Details"> <span> Start: </span> Chennai (port of departure) - Chennai
                                            - At Sea - Hambantota </p>
                                        <p className="cruiseDetailsLocation2Details"> <span> End: </span> Hambantota(port of arrival)</p>
                                    </div>
                                </div>

                                <div className="cruiseDetailsInnerContentSubDiv2">
                                    <div className="cruiseDetailsCompayLogo">
                                        <img src="/Images/NewHomeLayout/CruiseDetailsPage/CruiseCompany.png" alt="company logo" />
                                    </div>

                                    <div className="cruiseDetailsCruisePriceContent">
                                        <p> Starting Price </p>
                                    </div>

                                    <div className="cruiseDetailsCruisePrice">
                                        <h3> ₹41,200 </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="cruiseDetailsInnerButtonDiv">
                                <Link to="/cruiseBookingPage" style={{textDecoration:"none"}}> <button className="btn btn-primary cruiseDetailsViewDealsBtn"> View Details </button> </Link>
                                <button className="btn btn-primary cruiseDetailsBookNowBtn"> Book now </button>
                            </div>
                        </div>

                        {/* <div className="cruiseDetailsInnerWebPageCardsButtons">
                            <p className="cruiseDetailsInnerSemiHeadings1">Instant Confirmation</p>
                            <p className="cruiseDetailsInnerSemiHeadings2">Free Cancellation</p>
                            <h2>₹ 2569</h2>
                            <button className="cruiseDetailsInnerWebPageViewMoreButtons">View More</button>
                            <button className="cruiseDetailsInnerWebPageBookNowButtons">Book Now</button>
                        </div> */}
                    </div>

                    <button className='innercruiseDetailsShowButton'>Show More</button>
                </div>
            </div>
        </>
    );
}

