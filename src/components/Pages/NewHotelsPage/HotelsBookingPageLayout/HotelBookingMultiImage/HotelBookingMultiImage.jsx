import React from 'react';
import "./HotelBookingMultiImage.css";

export const HotelBookingMultiImage = () => {
  return (
    <>
      <div className='hotelBookingMultiImageOuterDiv'>
        <h4> Photos </h4>

        <div className='hotelBookingMultiImageMainDiv'>
          <div className='hotelBookingMultiImageInnerDiv1' >
            <img src='Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='hotel images' />
          </div>

          <div className='hotelBookingMultiImageMiddleMainDiv'>
            <div className='hotelBookingMultiImageInnerDiv2' >

              <div className='hotelBookingMultiImageSubDiv1'>
                <img src='Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='hotel images' />
              </div>
              <div className='hotelBookingMultiImageSubDiv2'>
                <img src='Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='hotel images' />
              </div>
            </div>

            <div className='hotelBookingMultiImageInnerDiv3' >

              <div className='hotelBookingMultiImageSubDiv3'>
                <img src='Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='hotel images' />
              </div>
              <div className='hotelBookingMultiImageSubDiv4'>
                <img src='Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='hotel images' />
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
