import React from 'react';
import "./StaycationBookingMultiImage.css";

export const StaycationsBookingMultiImage = () => {
  return (
    <>
      <div className='StaycationsBookingMultiImageOuterDiv'>
        {/* <h4> Photos </h4> */}

        <div className='StaycationsBookingMultiImageMainDiv'>
          <div className='StaycationsBookingMultiImageInnerDiv1' >
            <img src='/Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='Staycations images' />
          </div>

          <div className='StaycationsBookingMultiImageMiddleMainDiv'>
            <div className='StaycationsBookingMultiImageInnerDiv2' >

              <div className='StaycationsBookingMultiImageSubDiv1'>
                <img src='/Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='Staycations images' />
              </div>
              <div className='StaycationsBookingMultiImageSubDiv2'>
                <img src='/Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='Staycations images' />
              </div>
            </div>

            <div className='StaycationsBookingMultiImageInnerDiv3' >

              <div className='StaycationsBookingMultiImageSubDiv3'>
                <img src='/Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='Staycations images' />
              </div>
              <div className='StaycationsBookingMultiImageSubDiv4'>
                <img src='/Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg' alt='Staycations images' />
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
