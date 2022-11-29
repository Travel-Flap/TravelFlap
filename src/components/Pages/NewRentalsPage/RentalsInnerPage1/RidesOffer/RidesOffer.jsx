import React from 'react';
import "./RidesOffer.css";

export const RidesOffer = () => {
    return (
        <>
            <div className='rideOffersMainOterDiv'>
                <div>
                    <h3> Rides we Offer </h3>
                </div>

                <div className='rideOfferCardsOuterDiv'>
                    <div class="card ridesOfferInnerImageDiv">
                        <img src="/Images/Rentals/RidesWeOffer/CarImage.png" class="card-img-top" alt="ride offer image" />
                        {/* <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div> */}
                    </div>

                    <div class="card ridesOfferInnerImageDiv">
                        <img src="/Images/Rentals/RidesWeOffer/CarImage.png" class="card-img-top" alt="ride offer image" />
                        {/* <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div> */}
                    </div>

                    <div class="card ridesOfferInnerImageDiv1">
                        <img src="/Images/Rentals/RidesWeOffer/CarImage.png" class="card-img-top" alt="ride offer image" />
                        {/* <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
