import React from 'react';
import { RentalInnerBannerForm } from './RentalsInnerBannerForm';
import "./RentalsInnerBannerSection.css";

export const RentalsInnerBannerSection = () => {
    return (
        <div className='rentalsInnerBannerMainOuterDiv'>
            <div className='rentalsInnerBannerMainImageDiv'>
                <img src='/Images/Rentals/MainRentalImages/BanneImage.png' alt='rentals Banner Image' />

                <div className='rentalsInnerPageInputDiv'>
                    <RentalInnerBannerForm/>
                </div>
            </div>

        </div>
    )
}
