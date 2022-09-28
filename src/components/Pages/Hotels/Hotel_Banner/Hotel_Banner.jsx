
import { Outlet, Link } from "react-router-dom";
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaPlusCircle, FaMinusCircle, FaArrowCircleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';
import { FaShip, FaPhoneAlt, FaTags } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { GrBus } from 'react-icons/gr';
import { GiCruiser } from 'react-icons/gi';
import { BsFillMoonFill } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg';
import "../Hotel_Banner/Hotel_Banner.css";


export const Hotel_Banner = () => {
    return (
        <>


            <div className="container_banner">
                <div className="banner_title">
                    <p>Find Your Place To Stay</p>
                </div>

                <div className="banner_input">

                    <div className='carouselhotelmenu'>

                        <Link to="/flights" className='carouselhotelmenu-icon' id='borderLeft'>
                            <MdFlight size={"1.9em"} className="carouselFormicon" />
                            Flight
                        </Link>
                        <Link to="/hotel" className='carouselhotelmenu-icon'>
                            <FaHotel size={"1.9em"} className="carouselFormicon" />
                            Hotel
                        </Link>
                        <Link to="/visa" className='carouselhotelmenu-icon' >
                            <RiVisaFill size={"1.9em"} className="carouselFormicon" />
                            Visa
                        </Link>
                        <Link to="/holidays" className='carouselhotelmenu-icon' >
                            <GiPalmTree size={"1.9em"} className="carouselFormicon" />
                            Holidays
                        </Link>
                        <Link to="/Villa" className='carouselhotelmenu-icon' >
                            <FaLaptopHouse size={"1.9em"} className="carouselFormicon" />
                            Villas
                        </Link>
                        <Link to="/cruise" className='carouselhotelmenu-icon' >
                            <GiCruiser size={"1.9em"} className="carouselFormicon" />
                            Cruise
                        </Link>
                        <Link to="/activities" className='carouselhotelmenu-icon' >
                            <MdOutlineLocalActivity size={"1.9em"} className="carouselFormicon" />
                            Activities
                        </Link>


                        <div className='carouselhotelmenu-icon' id='borderright'>
                            <CgMoreAlt size={"1.9em"} />
                            More

                            <div className='moredropdowncontent'>
                                <div className='moreOptions'>
                                    <Link to='/contact' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
                                </div>
                                <div className='moreOptions '>
                                    <Link to='/mice' className='moreOptions'><GiPalmTree className='miceIcon' />  Mice </Link>
                                </div>
                                <div className='moreOptions'>
                                    <Link to='/offers' className='moreOptions'>   <FaTags className='offersIcon' /> Offers </Link>
                                </div>
                                <div className='moreOptions'>
                                    <Link to='/inspire' className='moreOptions'> <FaShip className='inspireIcon' /> Inspire </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="want_stay">
                        <div>Where do you want to Stay?</div>
                        <div>Check-in</div>
                        <div>Check-out</div>
                        <div>Guest and Roome</div>
                    </div>
                    <div className="hotel_search_destination">
                        <div>
                            <input type="text" placeholder="Enter Hotel Name " className="hotelnametext" />
                        </div>
                        <div><input type="date" /></div>
                        <div>
                            <input type="date" />
                        </div>
                        <div>
                            <select name="" className="adult_select">
                                <option value="">1 adult 1 room</option>
                                <option value="">2 adult 2 room</option>
                                <option value="">5 adult 3 room</option>
                                <option value="">2 adult no room</option>
                            </select>
                        </div>
                    </div>
                    <div className="popularfilter">
                        <div className="checkfilter">
                            <div>
                                <span>
                                    Popular Filter:
                                </span>
                            </div>
                            <div >
                                <input type="checkbox" />
                                <span>Free Cancellition</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>4 stars</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span>3 starts</span>
                            </div>
                        </div>
                        <div>
                            <input type="button" className="search_hotel_button" value="Search hotels" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}