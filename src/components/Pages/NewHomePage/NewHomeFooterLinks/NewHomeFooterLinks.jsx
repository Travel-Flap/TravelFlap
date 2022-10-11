import React from 'react';
import "./NewHomeFooterLinks.css";
import { NewFooterLinkDrop } from './NewFooterLinkDrop'

export const NewHomeFooterLinks = () => {
    return (
        <div class="card text-bg-dark">
            <img src="Images/NewHomeLayout/BackgroundImages/HomePageLinkBackground.jpeg" class="card-img" alt="..." />
            <div class="card-img-overlay">
                {/* <div>
                    <NewFooterLinkDrop />
                </div> */}
                <div className='outercontainer'>
                    <div className='innerdiv1'>
                        <h3>More Links</h3>
                        <p>
                            <a className='linktext' href='#'>Blog</a>
                            <span className='slash'>|</span>
                            <a className='linktext' href='#'>Branches</a>
                            <span className='slash'>|</span>
                            <a className='linktext'>Bus Tickets</a>
                            <span className='slash'>|</span>
                            <a className='linktext'>Travel Advisory</a>
                            <span className='slash'>|</span>
                            <a className='linktext'>Domestic flights</a>
                            <span className='slash'>|</span>
                            <a className='linktext'>International Flights</a>
                            <span className='slash'>|</span>
                            <a className='linktext'>Low Cost Airlines</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Cheap Flight Booking</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Cheap Air Tickets</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Flight Schedule</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>About us</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Misshandled Baggage Report</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Partner With Us</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>FAQs</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Legal</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Careers</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>retrieve Booking</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>News & Events</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Partner Login</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>IRCTC Agent</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>DownLoad Our Mobile App</a>
                            {/* <span className='slash'>|</span> */}
                        </p>

                        <h3>Visa</h3>
                        <p>
                            <a className='linktext' href='#'>Dubai Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Singapore Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Malaysia Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Sri Lanka Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Schengen Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>US Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>UK Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>China Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Australia Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>South Africa Visa</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Europe Visa</a>


                        </p>

                        <h3>Domestic tour Packages</h3>
                        <p>
                            <a className='linktext' href='#'>Kashmir Holiday Packages</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Leh Ladakh Packages</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Goa Holidays</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Andaman Holidays</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Kerala Tour Packages</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Himachal Tour Package</a>
                            <span className='slash'>|</span>
                        </p>

                        <h3>International tour Packages</h3>
                        <p>

                            <a className='linktext' href='#'>Dubai Tour Package</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Malaysia Tour Package</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Singapore Tour Package</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Thailand Tour Packages</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Bali Packages</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Srilanka Tour Package</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Europe Tour Package</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Mauritius </a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Maldives Packages</a>
                        </p>

                        <h3>Cruise Line</h3>
                        <p>

                            <a className='linktext' href='#'>Cordelia Cruise</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Angriya Cruise</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Carnival Cruise</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Celebrity Cruise</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Costa Cruise</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Cunard Cruise</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Disney Cruise</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Dream Cruise </a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Holland America Cruise</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>MSC Cruise </a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Norwegian Cruise </a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Princess Cruise </a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Royal Caribbean Cruise </a>
                        </p>

                    </div>


                    <div className='innerdiv2'>
                        <h3>International Flight</h3>
                        <p>
                            <a className='linktext' href='#'>Delhi Dubai Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Delhi Bangkok Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Delhi Toronto Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Mumbai Dubai Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Delhi Singapore Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Delhi London Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Delhi Kathmandu Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Mumbai London Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Chennai Singapore Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Mumbai Singapore Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Delhi Newyork Flights</a>


                        </p>

                        <h3>Domestic Flights</h3>
                        <p>
                            <a className='linktext' href='#'>Pune Banglore Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Chennai Delhi Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Banglore Chennai Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Mumbai Delhi Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Banglore Hyderabad Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Ahmedabad Goa Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Mumbai Kolkata Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Hyderabad Delhi Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Banglore Goa Flights</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Mumbai Goa Flights</a>

                        </p>

                        <h3>International Airlines</h3>
                        <p>

                            <a className='linktext' href='#'>Emirates Airlines</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Oman Air Airlines</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Air India Express Airlines</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Tiger Airways</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Kuwait Airways</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Air Arabia Airlines</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Etihad Airways</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Srilankan Airlines </a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Air Asia India Airlines</a>
                        </p>

                        <h3>Domestic Airlines</h3>
                        <p>

                            <a className='linktext' href='#'>Indigo Airlines</a>
                            <span className='slash'>|</span>

                            <a className='linktext' href='#'>Spicejet Airlines</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Air India Airlines</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Go Air Airlines</a>
                            <span className='slash'>|</span>

                            <a className='linktext'>Air Costa Airlines</a>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
