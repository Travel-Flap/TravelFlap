import { FaRegCalendarAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import countrydata from '../../../../CountryData.json';
import "../Cruise_Banner/cruise_Banner.css";
export const Cruise_Banner = () => {
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');

    const handlecounty = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);
        //console.log(getcountryId);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Get Country id" + countryid + " And " + stateid);
    }

    return (
        <>
            <div className="containercruise_banner">

                <div className="banner_title">
                    {/* <img src='images/Cruise/CruiseBanner/CruiseBannerImage1.jpg'/> */}
                    {/* <img src='data:image/jpeg;base64,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' /> */}
                    <p>Find Your Cruise</p>
                </div>
                <div className="bannercruise_input">
                    <div className="wantcruise_stay">
                        <div>SEARCH DESTINATIONS / RIVER</div>
                        <div>DATES
                            <FaRegCalendarAlt />
                        </div>
                        <div>DAYS
                            <FaRegCalendarAlt />

                        </div>
                        <div>CRUISELINES</div>
                    </div>
                    <div className="hotel_search_destination">
                        <div className='innerdropdowncruisecontainer2'>
                            <div className='singledropcruisecontainer'>
                                <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example" style={{ border: "3px solid #3380f2" }}>

                                    <option id='homecarddropbox' value="">Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option y value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>


                        </div>

                        <div className=''>
                            <select name="" className="adult_select" style={{ border: "none" }}>
                                <option className='adult_selectinner' value="">Sail Months</option>
                                <option value="">Sep-2022</option>
                                <option value="">Oct-2022</option>
                                <option value="">Nov-2022</option>
                                <option value="">Dec-2022</option>
                                <option value="">Jan-2023</option>
                                <option value="">Feb-2023</option>
                                <option value="">Mar-2023</option>
                            </select>
                        </div>
                        <div>
                            <select name="" className="adult_select">
                                <option value="">Select Nights</option>
                                <option value="">4 To 6 Night(s)</option>
                                <option value="">7 To 9 Night(s)</option>
                                <option value="">10 To 13 Night(s)</option>
                                <option value="">More than 13 Night(s)</option>
                            </select>

                        </div>
                        <div>
                            <select name="" className="adult_select">
                                <option value="">Select Cruise</option>
                                <option value="">Carnival Cruise Line</option>
                                <option value="">Celebrity Cruises</option>
                                <option value="">Cordelia Cruises</option>
                                <option value="">Costa Cruises</option>
                                <option value="">Cunard Line</option>
                                <option value="">Disney Cruise Line</option>
                                <option value="">Holland America Line</option>
                                <option value="">MSC </option>

                            </select>
                        </div>
                    </div>
                    <div className="popularfilter">
                        <div className='chid_popularfilter'>
                            <input type="button" className="search_cruise_button" value="Search Cruise" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}