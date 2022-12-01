import React from 'react';
import "./CheapCarRentals.css";
import { BiGasPump } from "react-icons/bi";
import { GiManualMeatGrinder } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const CheapCarRentals = () => {
    return (
        <>
            <div className='cheapCarRentalsMainOuterDiv'>
                <div className='cheapCarRentalsHeadingDiv'>
                    <h3>
                        Cheap Rental Cars in Gurgaon
                    </h3>
                </div>

                <div className='cheapCarRentalsFilterDiv'>
                    <select class="form-select" aria-label="Default select example">
                        <option selected> Vehicle Type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <select class="form-select" aria-label="Default select example">
                        <option selected> Brands </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <select class="form-select" aria-label="Default select example">
                        <option selected> Fuel Type </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <select class="form-select" aria-label="Default select example">
                        <option selected> Gear Type </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <select class="form-select" aria-label="Default select example">
                        <option selected> RentalCompanies </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <select class="form-select" aria-label="Default select example">
                        <option selected> Vehicle Class </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <select class="form-select" aria-label="Default select example">
                        <option selected> Driver's age </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>

                <div className='cheapCarRentalsCardsOuterDiv'>
                    <div className='cheapCarRentalsCardsInnerDiv1'>

                        <div class="card cheapCarRentalsInnerDiv" >

                            <div className='rentalsCardsImageDiv'>
                                <img src="Images/Rentals/CheapCarRentals/CarImage.png" class="card-img-top" alt="car image" />

                                <img className='rentalsCarLogo' src='Images/Rentals/CheapCarRentals/hertz.png' alt='car company logo' />
                            </div>

                            <div class="card-body ">
                                <div className='cheapCarRentalCardHeadingDiv'>
                                    <h5 class="card-title"> <BiGasPump style={{ fontSize: "16px" }} /> Diesel </h5>
                                    <h5 class="card-title"> <GiManualMeatGrinder style={{ fontSize: "16px" }} /> Manual </h5>
                                    <h5 class="card-title"> <AiOutlineCar style={{ fontSize: "16px" }} /> SUV </h5>
                                    <button className='btn btn-primary'> Economy</button>
                                </div>

                                <div className='cheapCarRentalsCarDetailsDiv card-text'>
                                    <div className='cheapCarRentalsDetailsInnerDiv1'>
                                        <p className='cheapCarDescription'>Deposit</p>
                                        <p className='cheapCarPrice'>₹2000</p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv2'>
                                        <p className='cheapCarDescription'> KM Limit </p>
                                        <p className='cheapCarPrice'> 750 km </p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv3'>
                                        <p className='cheapCarDescription'> Credit Card </p>
                                        <p className='cheapCarPrice'> Req. </p>
                                    </div>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>

                                <div className='cheapCarRentalsTimeDescDiv'>

                                    <div className='cheapCarRentalsTimeDescInnerDiv'>
                                        <p className='cheapCarRentalPerDayPrice'> ₹276.00 Per Day </p>
                                        <p className='cheapCarRentalsDayPeriod'> 3 days <span> (-1201) </span> </p>
                                    </div>

                                    <Link to="/carBookingPage">
                                        <button class="btn btn-primary text-center cheapCarRentalsBookButton"> Rent Now </button>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div class="card cheapCarRentalsInnerDiv" >

                            <div className='rentalsCardsImageDiv'>
                                <img src="Images/Rentals/CheapCarRentals/CarImage.png" class="card-img-top" alt="car image" />

                                <img className='rentalsCarLogo' src='Images/Rentals/CheapCarRentals/avis.png' alt='car company logo' />
                            </div>

                            <div class="card-body ">
                                <div className='cheapCarRentalCardHeadingDiv'>
                                    <h5 class="card-title"> <BiGasPump style={{ fontSize: "14px" }} /> Diesel </h5>
                                    <h5 class="card-title"> <GiManualMeatGrinder style={{ fontSize: "14px" }} /> Manual </h5>
                                    <h5 class="card-title"> <AiOutlineCar style={{ fontSize: "14px" }} /> SUV </h5>
                                    <button className='btn btn-primary'> Economy</button>
                                </div>

                                <div className='cheapCarRentalsCarDetailsDiv card-text'>
                                    <div className='cheapCarRentalsDetailsInnerDiv1'>
                                        <p className='cheapCarDescription'>Deposit</p>
                                        <p className='cheapCarPrice'>₹2000</p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv2'>
                                        <p className='cheapCarDescription'> KM Limit </p>
                                        <p className='cheapCarPrice'> 750 km </p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv3'>
                                        <p className='cheapCarDescription'> Credit Card </p>
                                        <p className='cheapCarPrice'> Req. </p>
                                    </div>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>

                                <div className='cheapCarRentalsTimeDescDiv'>

                                    <div className='cheapCarRentalsTimeDescInnerDiv'>
                                        <p className='cheapCarRentalPerDayPrice'> ₹276.00 Per Day </p>
                                        <p className='cheapCarRentalsDayPeriod'> 3 days <span> (-1201) </span> </p>
                                    </div>

                                    <Link to="/carBookingPage">
                                        <button class="btn btn-primary text-center cheapCarRentalsBookButton"> Rent Now </button>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div class="card cheapCarRentalsInnerDiv" >

                            <div className='rentalsCardsImageDiv'>
                                <img src="Images/Rentals/CheapCarRentals/CarImage.png" class="card-img-top" alt="car image" />

                                <img className='rentalsCarLogo' src='Images/Rentals/CheapCarRentals/aamcar.png' alt='car company logo' />
                            </div>

                            <div class="card-body ">
                                <div className='cheapCarRentalCardHeadingDiv'>
                                    <h5 class="card-title"> <BiGasPump style={{ fontSize: "14px" }} /> Diesel </h5>
                                    <h5 class="card-title"> <GiManualMeatGrinder style={{ fontSize: "14px" }} /> Manual </h5>
                                    <h5 class="card-title"> <AiOutlineCar style={{ fontSize: "14px" }} /> SUV </h5>
                                    <button className='btn btn-primary'> Economy</button>
                                </div>

                                <div className='cheapCarRentalsCarDetailsDiv card-text'>
                                    <div className='cheapCarRentalsDetailsInnerDiv1'>
                                        <p className='cheapCarDescription'>Deposit</p>
                                        <p className='cheapCarPrice'>₹2000</p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv2'>
                                        <p className='cheapCarDescription'> KM Limit </p>
                                        <p className='cheapCarPrice'> 750 km </p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv3'>
                                        <p className='cheapCarDescription'> Credit Card </p>
                                        <p className='cheapCarPrice'> Req. </p>
                                    </div>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>

                                <div className='cheapCarRentalsTimeDescDiv'>
                                    <div className='cheapCarRentalsTimeDescInnerDiv'>
                                        <p className='cheapCarRentalPerDayPrice'> ₹276.00 Per Day </p>
                                        <p className='cheapCarRentalsDayPeriod'> 3 days <span> (-1201) </span> </p>
                                    </div>

                                    <Link to="/carBookingPage">
                                        <button class="btn btn-primary text-center cheapCarRentalsBookButton"> Rent Now </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="card cheapCarRentalsInnerDiv" >

                            <div className='rentalsCardsImageDiv'>
                                <img src="Images/Rentals/CheapCarRentals/CarImage.png" class="card-img-top" alt="car image" />

                                <img className='rentalsCarLogo' src='Images/Rentals/CheapCarRentals/budget..png' alt='car company logo' />
                            </div>

                            <div class="card-body ">
                                <div className='cheapCarRentalCardHeadingDiv'>
                                    <h5 class="card-title"> <BiGasPump style={{ fontSize: "14px" }} /> Diesel </h5>
                                    <h5 class="card-title"> <GiManualMeatGrinder style={{ fontSize: "14px" }} /> Manual </h5>
                                    <h5 class="card-title"> <AiOutlineCar style={{ fontSize: "14px" }} /> SUV </h5>
                                    <button className='btn btn-primary'> Economy</button>
                                </div>

                                <div className='cheapCarRentalsCarDetailsDiv card-text'>
                                    <div className='cheapCarRentalsDetailsInnerDiv1'>
                                        <p className='cheapCarDescription'>Deposit</p>
                                        <p className='cheapCarPrice'>₹2000</p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv2'>
                                        <p className='cheapCarDescription'> KM Limit </p>
                                        <p className='cheapCarPrice'> 750 km </p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv3'>
                                        <p className='cheapCarDescription'> Credit Card </p>
                                        <p className='cheapCarPrice'> Req. </p>
                                    </div>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>

                                <div className='cheapCarRentalsTimeDescDiv'>

                                    <div className='cheapCarRentalsTimeDescInnerDiv'>
                                        <p className='cheapCarRentalPerDayPrice'> ₹276.00 Per Day </p>
                                        <p className='cheapCarRentalsDayPeriod'> 3 days <span> (-1201) </span> </p>
                                    </div>

                                    <Link to="/carBookingPage">
                                        <button class="btn btn-primary text-center cheapCarRentalsBookButton"> Rent Now </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='cheapCarRentalsCardsInnerDiv2'>

                        <div class="card cheapCarRentalsInnerDiv" >

                            <div className='rentalsCardsImageDiv'>
                                <img src="Images/Rentals/CheapCarRentals/CarImage.png" class="card-img-top" alt="car image" />

                                <img className='rentalsCarLogo' src='Images/Rentals/CheapCarRentals/aamcar.png' alt='car company logo' />
                            </div>
                            <div class="card-body ">
                                <div className='cheapCarRentalCardHeadingDiv'>
                                    <h5 class="card-title"> <BiGasPump style={{ fontSize: "14px" }} /> Diesel </h5>
                                    <h5 class="card-title"> <GiManualMeatGrinder style={{ fontSize: "14px" }} /> Manual </h5>
                                    <h5 class="card-title"> <AiOutlineCar style={{ fontSize: "14px" }} /> SUV </h5>
                                    <button className='btn btn-primary'> Economy</button>
                                </div>

                                <div className='cheapCarRentalsCarDetailsDiv card-text'>
                                    <div className='cheapCarRentalsDetailsInnerDiv1'>
                                        <p className='cheapCarDescription'>Deposit</p>
                                        <p className='cheapCarPrice'>₹2000</p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv2'>
                                        <p className='cheapCarDescription'> KM Limit </p>
                                        <p className='cheapCarPrice'> 750 km </p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv3'>
                                        <p className='cheapCarDescription'> Credit Card </p>
                                        <p className='cheapCarPrice'> Req. </p>
                                    </div>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>

                                <div className='cheapCarRentalsTimeDescDiv'>

                                    <div className='cheapCarRentalsTimeDescInnerDiv'>
                                        <p className='cheapCarRentalPerDayPrice'> ₹276.00 Per Day </p>
                                        <p className='cheapCarRentalsDayPeriod'> 3 days <span> (-1201) </span> </p>
                                    </div>

                                    <Link to="/carBookingPage">
                                        <button class="btn btn-primary text-center cheapCarRentalsBookButton"> Rent Now </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="card cheapCarRentalsInnerDiv" >

                            <div className='rentalsCardsImageDiv'>
                                <img src="Images/Rentals/CheapCarRentals/CarImage.png" class="card-img-top" alt="car image" />

                                <img className='rentalsCarLogo' src='Images/Rentals/CheapCarRentals/budget..png' alt='car company logo' />
                            </div>
                            <div class="card-body ">
                                <div className='cheapCarRentalCardHeadingDiv'>
                                    <h5 class="card-title"> <BiGasPump style={{ fontSize: "14px" }} /> Diesel </h5>
                                    <h5 class="card-title"> <GiManualMeatGrinder style={{ fontSize: "14px" }} /> Manual </h5>
                                    <h5 class="card-title"> <AiOutlineCar style={{ fontSize: "14px" }} /> SUV </h5>
                                    <button className='btn btn-primary'> Economy</button>
                                </div>

                                <div className='cheapCarRentalsCarDetailsDiv card-text'>
                                    <div className='cheapCarRentalsDetailsInnerDiv1'>
                                        <p className='cheapCarDescription'>Deposit</p>
                                        <p className='cheapCarPrice'>₹2000</p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv2'>
                                        <p className='cheapCarDescription'> KM Limit </p>
                                        <p className='cheapCarPrice'> 750 km </p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv3'>
                                        <p className='cheapCarDescription'> Credit Card </p>
                                        <p className='cheapCarPrice'> Req. </p>
                                    </div>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>

                                <div className='cheapCarRentalsTimeDescDiv'>

                                    <div className='cheapCarRentalsTimeDescInnerDiv'>
                                        <p className='cheapCarRentalPerDayPrice'> ₹276.00 Per Day </p>
                                        <p className='cheapCarRentalsDayPeriod'> 3 days <span> (-1201) </span> </p>
                                    </div>

                                    <Link to="/carBookingPage">
                                        <button class="btn btn-primary text-center cheapCarRentalsBookButton"> Rent Now </button>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div class="card cheapCarRentalsInnerDiv" >

                            <div className='rentalsCardsImageDiv'>
                                <img src="Images/Rentals/CheapCarRentals/CarImage.png" class="card-img-top" alt="car image" />

                                <img className='rentalsCarLogo' src='Images/Rentals/CheapCarRentals/avis.png' alt='car company logo' />
                            </div>
                            <div class="card-body ">
                                <div className='cheapCarRentalCardHeadingDiv'>
                                    <h5 class="card-title"> <BiGasPump style={{ fontSize: "14px" }} /> Diesel </h5>
                                    <h5 class="card-title"> <GiManualMeatGrinder style={{ fontSize: "14px" }} /> Manual </h5>
                                    <h5 class="card-title"> <AiOutlineCar style={{ fontSize: "14px" }} /> SUV </h5>
                                    <button className='btn btn-primary'> Economy</button>
                                </div>

                                <div className='cheapCarRentalsCarDetailsDiv card-text'>
                                    <div className='cheapCarRentalsDetailsInnerDiv1'>
                                        <p className='cheapCarDescription'>Deposit</p>
                                        <p className='cheapCarPrice'>₹2000</p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv2'>
                                        <p className='cheapCarDescription'> KM Limit </p>
                                        <p className='cheapCarPrice'> 750 km </p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv3'>
                                        <p className='cheapCarDescription'> Credit Card </p>
                                        <p className='cheapCarPrice'> Req. </p>
                                    </div>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>

                                <div className='cheapCarRentalsTimeDescDiv'>

                                    <div className='cheapCarRentalsTimeDescInnerDiv'>
                                        <p className='cheapCarRentalPerDayPrice'> ₹276.00 Per Day </p>
                                        <p className='cheapCarRentalsDayPeriod'> 3 days <span> (-1201) </span> </p>
                                    </div>

                                    <Link to="/carBookingPage">
                                        <button class="btn btn-primary text-center cheapCarRentalsBookButton"> Rent Now </button>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div class="card cheapCarRentalsInnerDiv" >

                            <div className='rentalsCardsImageDiv'>
                                <img src="Images/Rentals/CheapCarRentals/CarImage.png" class="card-img-top" alt="car image" />

                                <img className='rentalsCarLogo' src='Images/Rentals/CheapCarRentals/hertz.png' alt='car company logo' />
                            </div>
                            <div class="card-body ">
                                <div className='cheapCarRentalCardHeadingDiv'>
                                    <h5 class="card-title"> <BiGasPump style={{ fontSize: "14px" }} /> Diesel </h5>
                                    <h5 class="card-title"> <GiManualMeatGrinder style={{ fontSize: "14px" }} /> Manual </h5>
                                    <h5 class="card-title"> <AiOutlineCar style={{ fontSize: "14px" }} /> SUV </h5>
                                    <button className='btn btn-primary'> Economy</button>
                                </div>

                                <div className='cheapCarRentalsCarDetailsDiv card-text'>
                                    <div className='cheapCarRentalsDetailsInnerDiv1'>
                                        <p className='cheapCarDescription'>Deposit</p>
                                        <p className='cheapCarPrice'>₹2000</p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv2'>
                                        <p className='cheapCarDescription'> KM Limit </p>
                                        <p className='cheapCarPrice'> 750 km </p>
                                    </div>

                                    <div className='cheapCarRentalsDetailsInnerDiv3'>
                                        <p className='cheapCarDescription'> Credit Card </p>
                                        <p className='cheapCarPrice'> Req. </p>
                                    </div>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>

                                <div className='cheapCarRentalsTimeDescDiv'>

                                    <div className='cheapCarRentalsTimeDescInnerDiv'>
                                        <p className='cheapCarRentalPerDayPrice'> ₹276.00 Per Day </p>
                                        <p className='cheapCarRentalsDayPeriod'> 3 days <span> (-1201) </span> </p>
                                    </div>

                                    <Link to="/carBookingPage">
                                        <button class="btn btn-primary text-center cheapCarRentalsBookButton"> Rent Now </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}
