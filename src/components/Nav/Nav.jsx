// New code for the navbar
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Nav.css';
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
import { FaLaptopHouse, FaPhoneAlt, FaTags,FaBars } from 'react-icons/fa';
import { FaUserLock,FaMoneyCheck,FaPenFancy,FaCopy,FaUserCheck  } from 'react-icons/fa';
import { CgMoreAlt } from 'react-icons/cg';

import { Home } from "../Pages/Home/Home";

export const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [shown, setShown] = useState(false);
    const [show, setshow] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const[Menu,setMenu] = useState(false);

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
                        <li>INDIA <img src="images/Flags/India.jpg" className='flags' /> </li>
                        <li>UAE <img src="images/Flags/UAE.png" className='flags' /> </li>
                        <li>UK <img src="images/Flags/Uk.webp" className='flags' /></li>
                        <li>QAT <img src="images/Flags/QAT.webp" className='flags' /></li>
                    </ul>
                </div>
                <div className='partRight'>
                    <ul>
                        <li>USA <img src="images/Flags/USA.webp" className='flags' /></li>
                        <li>KWT <img src="images/Flags/KWT.svg" className='flags' /></li>
                        <li>KSA <img src="images/Flags/KSA.png" className='flags' /></li>
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
                        <li> <img src="images/Flags/India.jpg" /> </li>
                        <li> <img src="images/Flags/UAE.png" />  </li>
                        <li><img src="images/Flags/KSA.png" /> </li>
                        <li>  <img src="images/Flags/KWT.svg" /> </li>
                    </ul>
                </div>
                <div className='parttwo'>
                    <ul>
                        <li> <img src="images/Flags/Uk.webp" /> </li>
                        <li> <img src="images/Flags/USA.webp" /> </li>
                        <li><img src="images/Flags/QAT.webp" /> </li>
                        <li> <img src="images/Flags/China.webp" /> </li>
                    </ul>
                </div>
                <div className='partthree'>
                    <ul>
                        <li> <img src="images/Flags/Japan.webp" /> </li>
                        <li> <img src="images/Flags/Italy.webp" /> </li>
                        <li><img src="images/Flags/Malaysia.webp" /> </li>
                        <li> <img src="images/Flags/France.webp" /> </li>
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
                    <GiPalmTree className='miceIcon' />  Mice
                </div>
                <div className='navbarOptions'>
                    <FaTags className='offersIcon' /> Offers
                </div>
                <div className='navbarOptions'>
                    <FaShip className='inspireIcon' /> Inspire
                </div>
            </div>
        );
    }

    function Box4() {
        return (
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
        
        
        <Link to="/home"><div className='travelflapmainlogo'>
              <img style={{height:"50px",width:"150px"}} src="Images/TravelFlapLogo.jpg" alt="travelflap logo" />
                <FaBars style={{width:"30px",height:"30px"}} className='hamburgermenuicon' onClick={getMenu}/>
        </div>
        </Link>  
        
        {Menu && <MenuBox/>}
        <div className='navbar-container'>
            <div className={`${isScrolled ? 'navbar-fixed' : 'navbar'}`} >
                {isScrolled ?
                    <div className='navbar_fixed'>
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
                                <Link to="/flights"> <p className='fixed-menu-link'>Flights</p> </Link> </li>
                                <li> <FaHotel size={"1.5em"} />
                                <Link to="/hotel">
                                <Link to="/hotel"> <p className='fixed-menu-link'>Hotel</p> </Link> </Link> </li>
                                <li> <FaCcVisa size={"1.5em"} />
                                <Link to="/visa"> <p className='fixed-menu-link'>Visa</p> </Link> </li>
                                <li> <GiPalmTree size={"1.5em"} />
                                <Link to='/holidays'> <p className='fixed-menu-link'>Holidays</p> </Link> </li>
                                    
                                <li> <FaBus size={"1.5em"} /> 
                                <Link to="/rentals"> <p className='fixed-menu-link'>Rentals</p> </Link> </li>

                                <li> <FaShip size={"1.5em"} /> 
                                <Link to="/cruise"><p className='fixed-menu-link'>Cruise</p> </Link> </li>

                                <li> <FaLaptopHouse size={"1.5em"} /> 
                                <Link to="/villa"> <p className='fixed-menu-link'>Villa</p> </Link> </li>
                                
                                <li> <MdOutlineLocalActivity size={"1.5em"} />
                                <Link to="/activities"> <p className='fixed-menu-link'>Activities</p> </Link> </li>
                                <li> <CgMoreAlt size={"1.5em"} /> <p className='fixed-menu-link' onClick={handleClick3}>More</p> </li>
                                {show && <Box3 />}
                            </div>
                        </div>
                        <div className='navbar-links-container' id='hide' >
                            {/* <div  className='nav-link'> <p>Akbar Bizz</p></div> */}
                            <Link to="/offers"><div id='offerlink'><p>Offers</p></div></Link>
                            {/* <div className='nav-link'> <p>OFFERS</p></div> */}
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
                            
                            <div className='login-register'> <p>Login / Register <FaCaretDown /></p>
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
                    : <>

                    
                    
                        <div className='transparentNavbar'>
                        <Link to="/">
                            <div className='logo2'>
                                <img src="images/travelFlapLogo.jpg" alt="travelflap logo" />
                            </div>
                            </Link>
                        <div className='navbar-links-container1'>
                            {/* <div  className='nav-link'> <p>Akbar Bizz</p></div> */}
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
                            <div className='login-register'> Login/Register  
                                 <div className='LoginRegisterDropDown' style={{marginRight:"-30%"}}>
                                     <div className='LoginRegisterOptions' >
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
                }
            </div>

            {/* <Menu />
            <div className='banner'>
                <div className='banner-service'>
                    <div className='banner-radio-label' >
                        <label class="form-control">
                            <input type="radio" name="radio" />
                            One Way
                        </label>
                        <label class="form-control">
                            <input type="radio" name="radio" />
                            Round Trip
                        </label>
                        <label class="form-control">
                            <input type="radio" name="radio" />
                            Multi City
                        </label>
                    </div>
                    <div>
                        <h1 >Book Flight Tickets</h1>
                    </div>
                </div>

                <div className='filter-travel-container' >
                    <div className='filter-fromTo' >
                        <div className='from-name'>
                            <label>FROM</label>
                            <h6>Abu Dhabi</h6>
                            <p>[AUH] Abu Dhabi International </p>
                        </div>
                        <BiCurrentLocation className='location' />
                        <div className='from-name2'>
                            <label>TO </label>
                            <h6>Dubai</h6>
                            <p>[DXB] Dubai</p>
                        </div>
                    </div>
                    <div className='date-from'>
                        <div className='depart' >
                            <FaCalendarAlt />
                            <label>Depart</label>
                            <IoIosArrowDown />
                            <h6>18 <span>Jul’22</span></h6>
                            <p>Monday</p>
                        </div>
                        <div className='depart'>
                            <FaCalendarAlt />
                            <label>Return</label>
                            <IoIosArrowDown />
                            <h6>18 <span>Jul’22</span></h6>
                            <p>Book a round trip to save more</p>
                        </div>
                        </div>
                        <div  id='travel' >
                        <div className='depart'>
                            <label>Travellers & Class</label>
                            <h6>1 <span>Travellers</span></h6>
                            <p>Economy</p>
                            </div>
                        <div><button className='search-btn'>Search Flight</button></div>
                        
                        </div>
                </div>
            </div> */}
            {/* <div className='test'>
            <img src='https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg'/>
         </div> */}
        </div>
        </>
    )
}

