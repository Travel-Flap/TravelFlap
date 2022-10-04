import { Outlet, Link } from "react-router-dom";
import './HotelNav.css';
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaHotel, FaBusAlt, FaCaretDown, FaShip, FaCcVisa, FaBus } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';
import { FaLaptopHouse, FaPhoneAlt, FaTags} from 'react-icons/fa';
import { FaUserLock,FaMoneyCheck,FaPenFancy,FaCopy,FaUserCheck  } from 'react-icons/fa';
import { CgMoreAlt } from 'react-icons/cg';
// import { Home } from "../Pages/Home/Home";

export const HotelNav = () => {
   
    return (
        <>
        
        
        <div className='hotelnavbar_fixed' >
                        <div>
                            <Link to="/">
                            <div className='logo1'>
                                <img src="images/travelFlapLogo.jpg" alt="travelflap logo" />
                            </div>
                            </Link>
                        </div>
                        <div>

                            <div className='menu-links'>
                                <li> <MdFlight className='menuicons' size={"1.5em"} />
                                <Link to="/flight"> <p className='fixed-menu-link'>Flights</p></Link> </li>
                                <li> <FaHotel size={"1.5em"} />
                                <Link to="/hotel"> <p className='fixed-menu-link'>Hotel</p> </Link> </li>
                                <li> <FaCcVisa size={"1.5em"} />
                                <Link to="/visa"> <p className='fixed-menu-link'>Visa</p> </Link> </li>
                                <li> <GiPalmTree size={"1.5em"} />
                                <Link to='/holidays'> <p className='fixed-menu-link'>Holidays</p> </Link> </li>
                                    
                                <li> <FaBus size={"1.5em"} />
                                <Link to="/rentals"> <p className='fixed-menu-link'>Bus</p> </Link> </li>
                                <li> <FaShip size={"1.5em"} />
                                <Link to="/cruise"> <p className='fixed-menu-link'>Cruise</p> </Link> </li>
                                <li> <FaLaptopHouse size={"1.5em"} />
                                <Link to="/staycations"> <p className='fixed-menu-link'>Villa</p> </Link> </li>
                                <li> <MdOutlineLocalActivity size={"1.5em"} /> 
                                <Link to="/activities"> <p className='fixed-menu-link'>Activities</p> </Link> </li>
                                <li> <CgMoreAlt size={"1.5em"} /> <p className='fixed-menu-link' id='moreoptions'>More
                                <div className='hotelnavbarmoredropdowncontent'>
                                    <div className='hotelnavbarmoreOptions'>
                                    <Link to='/contact' className='hotelnavbarmoreOptions'><FaPhoneAlt className='hotelnavbarcontacticon' /> ContactUs </Link>
                                    </div>
                                    <div className='hotelnavbarmoreOptions'>
                                    <Link to='/mice' className='hotelnavbarmoreOptions'><GiPalmTree className='hotelnavbarmiceicon' />  Mice </Link>
                                    </div>
                                    <div className='hotelnavbarmoreOptions'>
                                    <Link to='/offers' className='hotelnavbarmoreOptions'>   <FaTags className='hotelnavbarofferIcon' /> Offers </Link>
                                    </div>
                                    <div className='hotelnavbarmoreOptions'>
                                    <Link to='/inspire' className='hotelnavbarmoreOptions'> <FaShip className='hotelnavbarinspireIcon' /> Inspire </Link> 
                                    </div>
                                </div>  

                                </p> </li>
                                
                            </div>
                        </div>
                        <div className='navbar-links-container' id='hide' >
                            <Link to="/offers"><div id='offerlink'><p>Offers</p></div></Link>
                            <div className='nav-link'> <p>₹ INR <FaCaretDown /></p>
                            <div className='chooseCountry'>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div>
                            </div>
                            </div>
                            
                            <div className='nav-link'><p> INDIA <FaCaretDown /></p>
                            <div className='chooseCountry'>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div>
                                       <div className='countrynames'>
                                       INDIA <img src="images/Flags/India.jpg" className='flags' />
                                       </div> 
                           </div>
                     </div>
                            
                            <div className='hotellogin-register'> Login / Register <FaCaretDown />
                                  <div className='LoginRegisterDropDown'>
                                       <div className='LoginRegisterOptions'>
                                           <FaUserLock className='LoginIcon' /> Login
                                       </div>
                                       <div className='LoginRegisterOptions '>
                                           <FaUserCheck className='RegisterIcon' /> Register
                                       </div>
                                       <div className='LoginRegisterOptions'>
                                           <FaPenFancy className='BlogsIcon' /> Blogs
                                       </div>
                                       <div className='LoginRegisterOptions'>
                                            <FaMoneyCheck className='PaymentIcon' /> Make Payments
                                       </div>
                                       <div className='LoginRegisterOptions'>
                                            <FaCopy className='BookingIcon' /> My Bookings
                                       </div>
                                   </div>
                            </div>

                        </div>
                    </div>
        </>
    )
}



