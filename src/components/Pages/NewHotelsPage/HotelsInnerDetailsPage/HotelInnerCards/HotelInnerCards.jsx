import React from 'react';
import "./HotelInnerCard.css";

import { Form, Button } from 'react-bootstrap';
import { HotelInnerDataFaq } from './HotelDataFaq';


export const HotelInnerCards = () => {
    return (
        <>
            <div className='filterButtons'>
                <div className='hotelInnerCardButtonsSelector'>
                    <div class="btn-group hotelInnerCardButtonMainDiv" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelInnerCardButton1" for="btnradio1">Mountain Hotel</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelInnerCardButton2" for="btnradio2"> Dessert Hotel </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelInnerCardButton3" for="btnradio3"> Camping Site </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelInnerCardButton4" for="btnradio4"> Lake Front Hotel </label>
                    </div>
                </div>
            </div>

            <div className='budgetFilterCardsMainDiv'>

                <div className='hotelInnerBudgetFilters'>
                    <div className='priceRangeFilter'>
                        <div className='priceRangeInnerFilterDiv'>
                            <h3 className='hotelbudgetHeading' >Budget</h3>
                            <h5 className='hotelResetHeading' >Reset</h5>
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

                    <div className='hotelInnerStateSelectFilter'>
                        <div className='selectStateFilter'>
                            <h3 className='hotelbudgetHeading' >Select state</h3>
                            <h5 className='hotelResetHeading' >Reset</h5>
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

                    <div className='hoteInnerHotelTypeDiv'>
                        <div className='hotelTypeFilter'>
                            <h3 className='hotelbudgetHeading' >Hotels Type</h3>
                            <h5 className='hotelResetHeading' >Reset</h5>
                        </div>

                        <div className='hotelTypeSelectorButtons'>
                            <Button className='hotelTypeButton' variant="outline-primary">Luxury</Button>
                            <Button className='hotelTypeButton' variant="outline-primary">5 star Hotel</Button>
                            <Button className='hotelTypeButton' variant="outline-primary">3 star Hotel</Button>
                            <Button className='hotelTypeButton' variant="outline-primary">Resort</Button>
                            <Button className='hotelTypeViewAllButton' variant="outline-primary">View All</Button>
                        </div>
                    </div>

                    <div className='hoteInnerCollectionDiv'>
                        <div className='collectionTypeFilter'>
                            <h3 className='hotelbudgetHeading' > Collection </h3>
                            <h5 className='hotelResetHeading' >Reset</h5>
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
                        <div className='hotelCheckInFilter'>
                            <h3 className='hotelbudgetHeading'> Check In Feature </h3>
                            <h5 className='hotelResetHeading'>Reset</h5>
                        </div>

                        <div className='hotelTypeSelectorButtons'>
                            <Button className='checkInTypeButton' variant="outline-primary">Pay at Hotel</Button>
                            <Button className='checkInTypeButton' variant="outline-primary">Online Booking</Button>
                            {/* <Button className='hotelTypeButton' variant="outline-primary">3 star Hotel</Button>
                            <Button className='hotelTypeButton' variant="outline-primary">Resort</Button>
                            <Button className='hotelTypeButton' variant="outline-primary">View All</Button> */}
                        </div>
                    </div>
                </div>

                <div className='hotelInnerDataCards'>
                    <div className='hotelInnerCardsDisplay'>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="img-fluid rounded-start hotelImageCards" alt="inner hotel image" />
                                </div>
                                <div class="col-md-8 hotelCardsMainContentDiv">
                                    <div class="card-body">
                                        <h3 class="card-title hotelNameHeadingDiv"> Capital O 86680 Unique Residency</h3>
                                        <p class="card-text hotelDistanceDiv">  Madri Industrial Area, Udaipur. Distance-3.4 km. </p>
                                        <p class="card-text">
                                            <span>4.8</span>
                                            (166 Ratings). Excellent
                                        </p>
                                        <div className='hotelFacilities'>
                                            <p className='hotelFacilityInnerContent'> Parking Facility </p>
                                            <p className='hotelFacilityInnerContent'> Reception </p>
                                            <p className='hotelFacilityInnerContent'> Caretaker </p>
                                            <p className='hotelFacilityInnerContent'> +13 more </p>
                                        </div>
                                        <p class="card-text hotelCardPriceDiv">
                                            <small class="text-muted hotelPriceFiguresDiv">
                                                <span className='priceDivContext1'>$778</span>
                                                {/* <span>$2770</span> */}
                                                <span className='hotelPriceDiscount'>72% off</span>
                                            </small>

                                            <Button className='hotelBookingButton' variant="success"> Book Now </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hotelInnerCardsDisplay'>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="img-fluid rounded-start hotelImageCards" alt="inner hotel image" />
                                </div>
                                <div class="col-md-8 hotelCardsMainContentDiv">
                                    <div class="card-body">
                                        <h3 class="card-title hotelNameHeadingDiv"> Capital O 86680 Unique Residency</h3>
                                        <p class="card-text hotelDistanceDiv">  Madri Industrial Area, Udaipur. Distance-3.4 km. </p>
                                        <p class="card-text">
                                            <span>4.8</span>
                                            (166 Ratings). Excellent
                                        </p>
                                        <div className='hotelFacilities'>
                                            <p className='hotelFacilityInnerContent'> Parking Facility </p>
                                            <p className='hotelFacilityInnerContent'> Reception </p>
                                            <p className='hotelFacilityInnerContent'> Caretaker </p>
                                            <p className='hotelFacilityInnerContent'> +13 more </p>
                                        </div>
                                        <p class="card-text hotelCardPriceDiv">
                                            <small class="text-muted hotelPriceFiguresDiv">
                                                <span className='priceDivContext1'>$778</span>
                                                {/* <span>$2770</span> */}
                                                <span className='hotelPriceDiscount'>72% off</span>
                                            </small>

                                            <Button className='hotelBookingButton' variant="success"> Book Now </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hotelInnerCardsDisplay'>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="img-fluid rounded-start hotelImageCards" alt="inner hotel image" />
                                </div>
                                <div class="col-md-8 hotelCardsMainContentDiv">
                                    <div class="card-body">
                                        <h3 class="card-title hotelNameHeadingDiv"> Capital O 86680 Unique Residency</h3>
                                        <p class="card-text hotelDistanceDiv">  Madri Industrial Area, Udaipur. Distance-3.4 km. </p>
                                        <p class="card-text">
                                            <span>4.8</span>
                                            (166 Ratings). Excellent
                                        </p>
                                        <div className='hotelFacilities'>
                                            <p className='hotelFacilityInnerContent'> Parking Facility </p>
                                            <p className='hotelFacilityInnerContent'> Reception </p>
                                            <p className='hotelFacilityInnerContent'> Caretaker </p>
                                            <p className='hotelFacilityInnerContent'> +13 more </p>
                                        </div>
                                        <p class="card-text hotelCardPriceDiv">
                                            <small class="text-muted hotelPriceFiguresDiv">
                                                <span className='priceDivContext1'>$778</span>
                                                {/* <span>$2770</span> */}
                                                <span className='hotelPriceDiscount'>72% off</span>
                                            </small>

                                            <Button className='hotelBookingButton' variant="success"> Book Now </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='hotelInnerCardsDisplay'>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="img-fluid rounded-start hotelImageCards" alt="inner hotel image" />
                                </div>
                                <div class="col-md-8 hotelCardsMainContentDiv">
                                    <div class="card-body">
                                        <h3 class="card-title hotelNameHeadingDiv"> Capital O 86680 Unique Residency</h3>
                                        <p class="card-text hotelDistanceDiv">  Madri Industrial Area, Udaipur. Distance-3.4 km. </p>
                                        <p class="card-text">
                                            <span>4.8</span>
                                            (166 Ratings). Excellent
                                        </p>
                                        <div className='hotelFacilities'>
                                            <p className='hotelFacilityInnerContent'> Parking Facility </p>
                                            <p className='hotelFacilityInnerContent'> Reception </p>
                                            <p className='hotelFacilityInnerContent'> Caretaker </p>
                                            <p className='hotelFacilityInnerContent'> +13 more </p>
                                        </div>
                                        <p class="card-text hotelCardPriceDiv">
                                            <small class="text-muted hotelPriceFiguresDiv">
                                                <span className='priceDivContext1'>$778</span>
                                                {/* <span>$2770</span> */}
                                                <span className='hotelPriceDiscount'>72% off</span>
                                            </small>

                                            <Button className='hotelBookingButton' variant="success"> Book Now </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='hotelInnerCardsDisplay'>
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="img-fluid rounded-start hotelImageCards" alt="inner hotel image" />
                                </div>
                                <div class="col-md-8 hotelCardsMainContentDiv">
                                    <div class="card-body">
                                        <h3 class="card-title hotelNameHeadingDiv"> Capital O 86680 Unique Residency</h3>
                                        <p class="card-text hotelDistanceDiv">  Madri Industrial Area, Udaipur. Distance-3.4 km. </p>
                                        <p class="card-text">
                                            <span>4.8</span>
                                            (166 Ratings). Excellent
                                        </p>
                                        <div className='hotelFacilities'>
                                            <p className='hotelFacilityInnerContent'> Parking Facility </p>
                                            <p className='hotelFacilityInnerContent'> Reception </p>
                                            <p className='hotelFacilityInnerContent'> Caretaker </p>
                                            <p className='hotelFacilityInnerContent'> +13 more </p>
                                        </div>
                                        <p class="card-text hotelCardPriceDiv">
                                            <small class="text-muted hotelPriceFiguresDiv">
                                                <span className='priceDivContext1'>$778</span>
                                                
                                                <span className='hotelPriceDiscount'>72% off</span>
                                            </small>

                                            <Button className='hotelBookingButton' variant="success"> Book Now </Button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
            
            <HotelInnerDataFaq />
        </>
    );
};
