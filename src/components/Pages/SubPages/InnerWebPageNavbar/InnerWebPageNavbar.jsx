import { Outlet, Link } from "react-router-dom";
import './InnerWebPageNavbar.css';
import { useState, useEffect } from 'react';
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaHotel, FaBusAlt, FaCaretDown, FaShip, FaCcVisa, FaBus } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';
import { FaLaptopHouse, FaPhoneAlt, FaTags} from 'react-icons/fa';
import { FaUserLock,FaMoneyCheck,FaPenFancy,FaCopy,FaUserCheck  } from 'react-icons/fa';
import { CgMoreAlt } from 'react-icons/cg';
// import { Home } from "../Pages/Home/Home";

export const InnerWebPageNavbar = () => {
    const [show, setshow] = useState(false);

    const handleClick3 = event => {
        setshow(current => !current);
    };

    function Box3() {
        return (
            <div className='NavbarMoreOption'>
                <div className='navbarOptions'>
                    <FaPhoneAlt className='contactIcon' />  ContactUs
                </div>
                <div className='navbarOptions '>
                    <GiPalmTree className='miceIcon' />  Safe Stays
                </div>
                <div className='navbarOptions'>
                    <FaTags className='offersIcon' /> Offers
                </div>
                {/* <div className='navbarOptions'>
                    <FaShip className='inspireIcon' /> Inspire
                </div> */}
            </div>
        );
    }
   
    return (
        <>
        
        <div className='navbar_fixed'>
                            <div>
                                <Link to="/">
                                    <div className='logo1'>
                                        <img src="Images/travel-flap-logo-animation.gif" alt="travelflap logo" />
                                    </div>
                                </Link>
                            </div>
                            <div>

                                <div className='menu-links'>
                                    <li> <MdFlight className='menuicons' size={"1.5em"} />
                                        <Link to="/flights"> <p className='fixed-menu-link'>Flights</p> </Link> </li>
                                    <li> <FaHotel size={"1.5em"} />
                                        <Link to="/hotel">
                                            <Link to="/hotel"> <p className='fixed-menu-link'>Hotel</p> </Link> </Link> </li>
                                    <li> <FaCcVisa size={"1.5em"} />
                                        <Link to="/visa"> <p className='fixed-menu-link'>Visa</p> </Link> </li>
                                    <li> <GiPalmTree size={"1.5em"} />
                                        <Link to='/holidays'> <p className='fixed-menu-link'>Holidays</p> </Link> </li>

                                    <li> <FaLaptopHouse size={"1.5em"} />
                                        <Link to="/staycations"> <p className='fixed-menu-link' style={{ marginLeft: "3%" }}>Staycation</p> </Link> </li>

                                    <li> <FaBus size={"1.5em"} />
                                        <Link to="/rentals"> <p className='fixed-menu-link' style={{ marginLeft: "15%" }}>Rentals</p> </Link> </li>

                                    <li> <FaShip size={"1.5em"} />
                                        <Link to="/cruise"><p className='fixed-menu-link'>Cruise</p> </Link> </li>

                                    <li> <MdOutlineLocalActivity size={"1.5em"} />
                                        <Link to="/activities"> <p className='fixed-menu-link'>Activities</p> </Link> </li>
                                    <li> <CgMoreAlt size={"1.5em"} /> <p className='fixed-menu-link' onClick={handleClick3}>More</p> </li>
                                    {show && <Box3 />}
                                </div>
                            </div>
                            <div className='navbar-links-container' id='hide' >
                                {/* <div  className='nav-link'> <p>Akbar Bizz</p></div> */}
                                <Link style={{ textDecoration: "none" }} className='linkdecoration' to="/offers"><div id='offerlink'><p>Offers</p></div></Link>
                                {/* <div className='nav-link'> <p>OFFERS</p></div> */}
                                <div className='nav-link'> <p>₹ INR <FaCaretDown /></p>
                                    <div className='chooseCountry'>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                    </div>
                                </div>

                                <div className='nav-link'><p> INDIA <FaCaretDown /></p>
                                    <div className='chooseCountry'>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                        <div className='countrynames'>
                                            INDIA <img src="Images/Flags/India.jpg" className='flags' />
                                        </div>
                                    </div>
                                </div>

                                <div className='login-register'> <p>Login / Register <FaCaretDown /></p>
                                    <div className='LoginRegisterDropDown'>
                                    <Link to="/loginPage" style={{color:"white",textDecoration:"none"}}>
                                        <div className='LoginRegisterOptions'>
                                            <FaUserLock className='LoginIcon' /> Login
                                        </div>
                                    </Link>
                                    <Link to="/signupPage" style={{color:"white",textDecoration:"none"}}>
                                        <div className='LoginRegisterOptions '>
                                            <FaUserCheck className='RegisterIcon' /> Register
                                        </div>
                                    </Link>
                                    <Link to="/blogs" style={{color:"white",textDecoration:"none"}}>
                                        <div className='LoginRegisterOptions'>
                                            <FaPenFancy className='BlogsIcon' /> Blogs
                                        </div>
                                    </Link>
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



