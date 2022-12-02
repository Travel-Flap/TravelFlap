import React from 'react';
import "./StaycationInnerTopComp.css";

export const StaycationInnerTopComp = () => {
    return (
        <>
            <div className="staycationInnerTopOuterDiv">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner staycationInnerCarouselImageDiv">
                        <div className="carousel-item data-interval=1000 active">
                            <img src="/Images/StaycationStaticbannerImages/staycation1.jpg" className="d-block w-100" alt="banner image" />
                        </div>
                        <div className="carousel-item data-interval=1000">
                            <img src="/Images/StaycationStaticbannerImages/staycation2.jpg" className="d-block w-100" alt="banner image" />
                        </div>
                        <div className="carousel-item data-interval=1000">
                            <img src="/Images/StaycationStaticbannerImages/staycation3.jpg" className="d-block w-100" alt="banner image" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='staycationInnerTopContent'>
                    <h3> STAYCATION WITH <span> TRAVELFLAP </span> </h3>
                    <p> Let's plan your next staycation </p>
                </div>
            </div>
        </>
    )
}
