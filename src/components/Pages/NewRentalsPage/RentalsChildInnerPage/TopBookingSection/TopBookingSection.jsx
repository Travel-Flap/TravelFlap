import React, { useState } from 'react';
import './TopBookingSection.css';
import { GiCarSeat, GiCarDoor, GiCooler, GiManualMeatGrinder } from "react-icons/gi";
import { MdOutlineChangeCircle } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import { RentalsBookingPayment } from './RentalsBookingPayment';
import { SupplierInformation } from '../SupplierInformation/SupplierInformation';
import { DriverDetails } from '../DriverDetails/DriverDetails';


export const TopBookingSection = () => {
    const [showtab, setShowtab] = useState(1);

    const handletab = (e) => {
        setShowtab(e);
    }

    return (
        <>
            <div className='rentalsBookingPageMainDiv'>


                <div className='rentalsBookingPageDetails'>

                    <div className='rentalsBookingPageDetailsButtons'>
                        <div className={showtab === 1 ? "rentalsBookinginnerBest activeRentalsButton" : "rentalsBookinginnerBest"} onClick={() => handletab(1)}>
                            {/* <h3>Best</h3> */}
                            <button className='btn btn-primary'> Car details </button>
                        </div>
                        <div className={showtab === 2 ? "rentalsBookingInnerinnerCheap activeRentalsButton" : "rentalsBookingInnerinnerCheap"} onClick={() => handletab(2)}>
                            {/* <h3>Cheapest</h3> */}
                            <button className='btn btn-primary'>  Customer Review </button>
                        </div>
                        <div className={showtab === 3 ? "rentalsBookingInnerInnerFast activeRentalsButton" : "rentalsBookingInnerInnerFast"} onClick={() => handletab(3)}>
                            {/* <h3>Fastest</h3> */}
                            <button className='btn btn-primary'>  Important Information </button>
                        </div>
                    </div>

                    <div className='flightNearYouinnerpageFlightDetails'>

                        <div class="tab-content text-dark" id="pills-tabContent">

                            <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>

                                <div className='rentalsBookingCarDetailsOuterDiv'>
                                    <div className='rentalsBookingCarDetailsMainDiv'>
                                        <div className='rentalsBookingCarDetailInnerDiv1'>
                                            <div className='carDetailInnerDiv1ImageDiv'>
                                                <img src='Images/Rentals/CheapCarRentals/LeftSideCarImage.png' alt='car image' />
                                            </div>

                                            <div className='carDetailsInnerDiv1DescDiv'>
                                                <div className='carDetailsDescInnerDiv1'>
                                                    <img src='Images/Rentals/CheapCarRentals/avis.png' alt='logo image' />
                                                </div>

                                                <div className='carDetailsDescInnerDiv2'>
                                                    <p> 8.2 </p>
                                                </div>

                                                <div className='carDetailssDescInnerDiv3'>
                                                    <p> Excellent </p>
                                                </div>
                                            </div>

                                            <div className='carBookingCarSpecificDiv1'>
                                                <div className='carSprcificationInnerDiv1'>
                                                    <p> <GiCarSeat style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>

                                                </div>
                                                <div className='carSprcificationInnerDiv2'>
                                                    <p> <GiCarDoor style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>
                                                </div>
                                            </div>

                                            <div className='carBookingCarSpecificDiv2'>
                                                <div className='carSprcificationInnerDiv1'>
                                                    <p> <GiCooler style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>

                                                </div>
                                                <div className='carSprcificationInnerDiv2'>
                                                    <p> <GiManualMeatGrinder style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='rentalsBookingCarDetailInnerDiv2'>
                                            <div className='carDetailInnerDiv2SubDiv1'>
                                                <div className='carDetailsSubDiv1'>
                                                    <h3> Hyundai i10 </h3>
                                                </div>
                                                <div className='carDetailsSubDiv2'>
                                                    <p>  or similar </p>
                                                </div>

                                                <div className='carDetailsSubDiv3'>
                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                        <option selected> Choose </option>
                                                        <option value="1"> Mini </option>
                                                        <option value="2"> SUV </option>
                                                        <option value="3"> Normal </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='carDetailInnerDiv2SubDiv2'>
                                                <p className='carRentalsBulletPoint1'> Price Includes: </p>
                                                <p className='carRentalsBulletPoint2'> • Unlimited Milage </p>
                                                <p className='carRentalsBulletPoint3'> • Loss Damage Waiver </p>
                                                <p className='carRentalsBulletPoint4'> • Theft Protection </p>
                                            </div>
                                        </div>

                                        <div className='rentalsBookingCarDetailInnerDiv3'>
                                            <div className='rentalsInnerDiv3SubDiv1'>
                                                <p> <MdOutlineChangeCircle style={{ color: "#3380f2", fontSize: "18px" }} /> Change Car </p>
                                            </div>

                                            <div className='rentalsInnerDiv3SubDiv2'>
                                                <p className='rentalsChargesDiv1'> Car Rentals Fee</p>
                                                <p className='rentalsChargesDiv2'> INR-19,902.27 </p>
                                                <p className='rentalsChargesDiv3'> Credit Card Charge INR-0.00 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>

                                <div className='rentalsBookingCarDetailsOuterDiv'>
                                    <div className='rentalsBookingCarDetailsMainDiv'>
                                        <div className='rentalsBookingCarDetailInnerDiv1'>
                                            <div className='carDetailInnerDiv1ImageDiv'>
                                                <img src='Images/Rentals/CheapCarRentals/LeftSideCarImage.png' alt='car image' />
                                            </div>

                                            <div className='carDetailsInnerDiv1DescDiv'>
                                                <div className='carDetailsDescInnerDiv1'>
                                                    <img src='Images/Rentals/CheapCarRentals/avis.png' alt='logo image' />
                                                </div>

                                                <div className='carDetailsDescInnerDiv2'>
                                                    <p> 8.2 </p>
                                                </div>

                                                <div className='carDetailssDescInnerDiv3'>
                                                    <p> Excellent </p>
                                                </div>
                                            </div>

                                            <div className='carBookingCarSpecificDiv1'>
                                                <div className='carSprcificationInnerDiv1'>
                                                    <p> <GiCarSeat style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>

                                                </div>
                                                <div className='carSprcificationInnerDiv2'>
                                                    <p> <GiCarDoor style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>
                                                </div>
                                            </div>

                                            <div className='carBookingCarSpecificDiv2'>
                                                <div className='carSprcificationInnerDiv1'>
                                                    <p> <GiCooler style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>

                                                </div>
                                                <div className='carSprcificationInnerDiv2'>
                                                    <p> <GiManualMeatGrinder style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='rentalsBookingCarDetailInnerDiv2'>
                                            <div className='carDetailInnerDiv2SubDiv1'>
                                                <div className='carDetailsSubDiv1'>
                                                    <h3> Hyundai i10 </h3>
                                                </div>
                                                <div className='carDetailsSubDiv2'>
                                                    <p>  or similar </p>
                                                </div>

                                                <div className='carDetailsSubDiv3'>
                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                        <option selected> Choose </option>
                                                        <option value="1"> Mini </option>
                                                        <option value="2"> SUV </option>
                                                        <option value="3"> Normal </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='carDetailInnerDiv2SubDiv2'>
                                                <p className='carRentalsBulletPoint1'> Price Includes: </p>
                                                <p className='carRentalsBulletPoint2'> Unlimited Milage </p>
                                                <p className='carRentalsBulletPoint3'> Loss Damage Waiver </p>
                                                <p className='carRentalsBulletPoint4'> Theft Protection </p>
                                            </div>
                                        </div>

                                        <div className='rentalsBookingCarDetailInnerDiv3'>
                                            <div className='rentalsInnerDiv3SubDiv1'>
                                                <p> <MdOutlineChangeCircle style={{ color: "#3380f2", fontSize: "18px" }} /> Change Car </p>
                                            </div>

                                            <div className='rentalsInnerDiv3SubDiv2'>
                                                <p className='rentalsChargesDiv1'> Car Rentals Fee</p>
                                                <p className='rentalsChargesDiv2'> INR-19,902.27 </p>
                                                <p className='rentalsChargesDiv3'> Credit Card Charge INR-0.00 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade show"} style={{ textDecoration: "none", borderBottom: "none" }}>

                                <div className='rentalsBookingCarDetailsOuterDiv'>
                                    <div className='rentalsBookingCarDetailsMainDiv'>
                                        <div className='rentalsBookingCarDetailInnerDiv1'>
                                            <div className='carDetailInnerDiv1ImageDiv'>
                                                <img src='Images/Rentals/CheapCarRentals/LeftSideCarImage.png' alt='car image' />
                                            </div>

                                            <div className='carDetailsInnerDiv1DescDiv'>
                                                <div className='carDetailsDescInnerDiv1'>
                                                    <img src='Images/Rentals/CheapCarRentals/avis.png' alt='logo image' />
                                                </div>

                                                <div className='carDetailsDescInnerDiv2'>
                                                    <p> 8.2 </p>
                                                </div>

                                                <div className='carDetailssDescInnerDiv3'>
                                                    <p> Excellent </p>
                                                </div>
                                            </div>

                                            <div className='carBookingCarSpecificDiv1'>
                                                <div className='carSprcificationInnerDiv1'>
                                                    <p> <GiCarSeat style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>

                                                </div>
                                                <div className='carSprcificationInnerDiv2'>
                                                    <p> <GiCarDoor style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>
                                                </div>
                                            </div>

                                            <div className='carBookingCarSpecificDiv2'>
                                                <div className='carSprcificationInnerDiv1'>
                                                    <p> <GiCooler style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>

                                                </div>
                                                <div className='carSprcificationInnerDiv2'>
                                                    <p> <GiManualMeatGrinder style={{ fontSize: "18px", color: "#3380f2" }} /> 4 seats </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='rentalsBookingCarDetailInnerDiv2'>
                                            <div className='carDetailInnerDiv2SubDiv1'>
                                                <div className='carDetailsSubDiv1'>
                                                    <h3> Hyundai i10 </h3>
                                                </div>
                                                <div className='carDetailsSubDiv2'>
                                                    <p>  or similar </p>
                                                </div>

                                                <div className='carDetailsSubDiv3'>
                                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                        <option selected> Choose </option>
                                                        <option value="1"> Mini </option>
                                                        <option value="2"> SUV </option>
                                                        <option value="3"> Normal </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='carDetailInnerDiv2SubDiv2'>
                                                <p className='carRentalsBulletPoint1'> Price Includes: </p>
                                                <p className='carRentalsBulletPoint2'> Unlimited Milage </p>
                                                <p className='carRentalsBulletPoint3'> Loss Damage Waiver </p>
                                                <p className='carRentalsBulletPoint4'> Theft Protection </p>
                                            </div>
                                        </div>

                                        <div className='rentalsBookingCarDetailInnerDiv3'>
                                            <div className='rentalsInnerDiv3SubDiv1'>
                                                <p> <MdOutlineChangeCircle style={{ color: "#3380f2", fontSize: "18px" }} /> Change Car </p>
                                            </div>

                                            <div className='rentalsInnerDiv3SubDiv2'>
                                                <p className='rentalsChargesDiv1'> Car Rentals Fee</p>
                                                <p className='rentalsChargesDiv2'> INR-19,902.27 </p>
                                                <p className='rentalsChargesDiv3'> Credit Card Charge INR-0.00 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* <button className='innerflightNearYouShowButton'>Show More</button> */}

                    </div>

                </div>

                <div className='rentalsInnerWebpageDataFiltersDiv'>
                    <RentalsBookingPayment/>
                    {/* <div className='flightNearYouInnerWebpageDataFilter'>
                        <div className='flightNearYouInnerWebpageFilter1'>
                            <p className='flightNearYouInnerWebpageStops'>Stops</p>
                            <input type="radio" value="Direct" />
                            <label for="html">Direct</label><br />
                            <input type="radio" value="One Stop" />
                            <label for="css">One Stop</label><br />
                            <input type="radio" id="javascript" value="Multi Stop" />
                            <label for="javascript">Multi Stop</label>
                        </div>

                        <div className='flightNearYouInnerWebpageFilter2'>
                            <p className='flightNearYouInnerWebpageStops'>Payment Methods</p>
                            <input type="radio" value="Visa" />
                            <label for="html">Visa</label><br />
                            <input type="radio" value="Debit Card" />
                            <label for="css">Debit Card</label><br />
                            <input type="radio" id="javascript" value="Net Banking" />
                            <label for="javascript">Net Banking</label>
                        </div>

                        <div className='flightNearYouInnerWebpageFilter3'>
                            <p className='flightNearYouInnerWebpageTime'>Times</p>
                            <button className='flightNearYouInnerWebpageTimeButtons'>Take-off</button><button className='flightNearYouInnerWebpageTimeButtons'>Landing</button>
                            <p className='flightNeartakeoffData'>Take Off from JAI</p>
                            <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer" />
                            <p className='flightNeartakeoffData'>Take Off from Delhi</p>
                            <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer" />
                        </div>

                        <div className='flightNearYouInnerWebpageFilter4'>
                            <p className='flightNearYouInnerWebpageStops'>Airlines</p>
                            <input type="radio" value="Air Asia" />
                            <label for="html">Air Asia</label><br />
                            <input type="radio" value="Indigo" />
                            <label for="css">Indigo</label><br />
                            <input type="radio" id="javascript" value="Spice jet" />
                            <label for="javascript">Spice jet</label><br />
                            <input type="radio" value="Alliance Air" />
                            <label for="css">Alliance Air</label><br />
                            <input type="radio" id="javascript" value="Vistara" />
                            <label for="javascript">Vistara</label>
                        </div>

                        <div className='flightNearYouInnerWebpageFilter5'>
                            <p className='flightNearYouInnerWebpageTime'>Duration</p>
                            <h5 className='flightNearDurationrangeText'>Flight leg</h5>
                            <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer" />
                            <h5 className='flightNearDurationrangeText'>StopOver</h5>
                            <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer" />
                            <h5 className='flightNearDurationrangeText'>Budget</h5>
                            <input type="range" min="1" max="100" value="50" class="flightnearinnerpageslidecontainer" />
                        </div>
                    </div> */}
                </div>

                <SupplierInformation/>

                {/* <DriverDetails/> */}

            </div>
        </>
    );
}