// export default Nav;

// Old code for the navbar
// import { useState, useEffect } from 'react';
// import './Nav.css';
// import { BiCurrentLocation } from 'react-icons/bi';
// import { IoIosArrowDown } from 'react-icons/io';
// import { FaCalendarAlt } from 'react-icons/fa';
// import { MdFlight } from 'react-icons/md';
// import { FaHotel, FaBusAlt, FaCaretDown, FaShip, FaCcVisa, FaBus } from 'react-icons/fa';
// import { RiVisaFill } from 'react-icons/ri';
// import { GiPalmTree } from 'react-icons/gi';
// import { GrBus } from 'react-icons/gr';
// import { GiCruiser } from 'react-icons/gi';
// import { FaLaptopHouse, FaPhoneAlt, FaTags } from 'react-icons/fa';
// import { CgMoreAlt } from 'react-icons/cg';



// export const Nav = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isShown, setIsShown] = useState(false);
//     const [shown, setShown] = useState(false);
//     const [show, setshow] = useState(false);

//     const handleClick = event => {
//         setIsShown(current => !current);
//     };

//     const handleClick1 = event => {
//         setShown(current => !current);
//     };

//     const handleClick3 = event => {
//         setshow(current => !current);
//     };

//     function Box() {
//         return (
//             <div className='chooseCountry'>
//                 <div className='partLeft'>
//                     <ul>
//                         <li>INDIA <img src="images/Flags/India.jpg" className='flags' /> </li>
//                         <li>UAE <img src="images/Flags/UAE.png" className='flags' /> </li>
//                         <li>UK <img src="images/Flags/Uk.webp" className='flags' /></li>
//                         <li>QAT <img src="images/Flags/QAT.webp" className='flags' /></li>
//                     </ul>
//                 </div>
//                 <div className='partRight'>
//                     <ul>
//                         <li>USA <img src="images/Flags/USA.webp" className='flags' /></li>
//                         <li>KWT <img src="images/Flags/KWT.svg" className='flags' /></li>
//                         <li>KSA <img src="images/Flags/KSA.png" className='flags' /></li>
//                     </ul>
//                 </div>
//             </div>
//         );
//     }

