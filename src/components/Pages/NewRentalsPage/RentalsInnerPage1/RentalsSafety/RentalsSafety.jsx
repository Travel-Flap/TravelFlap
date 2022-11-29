import React from 'react';
import "./RentalsSafety.css";

export const RentalsSafety = () => {
    return (
        <>
            <div className='rentalsSafetyMainOuterDiv'>
                <div class="card mb-3 rentalsSafetyMAinCardDiv" >
                    <div class="row g-0">

                        <div class="col-md-6">
                            <div class="card-body rentalsSafetyContentDIv">
                                <h5 class="card-title"> Your Safety is our priority </h5>
                                <p class="card-text">
                                    With our safety feature and every standard in our Community Guidlines,
                                    we're committed to helping to create a safe environment for our users.
                                </p>

                                <div className='rentalsSafetyButtonDiv'>
                                    <button className='btn btn-primary safetyButton1'> Our Community guideline </button>
                                    <button className='btn btn-primary safetyButton2'> Safety Features </button>
                                </div>

                            </div>
                        </div>

                        <div class="col-md-6">
                            <img src="Images/Rentals/RidesWeOffer/CarDriverImage.png" class="img-fluid rounded-start" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
