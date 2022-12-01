import React from 'react';
import "./WayToRentCar.css";

export const WayToRentCar = () => {
    return (
        <>
            <div className='wayToRentCarMainDiv'>
                <div class="card text-bg-dark wayToRentCarInnerDiv">
                    <img src="\Images\Rentals\MainPageImages\Comp1Image.png" class="card-img" alt="image" />
                    {/* C:\Projects\TravelFlap Main Folder\travelflap\public */}
                        <div class="card-img-overlay rentCarContentDiv">
                            <h5 class="card-title"> Easy and Fast way to rent your car </h5>
                            <p class="card-text"> Find the one that best fits your needs and budget </p>
                            {/* <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
                        </div>
                </div>
            </div>
        </>
    )
}
