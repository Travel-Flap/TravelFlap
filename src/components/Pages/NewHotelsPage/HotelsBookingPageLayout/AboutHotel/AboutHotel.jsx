import React from 'react';
import "./AboutHotel.css";
import { Button, ButtonGroup } from 'react-bootstrap';
import { IoBedSharp } from "react-icons/io5";
import { BiSprayCan } from "react-icons/bi";
import { TiTick } from "react-icons/ti";


export const AboutHotel = () => {
    return (
        <>
            <div className='hotelBoookingButtonGroup'>
                <div className='hotelBookingButtonsSelector'>
                    <div class="btn-group hotelBookingButtonMainDiv" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingButton1" for="btnradio1">Mountain Hotel</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingButton2" for="btnradio2"> Dessert Hotel </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingButton3" for="btnradio3"> Camping Site </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingButton4" for="btnradio4"> Lake Front Hotel </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label class="btn btn-outline-primary hotelBookingButton5" for="btnradio4"> Beach Hotel </label>
                    </div>
                </div>

                <div className='hotelBookingHotelNameHeading'>
                    <div>
                        <h2>About Hotel Hari Piorko</h2>
                        <p>This family-friendly New Delhi hotel is located near the airport, within 1 mi (2 km) of Gole Market,
                            Palika Bazaar and Ajmal Khan Road. Gurudwara Bangla Sahib and Jama Masjid are also within 2 miles (3 km).
                            Rama Krishna Ashram Marg Station is only a 5-minute walk and New Delhi Station is 11 minutes.
                        </p>
                    </div>

                    <div className='hotelBookingInfoIcons'>
                        <div className='hotelBookingTextIcons'>
                            <div className='hotelBookingTextIconsInner1' >
                                <h5> <IoBedSharp /> Hotel Room</h5>
                                <p>You'll have a private room with all the hotel's amenities. </p>
                            </div>
                            <div className='hotelBookingTextIconsInner2' >
                                <h5> < BiSprayCan /> Clean and Tidy</h5>
                                <p>This stay has listed several different cleanliness practices. </p>
                            </div>
                        </div>

                        <div className='hotelBookingTextIconsInne3' >
                            <h5> <TiTick /> Freebies </h5>
                            <p> This stay includes Wi-Fi for free.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
