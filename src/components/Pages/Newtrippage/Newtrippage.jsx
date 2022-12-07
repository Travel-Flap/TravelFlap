import React from 'react'
import { InnerWebPageFooter } from '../SubPages/InnerWebPageFooter/InnerWebPageFooter';
import { InnerWebPageNavbar } from '../SubPages/InnerWebPageNavbar/InnerWebPageNavbar';
import './Newtrippage.css';

export const Newtrippage = () => {
  return (
    <>
    <div>
        <InnerWebPageNavbar/>
        <div className='Newtrippage-maindiv'>
            <div className='newtripdivdiv1'>
                <div className='newtripdivdiv1-containdiv'>
                    <div className='newtripdivdiv1-containheadingdiv'><h3>An easier way to manage your trips </h3></div>
                    <div className='newtripdivdiv1-pragraphdiv'><p>we make it super easy schedule organize and travel with friends and femily .
                         Trips is free -and available to use no matter where you book.  </p>
                         </div>
                         <div className='newtripdivdiv1-button'>
                            <button className='newtripdivdiv1-button1'> Sign in to plan better </button>
                            <button className='newtripdivdiv1-button2'> Find my booking  </button>
                         </div>
                </div>
                <div className='newtripdivdiv1-imagediv'>
                    <div className='newtripdivdiv1-imagemaindiv'>
                        {/* <img src='Images/trippage/image3.jpg'></img> */}
                    </div>
                    <div className='newtripdivdiv1-imagemaindiv2'>
                        <img src='Images/trippage/image3.jpg' className='tripimg'></img>
                    </div>
                </div>
            </div>
            <div className='newtripdivdiv2'>
                <div className='headtrip'><h4>Trips keep your plans in one place for a stress-free adventure. </h4></div>
                <div className='newtripdivdiv2-1stcontaindiv'>
                    <div className='stcontaindiv-contain' >
                        <div className='divcount'><h3>Plan your trip</h3></div>
                        <div className='divcount2'><p>Trips lets you plan,
                            build and manage your perfect itinerary for adventures of any length,
                             in any location </p>
                            </div>
                            <div className='divcount3'><p>Start your planning </p></div>

                    </div>
                    <div className='imagsection'>
                        <img src='Images/trippage/image4.jpg' className='imagsection1'></img>
                    </div>
                </div>

                <div className='newtripdivdiv2-1stcontaindiv'>
                <div className='imagsection'>
                        <img src='Images/trippage/image1.jpg' className='imagsection1'></img>
                    </div>
                    <div className='stcontaindiv-contain' >
                        <div className='divcount'><h3>Stay informed about unexpected changes  </h3></div>
                        <div className='divcount2'><p>Try keeps all your bookings in one place with real-time updates on any cancellations, delaysor great changes that may arise. </p>
                            </div>
                            <div className='divcount3'><p>Add your booking automatically  </p></div>

                    </div>
                   
                </div>


                <div className='newtripdivdiv2-1stcontaindiv'>
                    <div className='stcontaindiv-contain' >
                        <div className='divcount'><h3>Collaborate together</h3></div>
                        <div className='divcount2'><p>Keep everyone on your trip on the same page with shared itineraries and editing permission
                             in any location </p>
                            </div>
                            <div className='divcount3'><p>Start collaborating </p></div>

                    </div>
                    <div className='imagsection'>
                        <img src='Images/trippage/image2.jpg' className='imagsection1'></img>
                    </div>
                </div>
            </div>


            {/* <div className='newtripdivdiv3'>
                <div className=' rectangeimg'>
                    <img src='Images/trippage/Rectangle 1100.png' alt='image' className='altimagediv'></img>
                        <p>Get ready for your next adventure </p>
                        <button className='signbtn'> Sign in to plan better </button>
                </div>
            </div> */}
        </div>
    </div>

    <InnerWebPageFooter/>
    </>
  )
}
