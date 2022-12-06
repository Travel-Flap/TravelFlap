// New code for the navbar
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewHomeNavbar.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
// import Menu from './Menu';
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaHotel, FaBusAlt, FaCaretDown, FaShip, FaCcVisa, FaBus } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { GrBus } from 'react-icons/gr';
import { GiCruiser } from 'react-icons/gi';
import { FaLaptopHouse, FaPhoneAlt, FaTags, FaBars } from 'react-icons/fa';
import { FaUserLock, FaMoneyCheck, FaPenFancy, FaCopy, FaUserCheck } from 'react-icons/fa';
import { CgMoreAlt } from 'react-icons/cg';
import { CurrencyDataFetchTest } from "../../../CurrencyDataFetchTest";
import { CountryDataFetchTest } from "../../../CountryDataFetchTest";


export const NewHomeNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [shown, setShown] = useState(false);
    const [show, setshow] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [Menu, setMenu] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    const handleClick1 = event => {
        setShown(current => !current);
    };

    const handleClick3 = event => {
        setshow(current => !current);
    };

    const handleClick4 = event => {
        setIsShow(current => !current);
    };
    const getMenu = event => {
        setMenu(current => !current);
    };


    function Box() {
        return (
            <div className='chooseCountry'>
                <div className='partLeft'>
                    <ul>
                        <li>INDIA <img src="Images/Flags/India.jpg" className='flags' /> </li>
                        <li>UAE <img src="Images/Flags/UAE.png" className='flags' /> </li>
                        <li>UK <img src="Images/Flags/Uk.webp" className='flags' /></li>
                        <li>QAT <img src="Images/Flags/QAT.webp" className='flags' /></li>
                    </ul>
                </div>
                <div className='partRight'>
                    <ul>
                        <li>USA <img src="Images/Flags/USA.webp" className='flags' /></li>
                        <li>KWT <img src="Images/Flags/KWT.svg" className='flags' /></li>
                        <li>KSA <img src="Images/Flags/KSA.png" className='flags' /></li>
                    </ul>
                </div>
            </div>
        );
    }

    function Box1() {
        return (
            <div className='chooseCurrrency'>
                <div className='partone'>
                    <ul>
                        <li> <img src="Images/Flags/India.jpg" /> </li>
                        <li> <img src="Images/Flags/UAE.png" />  </li>
                        <li><img src="Images/Flags/KSA.png" /> </li>
                        <li>  <img src="Images/Flags/KWT.svg" /> </li>
                    </ul>
                </div>
                <div className='parttwo'>
                    <ul>
                        <li> <img src="Images/Flags/Uk.webp" /> </li>
                        <li> <img src="Images/Flags/USA.webp" /> </li>
                        <li><img src="Images/Flags/QAT.webp" /> </li>
                        <li> <img src="Images/Flags/China.webp" /> </li>
                    </ul>
                </div>
                <div className='partthree'>
                    <ul>
                        <li> <img src="Images/Flags/Japan.webp" /> </li>
                        <li> <img src="Images/Flags/Italy.webp" /> </li>
                        <li><img src="Images/Flags/Malaysia.webp" /> </li>
                        <li> <img src="Images/Flags/France.webp" /> </li>
                    </ul>
                </div>
            </div>
        );
    }

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

    function Box4() {
        return (
            <div className='LoginRegisterDropDown'>
                <Link to="/loginPage">
                    <div className='LoginRegisterOptions'>
                        <FaUserLock className='LoginIcon' /> Login
                    </div>
                </Link>
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
        );
    }

    function MenuBox() {
        return (
            <div className='Menuoptions'>
                <div className='Menudropdowns'>
                    <div className='Menudropdownsoptions'>Flights</div>
                    <div className='Menudropdownsoptions'>Hotels</div>
                    <div className='Menudropdownsoptions'>Holidays</div>
                    <div className='Menudropdownsoptions'>Staycations</div>
                    <div className='Menudropdownsoptions'>Activities</div>
                    <div className='Menudropdownsoptions'>Car Rentals</div>
                    <div className='Menudropdownsoptions'>Cruises</div>
                </div>
            </div>
        );
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            <Link to="/"><div className='travelflapmainlogo'>
                <img style={{ height: "50px", width: "150px" }} src="Images/travel-flap-logo-animation.gif" alt="travelflap logo" />
                <FaBars style={{ width: "30px", height: "30px" }} className='hamburgermenuicon' onClick={getMenu} />
            </div>
            </Link>

            {Menu && <MenuBox />}
            <div className='navbar-container'>
                <div className={`${isScrolled ? 'navbar-fixed' : 'navbar'}`} >
                    {isScrolled ?
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
                                        {/* <div className='countrynames'>
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
                                        </div> */}
                                        <CurrencyDataFetchTest/>
                                    </div>
                                </div>

                                <div className='nav-link'><p> INDIA <FaCaretDown /></p>
                                    <div className='chooseCountry'>
                                        {/* <div className='countrynames'>
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
                                        </div> */}
                                        <CountryDataFetchTest/>
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
                        : <>



                            <div className='transparentNavbar'>
                                <Link to="/">
                                    <div className='logo2'>
                                        <img src="Images/travel-flap-logo-animation.gif" alt="travelflap logo" />
                                    </div>
                                </Link>
                                <div className='navbar-links-container1'>
                                    {/* <div  className='nav-link'> <p>Akbar Bizz</p></div> */}
                                    <Link style={{ textDecoration: "none" }} to="/offers"><div id='offerlink'><p>Offers</p></div></Link>
                                    <div className='nav-link'> <p>₹ INR <FaCaretDown /></p>
                                        <div className='chooseCountry'>
                                            {/* <div className='countrynames'>
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
                                            </div> */}
                                            <CurrencyDataFetchTest/>
                                        </div>
                                    </div>

                                    <div className='nav-link'><p> INDIA <FaCaretDown /></p>
                                        <div className='chooseCountry'>
                                            {/* <div className='countrynames'>
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
                                            </div> */}
                                            <CountryDataFetchTest/>
                                        </div>
                                    </div>
                                    <div className='login-register'> Login/Registerr
                                        <div className='LoginRegisterDropDown' style={{ marginRight: "-30%" }}>
                                            <Link to="/loginPage" style={{color:"white",textDecoration:"none"}}>
                                                <div className='LoginRegisterOptions' >
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
                    }
                </div>
            </div>
        </>
    )
}

