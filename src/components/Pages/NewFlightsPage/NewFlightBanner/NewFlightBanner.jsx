import React from 'react';
// import { NewHolidayBannerForm } from './NewHolidayBannerForm';
import "./NewFlightBanner.css";
import { NewFlightBannerForm } from './NewFlightBannerForm';

export const NewFlightsBanner = () => {
    return (
        <div className='holidayBannerContainer'>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner holidayBannerImagesmaindiv">
                    <div class="carousel-item active">
                        <img src="Images/NewHomeLayout/Banners/Flight/Images 1.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="Images/NewHomeLayout/Banners/Flight/Images 2.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="Images/NewHomeLayout/Banners/Flight/images 3.jpg" class="d-block w-100" alt="..." />
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
                <p>The whole world Awaits with
                    <span>
                        <i>TravelFlap</i>
                    </span>
                </p>

            </div>
        </div>
    )
}
