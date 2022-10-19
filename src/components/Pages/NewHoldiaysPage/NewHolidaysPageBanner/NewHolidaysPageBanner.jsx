import React from 'react';
import { NewHolidayBannerForm } from './NewHolidayBannerForm';
import "./NewHolidaysPageBanner.css";

export const NewHolidaysPageBanner = () => {
    return (
        <div className='holidayBannerContainer'>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner holidayBannerImagesmaindiv">
                    <div class="carousel-item active">
                        <img src="Images/NewHomeLayout/BackgroundImages/Holidaybannerimages.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="Images/NewHomeLayout/BackgroundImages/Holidaybannerimages.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="Images/NewHomeLayout/BackgroundImages/Holidaybannerimages.jpg" class="d-block w-100" alt="..." />
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

            <NewHolidayBannerForm/>

            <div className='newHolidayBannerTexts' >
                <p> Plan your holiday trip with
                    <span>
                        <i>TravelFlap</i>
                    </span>
                </p>

            </div>
        </div>
    )
}
