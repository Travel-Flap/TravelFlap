import React from 'react'
import './PopularDestinationBanner0.css';
import { BsSearch, BsPerson } from "react-icons/bs";

import { FaPlusCircle, FaMinusCircle, FaAngleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';

export const PopularDestinationBanner0 = () => {
    return (
        <div>

            <div className='card destiBannerDiv '>
                <img className='destiBannerimage' src="Images/PopularDestinationImages/Populardestinationinnerimage banner1.jpg" alt='banner image' />
                <div class="card-img-overlay ">
                    <p className='PopularDestiBannerHeading'> TURKEY PACKAGES</p>
                    <div className='vaccy'><p>Let's plan your next vacation</p></div>

                </div>

            </div>
        </div>
    )
}
