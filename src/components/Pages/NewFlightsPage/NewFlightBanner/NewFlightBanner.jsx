import React from 'react';
// import { NewHolidayBannerForm } from './NewHolidayBannerForm';
import "./NewFlightBanner.css";
import { NewFlightBannerForm } from './NewFlightBannerForm';

import {LazyLoadImage} from "react-lazy-load-image-component";

export const NewFlightsBanner = () => {
    return (
        <div className='holidayBannerContainer'>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner holidayBannerImagesmaindiv">
                    <div class="carousel-item active">
                        <LazyLoadImage src="Images/NewHomeLayout/Banners/Flight/Images 1.jpg" class="d-block w-100" alt="flights banner image1" />
                    </div>
                    <div class="carousel-item">
                        <LazyLoadImage src="Images/NewHomeLayout/Banners/Flight/Images 2.jpg" class="d-block w-100" alt="flights banner image 2" />
                    </div>
                    <div class="carousel-item">
                        <LazyLoadImage src="Images/NewHomeLayout/Banners/Flight/images 3.jpg" class="d-block w-100" alt="fligts banner image 3" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* <NewHolidayBannerForm/> */}

            <NewFlightBannerForm/>
            <div className='newFlightsBannerTexts' >
                <p>Travelflap lifts your -
                    <span>
                        <i>Vacation Mood</i>
                    </span>
                </p>

            </div>
        </div>
    )
}
