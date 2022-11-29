import React from 'react';
import "./CarRentalsReview.css";

export const CarRentalsReview = () => {
    return (
        <>
            <div className='carRentalsMainOuterDiv'>
                <div className='carRentalsReviewHeading'>
                    <h3>Car rental reviews </h3>
                </div>

                <div className='carRentalsReviewMainCOntainer'>
                    <div className='carRentalsReviewInnerDiv1'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className='rentalsReviewImageContentDiv'>
                                        <img src='Images/Rentals/CheapCarRentals/budget..png' alt='image' />
                                        <p>
                                            Budget Rent a Car is an American car rental company that was founded in 1958 in Los Angeles,
                                            California by Morris Mirkin. Budget is a subsidiary of the Avis Budget Group, with its operations
                                            headquartered in Parsippany, New Jersey.
                                        </p>
                                        <button className='btn btn-primary'> More Reviews </button>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card-body rentalsReviewRatingDiv">
                                        <h5 className="card-title "> 7.5
                                            <span className='reviewSpan1'> Good </span>
                                            <span className='reviewSpan2'> 82 reviews </span>
                                        </h5>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p > Cleanliness </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar  progressInnerDiv" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Value for money </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Comfort </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Pick-up/Drop-off </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                            </div>

                                        </div>
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='carRentalsReviewInnerDiv2'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className='rentalsReviewImageContentDiv'>
                                        <img src='Images/Rentals/CheapCarRentals/aamcar.png' alt='image' />
                                        <p>
                                            Budget Rent a Car is an American car rental company that was founded in 1958 in Los Angeles,
                                            California by Morris Mirkin. Budget is a subsidiary of the Avis Budget Group, with its operations
                                            headquartered in Parsippany, New Jersey.
                                        </p>
                                        <button className='btn btn-primary'> More Reviews </button>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card-body rentalsReviewRatingDiv">
                                        <h5 className="card-title "> 7.5
                                            <span className='reviewSpan1'> Good </span>
                                            <span className='reviewSpan2'> 82 reviews </span>
                                        </h5>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p > Cleanliness </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar  progressInnerDiv" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Value for money </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Comfort </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Pick-up/Drop-off </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                            </div>

                                        </div>
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='carRentalsReviewMainCOntainer'>
                    <div className='carRentalsReviewInnerDiv1'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className='rentalsReviewImageContentDiv'>
                                        <img src='Images/Rentals/CheapCarRentals/hertz.png' alt='image' />
                                        <p>
                                            Budget Rent a Car is an American car rental company that was founded in 1958 in Los Angeles,
                                            California by Morris Mirkin. Budget is a subsidiary of the Avis Budget Group, with its operations
                                            headquartered in Parsippany, New Jersey.
                                        </p>
                                        <button className='btn btn-primary'> More Reviews </button>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card-body rentalsReviewRatingDiv">
                                        <h5 className="card-title "> 7.5
                                            <span className='reviewSpan1'> Good </span>
                                            <span className='reviewSpan2'> 82 reviews </span>
                                        </h5>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p > Cleanliness </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar  progressInnerDiv" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Value for money </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Comfort </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Pick-up/Drop-off </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                            </div>

                                        </div>
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='carRentalsReviewInnerDiv2'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className='rentalsReviewImageContentDiv'>
                                        <img src='Images/Rentals/CheapCarRentals/avis.png' alt='image' />
                                        <p>
                                            Budget Rent a Car is an American car rental company that was founded in 1958 in Los Angeles,
                                            California by Morris Mirkin. Budget is a subsidiary of the Avis Budget Group, with its operations
                                            headquartered in Parsippany, New Jersey.
                                        </p>
                                        <button className='btn btn-primary'> More Reviews </button>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card-body rentalsReviewRatingDiv">
                                        <h5 className="card-title "> 7.5
                                            <span className='reviewSpan1'> Good </span>
                                            <span className='reviewSpan2'> 82 reviews </span>
                                        </h5>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p > Cleanliness </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar  progressInnerDiv" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Value for money </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Comfort </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                                            </div>

                                        </div>

                                        <div className='carRentalsReviewProgressBarDiv'>
                                            <div className='rentalsProgressContentDiv'>
                                                <p> Pick-up/Drop-off </p>
                                            </div>

                                            <div class="progress cleanProgress">
                                                <div class="progress-bar progress-bar " role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                            </div>

                                        </div>
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='rentalsReviewShowAll'>
                    <p>Show all reviews </p>
                </div>
            </div>
        </>
    )
}
