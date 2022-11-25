import "./FlightNearYouInnerWebpageBanner.css";
import { FaSearch} from 'react-icons/fa';
import { BsPerson } from "react-icons/bs";

export const FlightNearYouInnerWebpageBanner = () => {

    return (
            <>
              <div className="flightNearYouInnerWebpageBannerMainDiv">
                    <div className="flightNearYouInnerWebpageBannerContainerDiv">

                        <div className="flightNearYouInnerWebpageinputBox1">
                            <div className="flightNearYouInnerWebpageTravellerInput">
                                <select className="flightNearYouInnerWebpagedetailforminputs">
                                    <option value="Visa Types">Choose Travellers</option>
                                    <option value="Transit Visa">Adult</option>
                                    <option value="Insurance Visa">Child</option>
                                    <option value="job visa + insurance">Infants</option>
                                </select>
                            </div>
                            <div className="flightNearYouInnerWebpageTravellerInput">
                                <select className="flightNearYouInnerWebpagedetailforminputs">
                                    <option value="Visa Types">Choose Trip Type</option>
                                    <option value="Transit Visa">One Way</option>
                                    <option value="Insurance Visa">Round Trip</option>
                                    <option value="job visa + insurance">Two Way</option>
                                </select>
                            </div>
                            <div className="flightNearYouInnerWebpageTravellerInput">
                               <select className="flightNearYouInnerWebpagedetailforminputs">
                                    <option value="Visa Types">Choose Class</option>
                                    <option value="Transit Visa">Economy Class</option>
                                    <option value="Insurance Visa">Business Class</option>
                                    <option value="job visa + insurance">Premium Class</option>
                                    <option value="job visa + insurance">First Class</option>
                                </select>
                            </div>
                        </div>

                        <div className="flightNearYouInnerWebpageinputBox2">

                            <div className="flightNearYouInnerWebpagelocation1">
                                <input type="text" placeholder='Delhi' className="flightNearYouInnerWebpagedepart"/>
                            </div>

                            <div className="flightNearYouInnerWebpagearrowImage">

                            </div>


                            <div className="flightNearYouInnerWebpagelocation1">
                                 <input type="text" placeholder='Jaipur' className="flightNearYouInnerWebpagedepart"/>
                            </div>

                            <div className="flightNearYouInnerWebpageDates">
                                 <input type="datetime-local" placeholder='Check-In Date' className="flightNearYouInnerWebpagecheckin" />
                                 <input type="datetime-local" placeholder='Check-Out Date' className="flightNearYouInnerWebpagecheckOut"/>
                            </div>

                            <div className="flightNearYouInnerWebpagesearchButton">
                                <FaSearch className="flightNearYouInnerWebpagesearchButtonIcon"/>
                            </div>
                                    
                        </div>

                    </div>


              </div>
            </>
    );
}

// 89B8FE

// <div id='newFlightsPage_departure'>
// <h5>Choose Travellers </h5>
// <div className="dropdownnewFlightsPage-content">
//     <div className='navbarnewFlightPageOptions'>
//         <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
//     </div>
//     <div className='navbarnewFlightPageOptions '>
//         <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
//     </div>
//     <div className='navbarnewFlightPageOptions'>
//         <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
//     </div>
// </div>
// <BsPerson className='newFlightHomeGuestIcon' />
// </div>

// <div className='newFlight_chooseClass1'>
// <select>
//     <option value>Choose Class</option>
//     <option value="1">Economy</option>
//     <option value="2">Business</option>
//     <option value="3">Premium</option>
//     <option value="3">First Class</option>
// </select>
// </div>

// <div className='newFlight_chooseClass1'>
//                                     <select>
//                                         <option value>Choose Class</option>
//                                         <option value="1">Economy</option>
//                                         <option value="2">Business</option>
//                                         <option value="3">Premium</option>
//                                         <option value="3">First Class</option>
//                                     </select>
//                                 </div>

// <div className='newFlightsinputNameContainer'>
// <input type="text" placeholder='Jaipur' />
// </div>

// <div className='newFlightsinputNameContainer'>
// <input type="text" placeholder='Jaipur' />
// </div>

// <div className='newFlightsCheckIn_dateContainer'>
// <input type="datetime-local" placeholder='Check-In Date' />
// </div>

// <div className='newFlightsCheckout_DateContainer'>
// <input type="datetime-local" placeholder='Check-Out Date' />
// </div>