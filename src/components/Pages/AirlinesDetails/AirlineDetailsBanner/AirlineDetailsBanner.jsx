import React from 'react';
import "./AirlineDetailsBanner.css";
import { FaSearch } from 'react-icons/fa';
import { BsPerson } from "react-icons/bs";

export const AirlineDetailsBanner = () => {
    return (
        <>
            <div className="airlinesDetailsBannerMainDiv">
                <div className="airlinesDetailsBannerContainerDiv">

                    <div className="airlinesDetailsinputBox1">
                        <div className="airlinesDetailsTravellerInput">
                            <select className="airlinesDetailsdetailforminputs">
                                <option value="Visa Types">Choose Travellers</option>
                                <option value="Transit Visa">Adult</option>
                                <option value="Insurance Visa">Child</option>
                                <option value="job visa + insurance">Infants</option>
                            </select>
                        </div>

                        <div className="airlinesDetailsTravellerInput">
                            <select className="airlinesDetailsdetailforminputs">
                                <option value="Visa Types">Choose Trip Type</option>
                                <option value="Transit Visa">One Way</option>
                                <option value="Insurance Visa">Round Trip</option>
                                <option value="job visa + insurance">Two Way</option>
                            </select>
                        </div>

                        <div className="airlinesDetailsTravellerInput">
                            <select className="airlinesDetailsdetailforminputs">
                                <option value="Visa Types">Choose Class</option>
                                <option value="Transit Visa">Economy Class</option>
                                <option value="Insurance Visa">Business Class</option>
                                <option value="job visa + insurance">Premium Class</option>
                                <option value="job visa + insurance">First Class</option>
                            </select>
                        </div>
                    </div>

                    <div className="airlinesDetailsinputBox2">

                        <div className="airlinesDetailslocation1">
                            <input type="text" placeholder='Delhi' className="airlinesDetailsdepart" />
                        </div>

                        <div className="airlinesDetailsarrowImage">

                        </div>


                        <div className="airlinesDetailslocation1">
                            <input type="text" placeholder='Jaipur' className="airlinesDetailsdepart" />
                        </div>

                        <div className="airlinesDetailsDates">
                            <input type="datetime-local" placeholder='Check-In Date' className="airlinesDetailscheckin" />
                            <input type="datetime-local" placeholder='Check-Out Date' className="airlinesDetailscheckOut" />
                        </div>

                        <div className="airlinesDetailssearchButton">
                            <FaSearch className="airlinesDetailssearchButtonIcon" />
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}
