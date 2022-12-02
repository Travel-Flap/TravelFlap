import React from 'react';
import "./StaycationsInnerCard.css";

import { Form, Button } from 'react-bootstrap';
import { StaycationDataFaq } from './StaycationsDataFaq';
import { Link } from 'react-router-dom';


export const StaycationsInnerCards = () => {
    return (
        <>
            <div className='filterStaycationInnerButtons'>
                <div className='staycationsInnerCardButtonsSelector'>
                    <div class="btn-group staycationsInnerCardButtonMainDiv" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" />
                        <label class="btn btn-outline-primary staycationsInnerCardButton1" for="btnradio1">Mountain staycations</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary staycationsInnerCardButton2" for="btnradio2"> Dessert staycations </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary staycationsInnerCardButton3" for="btnradio3"> Camping Site </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label class="btn btn-outline-primary staycationsInnerCardButton4" for="btnradio4"> Lake Front staycations </label>
                    </div>
                </div>
            </div>

            <div className='budgetStaycationsFilterCardsMainDiv'>

                <div className='staycationsInnerBudgetFilters'>
                    <div className='staycationsstaycationsstaycationsPriceRangeFilter'>
                        <div className='staycationsPriceRangeInnerFilterDiv'>
                            <h3 className='staycationsbudgetHeading' >Budget</h3>
                            <h5 className='staycationsResetHeading' >Reset</h5>
                        </div>

                        {/* This code section is for the price range selector filter */}
                        <div className='priceDropDown'>
                            <Form.Select size="sm">
                                <option>0-1000</option>
                                <option>1000-5000</option>
                                <option>5000-10,000</option>
                                <option>10,000-20,000</option>
                                {/* <option>0-1000</option> */}
                            </Form.Select>
                        </div>
                    </div>

                    <div className='staycationsInnerStateSelectFilter'>
                        <div className='selectStateFilter'>
                            <h3 className='staycationsbudgetHeading' >Select state</h3>
                            <h5 className='staycationsResetHeading' >Reset</h5>
                        </div>

                        <div className='stateDropDown'>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className='hoteInnerstaycationsTypeDiv'>
                        <div className='staycationsTypeFilter'>
                            <h3 className='staycationsbudgetHeading' >staycationss Type</h3>
                            <h5 className='staycationsResetHeading' >Reset</h5>
                        </div>

                        <div className='staycationsTypeSelectorButtons'>
                            <Button className='staycationsTypeButton' variant="outline-primary">Luxury</Button>
                            <Button className='staycationsTypeButton' variant="outline-primary">5 star staycations</Button>
                            <Button className='staycationsTypeButton' variant="outline-primary">3 star staycations</Button>
                            <Button className='staycationsTypeButton' variant="outline-primary">Resort</Button>
                            <Button className='staycationsTypeViewAllButton' variant="outline-primary">View All</Button>
                        </div>
                    </div>

                    <div className='hoteInnerCollectionDiv'>
                        <div className='collectionTypeFilter'>
                            <h3 className='staycationsbudgetHeading' > Collection </h3>
                            <h5 className='staycationsResetHeading' >Reset</h5>
                        </div>

                        <div className='collectionTypeSelectorButtons'>
                            <Button className='collectionTypeButton' variant="outline-primary">Family</Button>
                            <Button className='collectionTypeButton' variant="outline-primary">For group Traveller</Button>
                            <Button className='collectionTypeButton' variant="outline-primary">Local IDs Accepted</Button>
                            <Button className='collectionTypeButton' variant="outline-primary">International Guest</Button>
                            <Button className='collectionTypeViewAllButton' variant="outline-primary">View All</Button>
                        </div>
                    </div>

                    <div className='hoteInnerCheckInTypeDiv'>
                        <div className='staycationsCheckInFilter'>
                            <h3 className='staycationsbudgetHeading'> Check In Feature </h3>
                            <h5 className='staycationsResetHeading'>Reset</h5>
                        </div>

                        <div className='staycationsTypeSelectorButtons'>
                            <Button className='checkInTypeButton' variant="outline-primary">Pay at staycations</Button>
                            <Button className='checkInTypeButton' variant="outline-primary">Online Booking</Button>
                            {/* <Button className='staycationsTypeButton' variant="outline-primary">3 star staycations</Button>
                            <Button className='staycationsTypeButton' variant="outline-primary">Resort</Button>
                            <Button className='staycationsTypeButton' variant="outline-primary">View All</Button> */}
                        </div>
                    </div>
                </div>

                <div className='staycationsInnerDataCards'>
                    <div className='staycationsInnerCardsDisplay'>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="img-fluid rounded-start staycationsImageCards" alt="inner staycations image" />
                                </div>
                                <div class="col-md-8 staycationsCardsMainContentDiv">
                                    <div class="card-body">
                                        <h3 class="card-title staycationsNameHeadingDiv"> Capital O 86680 Unique Residency</h3>
                                        <p class="card-text staycationsDistanceDiv">  Madri Industrial Area, Udaipur. Distance-3.4 km. </p>
                                        <p class="card-text">
                                            <span>4.8</span>
                                            (166 Ratings). Excellent
                                        </p>
                                        <div className='staycationsFacilities'>
                                            <p className='staycationsFacilityInnerContent'> Parking Facility </p>
                                            <p className='staycationsFacilityInnerContent'> Reception </p>
                                            <p className='staycationsFacilityInnerContent'> Caretaker </p>
                                            <p className='staycationsFacilityInnerContent'> +13 more </p>
                                        </div>
                                        <p class="card-text staycationsCardPriceDiv">
                                            <small class="text-muted staycationsPriceFiguresDiv">
                                                <span className='priceDivContext1'>$778</span>
                                                {/* <span>$2770</span> */}
                                                <span className='staycationsPriceDiscount'>72% off</span>
                                            </small>

                                            <Link to="/staycationBookingPage">
                                                <Button className='staycationsBookingButton' variant="success"> Book Now </Button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='staycationsInnerCardsDisplay'>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="img-fluid rounded-start staycationsImageCards" alt="inner staycations image" />
                                </div>
                                <div class="col-md-8 staycationsCardsMainContentDiv">
                                    <div class="card-body">
                                        <h3 class="card-title staycationsNameHeadingDiv"> Capital O 86680 Unique Residency</h3>
                                        <p class="card-text staycationsDistanceDiv">  Madri Industrial Area, Udaipur. Distance-3.4 km. </p>
                                        <p class="card-text">
                                            <span>4.8</span>
                                            (166 Ratings). Excellent
                                        </p>
                                        <div className='staycationsFacilities'>
                                            <p className='staycationsFacilityInnerContent'> Parking Facility </p>
                                            <p className='staycationsFacilityInnerContent'> Reception </p>
                                            <p className='staycationsFacilityInnerContent'> Caretaker </p>
                                            <p className='staycationsFacilityInnerContent'> +13 more </p>
                                        </div>
                                        <p class="card-text staycationsCardPriceDiv">
                                            <small class="text-muted staycationsPriceFiguresDiv">
                                                <span className='priceDivContext1'>$778</span>
                                                {/* <span>$2770</span> */}
                                                <span className='staycationsPriceDiscount'>72% off</span>
                                            </small>

                                            <Link to="/staycationBookingPage">
                                                <Button className='staycationsBookingButton' variant="success"> Book Now </Button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='staycationsInnerCardsDisplay'>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="img-fluid rounded-start staycationsImageCards" alt="inner staycations image" />
                                </div>
                                <div class="col-md-8 staycationsCardsMainContentDiv">
                                    <div class="card-body">
                                        <h3 class="card-title staycationsNameHeadingDiv"> Capital O 86680 Unique Residency</h3>
                                        <p class="card-text staycationsDistanceDiv">  Madri Industrial Area, Udaipur. Distance-3.4 km. </p>
                                        <p class="card-text">
                                            <span>4.8</span>
                                            (166 Ratings). Excellent
                                        </p>
                                        <div className='staycationsFacilities'>
                                            <p className='staycationsFacilityInnerContent'> Parking Facility </p>
                                            <p className='staycationsFacilityInnerContent'> Reception </p>
                                            <p className='staycationsFacilityInnerContent'> Caretaker </p>
                                            <p className='staycationsFacilityInnerContent'> +13 more </p>
                                        </div>
                                        <p class="card-text staycationsCardPriceDiv">
                                            <small class="text-muted staycationsPriceFiguresDiv">
                                                <span className='priceDivContext1'>$778</span>
                                                {/* <span>$2770</span> */}
                                                <span className='staycationsPriceDiscount'>72% off</span>
                                            </small>

                                            <Link to="/staycationBookingPage">
                                                <Button className='staycationsBookingButton' variant="success"> Book Now </Button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='staycationsInnerCardsDisplay'>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="img-fluid rounded-start staycationsImageCards" alt="inner staycations image" />
                                </div>
                                <div class="col-md-8 staycationsCardsMainContentDiv">
                                    <div class="card-body">
                                        <h3 class="card-title staycationsNameHeadingDiv"> Capital O 86680 Unique Residency</h3>
                                        <p class="card-text staycationsDistanceDiv">  Madri Industrial Area, Udaipur. Distance-3.4 km. </p>
                                        <p class="card-text">
                                            <span>4.8</span>
                                            (166 Ratings). Excellent
                                        </p>
                                        <div className='staycationsFacilities'>
                                            <p className='staycationsFacilityInnerContent'> Parking Facility </p>
                                            <p className='staycationsFacilityInnerContent'> Reception </p>
                                            <p className='staycationsFacilityInnerContent'> Caretaker </p>
                                            <p className='staycationsFacilityInnerContent'> +13 more </p>
                                        </div>
                                        <p class="card-text staycationsCardPriceDiv">
                                            <small class="text-muted staycationsPriceFiguresDiv">
                                                <span className='priceDivContext1'>$778</span>
                                                {/* <span>$2770</span> */}
                                                <span className='staycationsPriceDiscount'>72% off</span>
                                            </small>

                                            <Link to="/staycationBookingPage">
                                                <Button className='staycationsBookingButton' variant="success"> Book Now </Button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <StaycationDataFaq />
        </>
    );
};
