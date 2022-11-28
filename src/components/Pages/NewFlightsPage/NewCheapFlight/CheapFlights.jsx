import './CheapFlights.css';
import { useState } from 'react';
import { FaGlobeAfrica, FaPlaneDeparture, FaAngleDoubleDown, FaAngleDown } from "react-icons/fa";
import countrydata from '../../../../CountryData.json';
import {Link} from "react-router-dom";

export const CheapFlights = () => {

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

    return (
        <>
            <div className='cheapflights'>
                <div className='cheapflightsheading'>
                    <p>Cheap Flights with Destinations</p>


                </div>

                <div className='cheapflightFilters'>
                    <div className='cheapflightbookings'>
                        <div className='cheapflightbookingDeparture'>
                            Depart
                            <input type="datetime-local" placeholder='Departure' />
                        </div>
                        <div className='cheapflightbookingReturn'>
                            Return
                            <input type="datetime-local" placeholder='return' />
                        </div>
                    </div>
                    <div className='cheapflightcountryfilters'>
                        <select className="form-select cheapflightbookingReturn" onChange={(e) => handlecounty(e)} aria-label="Default select example">
                            <option value="" >Select Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <select className="form-select cheapflightbookingReturn" onChange={(e) => handlecounty(e)} aria-label="Default select example">
                            <option value="" >Select State</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='cheapflightsmaindiv'>
                    <div className='cheapflightscountrynames'>
                        <div className='cheapflightcountryborder'>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>

                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>

                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>

                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>

                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>

                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>

                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                            <div class="cheapflightdropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                    New Delhi flights
                                    <FaAngleDown className="cheapflightdownarrrow" size={"1em"} />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata" >
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                    <li><a class="dropdown-item cheapflightdata">
                                        <h6>₹ 21,286+</h6>
                                        Flight Hyderabad - Bali (HYD - IDBA)
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='cheapflightdetailscontainer'>

                        {/* <div className="cheapflightselectdiv3">
                            Best Flights
                        </div> */}

                        {/* <div className='cheapflightapidata'>
                            <div className="cheapflightdiv1">
                                <div class="cheapflightdropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                        New Delhi Flights <FaPlaneDeparture className="cheapflighticon" size={"1em"} /> */}
                        {/* <FaAngleDoubleDown className="cheapflightdownarrrow" size={"0.8em"} /> */}
                        {/* </button> */}
                        {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata" >
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                    </ul> */}
                        {/* </div>
                                <div class="cheapflightdropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                        New Delhi Flights <FaPlaneDeparture className="cheapflighticon" size={"1em"} /> */}
                        {/* <FaAngleDoubleDown className="cheapflightdownarrrow" size={"0.8em"} /> */}
                        {/* </button> */}
                        {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata" >
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                    </ul> */}
                        {/* </div> */}
                        {/* <div class="cheapflightdropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                        New Delhi Flights <FaPlaneDeparture className="cheapflighticon" size={"1em"} />
                                        <FaAngleDoubleDown className="cheapflightdownarrrow" size={"0.8em"} />
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata" >
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                    </ul>
                                </div> */}

                        {/* </div>
                            <div className="cheapflightdiv2">
                                <div class="cheapflightdropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                        New Delhi Flights <FaPlaneDeparture className="cheapflighticon" size={"1em"} /> */}
                        {/* <FaAngleDoubleDown className="cheapflightdownarrrow" size={"0.8em"} /> */}
                        {/* </button> */}
                        {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata" >
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                    </ul> */}
                        {/* </div>
                                <div class="cheapflightdropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                        New Delhi Flights <FaPlaneDeparture className="cheapflighticon" size={"1em"} /> */}
                        {/* <FaAngleDoubleDown className="cheapflightdownarrrow" size={"0.8em"} /> */}
                        {/* </button> */}
                        {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata" >
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                    </ul> */}
                        {/* </div>
                            </div>
                            <div className="cheapflightdiv3">
                                <div class="cheapflightdropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                        New Delhi Flights <FaPlaneDeparture className="cheapflighticon" size={"1em"} /> */}
                        {/* <FaAngleDoubleDown className="cheapflightdownarrrow" size={"0.8em"} /> */}
                        {/* </button> */}
                        {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata" >
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                    </ul> */}
                        {/* </div>
                                <div class="cheapflightdropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="cheapflightdropdownbutton">
                                        New Delhi Flights <FaPlaneDeparture className="cheapflighticon" size={"1em"} /> */}
                        {/* <FaAngleDoubleDown className="cheapflightdownarrrow" size={"0.8em"} /> */}
                        {/* </button> */}
                        {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata" >
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                        <li><a class="dropdown-item cheapflightdata">
                                            <h6>₹ 21,286+</h6>
                                            Flight Hyderabad - Bali (HYD - IDBA)
                                        </a></li>
                                    </ul> */}
                        {/* </div>


                            </div>
                        </div> */}

                        <div className='cheapflightdetailsContainerDiv'>

                        <Link to="/cheapflight" style={{textDecoration:"none"}}>
                            <div className='cheapflightdetails'>
                                <div className='cheapflightdetailsflightlogos'>
                                    <img src='Images/Partners Logos/Air India.png' />
                                </div>
                                <div className='cheapflightnames'>
                                    01:45AM to 04:25PM
                                    <br />
                                    <p style={{ color: "gray" }}>Air India</p>
                                </div>
                                <div className='cheapflightdetailsflightTimming'>
                                    2Hrs  10Minutes
                                </div>
                                <div className='cheapflightdetailsflightStops'>
                                    Non Stop
                                </div>
                                <div className='cheapflightdetailsflightPrice'>
                                    $2500
                                    <button className='cheapflightBooknowButton'>Book Now</button>
                                </div>
                            </div>
                        </Link>

                            <div className='cheapflightdetails'>
                                <div className='cheapflightdetailsflightlogos'>
                                    <img src='Images/Partners Logos/Air India.png' />
                                </div>
                                <div className='cheapflightnames'>
                                    01:45AM to 04:25PM
                                    <br />
                                    <p style={{ color: "gray" }}>Air India</p>
                                </div>
                                <div className='cheapflightdetailsflightTimming'>
                                    2Hrs  10Minutes
                                </div>
                                <div className='cheapflightdetailsflightStops'>
                                    Non Stop
                                </div>
                                <div className='cheapflightdetailsflightPrice'>
                                    $2500
                                    <button className='cheapflightBooknowButton'>Book Now</button>
                                </div>
                            </div>

                            <div className='cheapflightdetails'>
                                <div className='cheapflightdetailsflightlogos'>
                                    <img src='Images/Partners Logos/Air India.png' />
                                </div>
                                <div className='cheapflightnames'>
                                    01:45AM to 04:25PM
                                    <br />
                                    <p style={{ color: "gray" }}>Air India</p>
                                </div>
                                <div className='cheapflightdetailsflightTimming'>
                                    2Hrs  10Minutes
                                </div>
                                <div className='cheapflightdetailsflightStops'>
                                    Non Stop
                                </div>
                                <div className='cheapflightdetailsflightPrice'>
                                    $2500
                                    <button className='cheapflightBooknowButton'>Book Now</button>
                                </div>
                            </div>

                            
                            <div className='cheapflightdetails'>
                                <div className='cheapflightdetailsflightlogos'>
                                    <img src='Images/Partners Logos/Air India.png' />
                                </div>
                                <div className='cheapflightnames'>
                                    01:45AM to 04:25PM
                                    <br />
                                    <p style={{ color: "gray" }}>Air India</p>
                                </div>
                                <div className='cheapflightdetailsflightTimming'>
                                    2Hrs  10Minutes
                                </div>
                                <div className='cheapflightdetailsflightStops'>
                                    Non Stop
                                </div>
                                <div className='cheapflightdetailsflightPrice'>
                                    $2500
                                    <button className='cheapflightBooknowButton'>Book Now</button>
                                </div>
                            </div>
                           

                            <div className='cheapflightdetails'>
                                <div className='cheapflightdetailsflightlogos'>
                                    <img src='Images/Partners Logos/Air India.png' />
                                </div>
                                <div className='cheapflightnames'>
                                    01:45AM to 04:25PM
                                    <br />
                                    <p style={{ color: "gray" }}>Air India</p>
                                </div>
                                <div className='cheapflightdetailsflightTimming'>
                                    2Hrs  10Minutes
                                </div>
                                <div className='cheapflightdetailsflightStops'>
                                    Non Stop
                                </div>
                                <div className='cheapflightdetailsflightPrice'>
                                    $2500
                                    <button className='cheapflightBooknowButton'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

