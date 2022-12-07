import React from 'react'
import './CuriseInnerPageBooking.css';
import { GrLocation, GrCheckboxSelected, GrCalendar } from "react-icons/gr";
export const CuriseInnerPageBooking = () => {
  return (
    <div>
      <div className='CuriseInnerPageBookingmain-div'>
        <div className='CuriseInnerPageBookingmain-innerdiv'>
          <div className='CuriseInnerPageBookingmain-imagemaindiv'>
            <div className='CuriseInnerPageBookingmain-imagemaindiv1'>
              <img src='Images/NewHomeLayout/CruiseDetailsPage/CruiseInnerImage1.png' className='imgofcurise' alt='image'></img>
            </div>
            
            <div className='CuriseInnerPageBookingmain-imagemaindiv2'>
              <div className='CuriseInnerPageBookingmain-image1'>
                <img src='Images/NewHomeLayout/CruiseDetailsPage/CruiseInnerImage2.png' alt='image'></img>
              </div>
              <div className='CuriseInnerPageBookingmain-image'>
                <img src='Images/NewHomeLayout/CruiseDetailsPage/CruiseInnerImage3.png' alt='image' className='imagi'></img>
              </div>
              <div className='CuriseInnerPageBookingmain-image'>
                <img src='Images/NewHomeLayout/CruiseDetailsPage/CruiseInnerImage4.png' alt='image'></img>
              </div>
            </div>

          </div>




          <div className='CuriseInnerPageBookingmain-containdiv'>
            <div className='CuriseInnerPageBookingmain-logo-containdiv'>
              <div className='CuriseInnerPageBookingmain-logo-imagediv'>
                <img src='Images/NewHomeLayout/CruiseDetailsPage/CruiseCompany.png' className='hotellogo'></img>
              </div>
              <div className='CuriseInnerPageBookingmain-logo-hotelnamediv'>
                <h3>2 Night Sundower to Goa </h3>
                <p> <GrLocation className='test1' /> Departing from Mumbai</p>
              </div>
            </div>
            <div className='CuriseInnerPageBookingmain-pricediv'>
              <div className='CuriseInnerPageBookingmain-pricecontaindiv'>
                <h4>Interior Standard</h4>
                {/* <div> */}
                <p>2 Adults (s), 0 Child(s) | 1 x Cabin Room</p>
                {/* </div> */}
                {/* <div> */}
                <p> <GrCalendar />  3 Dec 22, Saturday </p>
                {/* </div> */}
                <div className='cancellationdiv'>
                  <p> <GrCheckboxSelected />  25% Cancellation fee - Beyond 31 Days </p>
                </div>
              </div>
              <div className='CuriseInnerPageBookingmain-price'>
                <p>Per Cabin</p>
                <h4>₹ 34,467</h4>
              </div>
            </div>
            <div className='CuriseInnerPageBookingmain-selectopt'>
              <div className='CuriseInnerPageBookingmain-booknowbutton'>
                <button type="button" class="btn btn-primary CuriseInnerPageBookingmain-booknowbutton1 ">Book Now </button>
              </div>
              <div className='CuriseInnerPageBookingmain-Selectcabinbutton'>
                <button type="button" class="btn btn-primary  CuriseInnerPageBookingmain-Selectcabinbutton1 ">Select Cabin</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
