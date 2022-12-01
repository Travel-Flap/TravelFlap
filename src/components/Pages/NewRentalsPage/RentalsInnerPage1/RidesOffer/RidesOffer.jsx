import React from 'react';
import "./RidesOffer.css";

import { GiCarSeat, GiManualMeatGrinder } from "react-icons/gi";

export const RidesOffer = () => {
    return (
        <>
            <div className='rideOffersMainOterDiv'>

                <div className='rideOfferHEadingsDiv'>
                    <h3> Select your Transport </h3>

                    <div className='rideOfferSelectDiv'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected> Four Wheelers  </option>
                            <option value="1"> Two Wheelers </option>
                            <option value="2"> Three Wheelers </option>
                            <option value="3"> Bus </option>
                        </select>
                    </div>
                </div>


                <div className='rideOfferCardsOuterDiv'>
                    <div class="card ridesOfferInnerImageDiv">
                        <img src="/Images/Rentals/MainRentalImages/CarImage1.png" class="card-img-top" alt="ride offer image" />
                        <div class="card-body offeredServicesContentFiv">
                            <h5 class="card-title"> Toyota Avalon </h5>
                            <p class="card-text"> <GiCarSeat /> 4 Seater </p>
                            <p class="card-text"> <GiManualMeatGrinder /> Manual </p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div class="card ridesOfferInnerImageDiv">
                        <img src="/Images/Rentals/MainRentalImages/CarImage2.png" class="card-img-top" alt="ride offer image" />
                        <div class="card-body offeredServicesContentFiv">
                            <h5 class="card-title"> Toyota Avalon </h5>
                            <p class="card-text"> <GiCarSeat /> 4 Seater </p>
                            <p class="card-text"> <GiManualMeatGrinder /> Manual </p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div class="card ridesOfferInnerImageDiv">
                        <img src="/Images/Rentals/MainRentalImages/CarImage3.png" class="card-img-top" alt="ride offer image" />
                        <div class="card-body offeredServicesContentFiv">
                            <h5 class="card-title"> Toyota Avalon </h5>
                            <p class="card-text"> <GiCarSeat /> 4 Seater </p>
                            <p class="card-text"> <GiManualMeatGrinder /> Manual </p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div class="card ridesOfferInnerImageDiv">
                        <img src="/Images/Rentals/MainRentalImages/CarImage4.png" class="card-img-top" alt="ride offer image" />
                        <div class="card-body offeredServicesContentFiv">
                            <h5 class="card-title"> Toyota Avalon </h5>
                            <p class="card-text"> <GiCarSeat /> 4 Seater </p>
                            <p class="card-text"> <GiManualMeatGrinder /> Manual </p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
