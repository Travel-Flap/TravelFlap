import React from 'react';
import "./RideWithTravelFlap.css";

import { GiCarSeat,GiManualMeatGrinder } from "react-icons/gi";

export const RideWIthTravelFlap = () => {
    return (
        <>
            <div className='rideWithsMainOterDiv'>

                <div className='rideWithHEadingsDiv'>
                    <h3> Ride with TravelFlap </h3>

                    {/* <div className='rideWithSelectDiv'>
                        <select className="form-select" aria-label="Default select example">
                            <option selected> Four Wheelers  </option>
                            <option value="1"> Two Wheelers </option>
                            <option value="2"> Three Wheelers </option>
                            <option value="3"> Bus </option>
                        </select>
                    </div> */}
                </div>


                <div className='rideWithCardsOuterDiv'>
                    <div className="card rideWithInnerImageDiv">
                        <img src="/Images/Rentals/MainPageImages/Car.png" className="card-img-top carImage" alt="ride offer image" />
                        <div className="card-body offeredServicesCarContentFiv">
                            <h5 className="card-title"> Car </h5>
                            <p className='card-text'> Budget Friendly </p>
                            {/* <p className="card-text"> <GiCarSeat /> 4 Seater </p>
                            <p className="card-text"> <GiManualMeatGrinder /> Manual </p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div className="card rideWithInnerImageDiv">
                        <img src="/Images/Rentals/MainPageImages/Auto.png" className="card-img-top autoImage" alt="ride offer image" />
                        <div className="card-body offeredServicesContentFiv">
                            <h5 className="card-title"> Auto </h5>
                            <p className='card-text'> Budget Friendly </p>
                            {/* <p className="card-text"> <GiCarSeat /> 4 Seater </p>
                            <p className="card-text"> <GiManualMeatGrinder /> Manual </p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div className="card rideWithInnerImageDiv">
                        <img src="/Images/Rentals/MainPageImages/Scooter.png" className="card-img-top scooterImage" alt="ride offer image" />
                        <div className="card-body offeredServicesContentFiv">
                            <h5 className="card-title"> Bike </h5>
                            <p className='card-text'> Budget Friendly </p>
                            {/* <p className="card-text"> <GiCarSeat /> 4 Seater </p>
                            <p className="card-text"> <GiManualMeatGrinder /> Manual </p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div className="card rideWithInnerImageDiv">
                        <img src="/Images/Rentals/MainPageImages/Bus.png" className="card-img-top busImage" alt="ride offer image" />
                        <div className="card-body offeredServicesContentFiv">
                            <h5 className="card-title"> Bus </h5>
                            <p className='card-text'> Budget Friendly </p>
                            {/* <p className="card-text"> <GiCarSeat /> 4 Seater </p>
                            <p className="card-text"> <GiManualMeatGrinder /> Manual </p> */}
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
