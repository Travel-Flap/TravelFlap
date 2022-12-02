import React from 'react';
import "./AboutStaycation.css";
import { Button, ButtonGroup } from 'react-bootstrap';
import { IoBedSharp } from "react-icons/io5";
import { BiSprayCan } from "react-icons/bi";
import { TiTick } from "react-icons/ti";


export const Aboutstaycations = () => {
    return (
        <>
            <div className='staycationsBoookingButtonGroup'>
                <div className='staycationsBookingButtonsSelector'>
                    <div class="btn-group staycationsBookingButtonMainDiv" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" />
                        <label class="btn btn-outline-primary staycationsBookingButton1" for="btnradio1"> Overview </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                        <label class="btn btn-outline-primary staycationsBookingButton2" for="btnradio2">  Rooms </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                        <label class="btn btn-outline-primary staycationsBookingButton3" for="btnradio3"> Facilities </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label class="btn btn-outline-primary staycationsBookingButton4" for="btnradio4">  Reviews </label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                        <label class="btn btn-outline-primary staycationsBookingButton5" for="btnradio4"> Policies </label>
                    </div>
                </div>

                <div className='staycationsBookingstaycationsNameHeading'>
                    <div className='staycationsBookingNameSubDiv'>
                        <h2>About staycations Hari Piorko</h2>
                        <p>This family-friendly New Delhi staycations is located near the airport, within 1 mi (2 km) of Gole Market,
                            Palika Bazaar and Ajmal Khan Road. Gurudwara Bangla Sahib and Jama Masjid are also within 2 miles (3 km).
                            Rama Krishna Ashram Marg Station is only a 5-minute walk and New Delhi Station is 11 minutes.
                        </p>
                    </div>

                    <div className='staycationsBookingInfoIcons'>
                        <div className='staycationsBookingTextIcons'>
                            <div className='staycationsBookingTextIconsInner1' >
                                <h5> <IoBedSharp style={{fontSize:20}} /> staycations Room</h5>
                                <p>You'll have a private room with all the staycations's amenities. </p>
                            </div>
                            <div className='staycationsBookingTextIconsInner2' >
                                <h5> < BiSprayCan /> Clean and Tidy</h5>
                                <p>This stay has listed several different cleanliness practices. </p>
                            </div>
                        </div>

                        <div className='staycationsBookingTextIconsInne3' >
                            <h5> <TiTick /> Freebies </h5>
                            <p> This stay includes Wi-Fi for free.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
