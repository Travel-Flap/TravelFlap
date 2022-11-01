import React from 'react';
import Offers from './Offers.png';
import HolidaysTheme from './HolidaysTheme.png';
import InternationalOffers from './InternationalOffers.png';
import Domestic from './Domestic.png';
import "./NewHolidaysCategory.css";

export const NewHolidaysCategory = () => {
  return (
    <>
      <div className='NewHolidaysCategorymaindiv'>
         <div className='NewHolidaysCategoryhreadingdiv'>
            Holiday Category
         </div>
         <div className='NewHolidaysCategorycarddiv'>
            <div className='NewHolidaysCategorycard'>
                    <div className='NewHolidaysCategorycardicons'>
                        <img width={"100%"} height={"100%"} src={Offers} />
                    </div>
                    <div className='NewHolidaysCategorycardsubheading'>
                        Holidays Offers
                        <br/>
                        <p style={{fontSize:"15px",fontWeight:"100"}}>Check Out our latest <br/> Holidays Offers <br/> for your next trip </p>
                    </div>
            </div>
            <div className='NewHolidaysCategorycard'>
                    <div className='NewHolidaysCategorycardicons'>
                        <img width={"100%"} height={"100%"} src={Domestic} />
                    </div>
                    <div className='NewHolidaysCategorycardsubheading'>
                        Domestic <br/>  Offers
                        <br/>
                        <p style={{fontSize:"15px",fontWeight:"100"}}>Check Out our latest <br/> domestic Holiday</p>
                    </div>
            </div>
            <div className='NewHolidaysCategorycard'>
                    <div className='NewHolidaysCategorycardicons'>
                        <img width={"100%"} height={"100%"} src={InternationalOffers} />
                    </div>
                    <div className='NewHolidaysCategorycardsubheading'>
                        International <br/>  Offers
                        <br/>
                        <p style={{fontSize:"15px",fontWeight:"100"}}>Check Out our latest <br/> International Holiday</p>
                    </div>
            </div>
            <div className='NewHolidaysCategorycard'>
                    <div className='NewHolidaysCategorycardicons'>
                        <img width={"100%"} height={"100%"} src={HolidaysTheme} />
                    </div>
                    <div className='NewHolidaysCategorycardsubheading'>
                        Holidays Themes
                        <br/>
                        <p style={{fontSize:"15px",fontWeight:"100"}}>Check Out our latest <br/> Holidays Themes <br/> for your next trip </p>
                    </div>
            </div>
         </div>
      </div>
    </>
  )
}
