import React from 'react';
import "./NewVisaBanner.css";
import { NewVisaBannerForm } from './NewVisaBannerForm';

export const NewVisaPageBanner = () => {
    return (
        <div className='holidayBannerContainer'>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner holidayBannerImagesmaindiv">
                    <div class="carousel-item active">
                        <img src="Images/NewHomeLayout/Banners/Visa/image1.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="Images/NewHomeLayout/Banners/Visa/Image2.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="Images/NewHomeLayout/Banners/Visa/Image 3.jpg" class="d-block w-100" alt="..." />
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

            <NewVisaBannerForm/>

            <div className='newHolidayBannerTexts' >
                <p>Get hassle-free visa services with - 
                    <span>
                        <i>TravelFlap</i>
                    </span>
                </p>

            </div>
        </div>
    )
}