//     function Box1() {
//         return (
//             <div className='chooseCurrrency'>
//                 <div className='partone'>
//                     <ul>
//                         <li> <img src="images/Flags/India.jpg" /> </li>
//                         <li> <img src="images/Flags/UAE.png" />  </li>
//                         <li><img src="images/Flags/KSA.png" /> </li>
//                         <li>  <img src="images/Flags/KWT.svg" /> </li>
//                     </ul>
//                 </div>
//                 <div className='parttwo'>
//                     <ul>
//                         <li> <img src="images/Flags/Uk.webp" /> </li>
//                         <li> <img src="images/Flags/USA.webp" /> </li>
//                         <li><img src="images/Flags/QAT.webp" /> </li>
//                         <li> <img src="images/Flags/China.webp" /> </li>
//                     </ul>
//                 </div>
//                 <div className='partthree'>
//                     <ul>
//                         <li> <img src="images/Flags/Japan.webp" /> </li>
//                         <li> <img src="images/Flags/Italy.webp" /> </li>
//                         <li><img src="images/Flags/Malaysia.webp" /> </li>
//                         <li> <img src="images/Flags/France.webp" /> </li>
//                     </ul>
//                 </div>
//             </div>
//         );
//     }

//     function Box3() {
//         return (
//             <div className='NavbarMoreOption'>
//                 <div className='navbarOptions'>
//                     <FaPhoneAlt className='contactIcon' />  ContactUs
//                 </div>
//                 <div className='navbarOptions '>
//                     <GiPalmTree className='miceIcon' />  Mice
//                 </div>
//                 <div className='navbarOptions'>
//                     <FaTags className='offersIcon' /> Offers
//                 </div>
//                 <div className='navbarOptions'>
//                     <FaShip className='inspireIcon' /> Inspire
//                 </div>
//             </div>
//         );
//     }



//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         }
//         window.addEventListener("scroll", handleScroll)

//         return () => {
//             window.removeEventListener("scroll", handleScroll)
//         }
//     }, [])

//     return (
//         <div className='navbar-container' >
//             <div className={`${isScrolled ? 'navbar-fixed' : 'navbar'}`} >
//                 {isScrolled ?
//                     <div className='navbar_fixed' >
//                         <div>
//                             <div className='logo1'>
//                                 <img src="images/travelFlapLogo.jpg" alt="travelflap logo" />
//                             </div>
//                         </div>
//                         <div>

//                             <div className='menu-links'>
//                                 <li> <MdFlight size={"1.5em"} /> <p className='fixed-menu-link'>Plane</p> </li>
//                                 <li> <FaHotel size={"1.5em"} /> <p className='fixed-menu-link'>Hotel</p> </li>
//                                 <li> <FaCcVisa size={"1.5em"} /> <p className='fixed-menu-link'>Visa</p> </li>
//                                 <li> <GiPalmTree size={"1.5em"} /> <p className='fixed-menu-link'>Holidays</p> </li>
//                                 <li> <FaBus size={"1.5em"} /> <p className='fixed-menu-link'>Bus</p> </li>
//                                 <li> <FaShip size={"1.5em"} /> <p className='fixed-menu-link'>Cruise</p> </li>
//                                 <li> <FaLaptopHouse size={"1.5em"} /> <p className='fixed-menu-link'>Villa</p> </li>
//                                 <li> <CgMoreAlt size={"1.5em"} /> <p className='fixed-menu-link' onClick={handleClick3}>More</p> </li>
//                                 {show && <Box3 />}
//                             </div>
//                         </div>
//                         <div className='navbar-links-container' id='hide' >
//                             {/* <div  className='nav-link'> <p>Akbar Bizz</p></div> */}
//                             <div className='nav-link'> <p>IRCTC</p></div>
//                             <div className='nav-link' onClick={handleClick1}> <p>₹ INR <FaCaretDown /></p></div>
//                             {shown && <Box1 />}
//                             <div className='nav-link' onClick={handleClick}><p> INDIA <FaCaretDown /></p></div>
//                             <div className='login-register'> Login / Register</div>
//                             {isShown && <Box />}
//                         </div>
//                     </div>
//                     : <>
//                         <div>
//                             <div className='logo2'>
//                                 <img src="images/travelFlapLogo.jpg" alt="travelflap logo" />
//                             </div>
//                         </div>
//                         <div className='navbar-links-container'>
//                             {/* <div  className='nav-link'> <p>Akbar Bizz</p></div> */}
//                             <div className='nav-link'> <p>IRCTC</p></div>
//                             <div className='nav-link' onClick={handleClick1}> <p>₹ INR <FaCaretDown /></p></div>
//                             {shown && <Box1 />}
//                             <div className='nav-link' onClick={handleClick}><p> INDIA <FaCaretDown /></p></div>
//                             <div className='login-register'>Login / Register</div>
//                             {isShown && <Box />}
//                         </div>  </>
//                 }
//             </div>

            
//         </div>

//     )
// }

// // export default Nav;