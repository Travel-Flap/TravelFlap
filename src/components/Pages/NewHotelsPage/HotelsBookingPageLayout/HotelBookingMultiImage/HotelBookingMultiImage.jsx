import React from 'react';
import "./HotelBookingMultiImage.css";

export const HotelBookingMultiImage = () => {
  return (
    <>
      <div className='hotelBookingMultiImageOuterDiv'>
        <h4> Photos </h4>

        <div className='hotelBookingMultiImageMainDiv'>
          <div className='hotelBookingMultiImageInnerDiv1' ></div>
          <div className='hotelBookingMultiImageInnerDiv2' >

            <div className='hotelBookingMultiImageSubDiv1'>
              <img src='Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='hotel images' />
            </div>
            <div className='hotelBookingMultiImageSubDiv2'></div>
          </div>
        </div>
      </div>
    </>
  )
}
