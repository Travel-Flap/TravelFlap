import React from 'react';

import "./HolidaysThemeFilter.css";

export const HolidaysThemeFilter = () => {
  return (
    <div className='holdiaysThemeFilterOuterDiv'>
      <div className='holidaysFilterdiv1'>
        <div className='holidayFilterInnerdiv1'>
          Holidays Category
          {/* <input type="text" placeholder='Search Destination...' /> */}
        </div>
        <div className='newHolidaysThemedealsbutton'> 
                                View all Deals
        </div>
        {/* <div className='holidayFilterInnerdiv2'>
          <select class="form-select" aria-label="Default select example">
            <option selected>Sort By</option>
            <option value="1">A to Z</option>
            <option value="2">Z to A</option>
            <option value="3">Low to High</option>
            <option value="4">High to Low</option>
          </select>
        </div> */}

      </div>
    <div style={{display:"flex",flexDirection:"row"}}>
      <div className='holidaysFilterdiv2' style={{marginLeft:"10%"}}>
        <div className='holidaysFilterHolidayOffers'>
          <div class="holidaysOfferImageCard card text-bg-dark">
            <img src="Images/NewHomeLayout/Holidays/HolidaysOfferImage.jpg" class="card-img" alt="Holidays Offer Image" />
              <div class="card-img-overlay holidayFilterHeading">
                <h5 class="card-title">Holiday Offers</h5>
                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
              </div>
          </div>
        </div>

        <div className='holidaysFilterHolidayThemes'>
          <div class="holidayThemeImageCard card text-bg-dark">
            <img src="Images/NewHomeLayout/Holidays/HolidaysThemeImage.jpg" class="card-img" alt="Holidays Theme Image" />
              <div class="card-img-overlay holidayFilterHeading1">
                <h5 class="card-title">Holiday Themes</h5>
                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
              </div>
          </div>
        </div>
      </div>
      <div className='holidaysFilterdiv2' style={{marginLeft:"-7%"}}>
        <div className='holidaysFilterHolidayOffers'>
          <div class="holidaysOfferImageCard card text-bg-dark">
            <img src="Images/NewHomeLayout/Holidays/HolidaysOfferImage.jpg" class="card-img" alt="Holidays Offer Image" />
              <div class="card-img-overlay holidayFilterHeading">
                <h5 class="card-title">Holiday Offers</h5>
                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
              </div>
          </div>
        </div>

        <div className='holidaysFilterHolidayThemes'>
          <div class="holidayThemeImageCard card text-bg-dark">
            <img src="Images/NewHomeLayout/Holidays/HolidaysThemeImage.jpg" class="card-img" alt="Holidays Theme Image" />
              <div class="card-img-overlay holidayFilterHeading1">
                <h5 class="card-title">Holiday Themes</h5>
                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
