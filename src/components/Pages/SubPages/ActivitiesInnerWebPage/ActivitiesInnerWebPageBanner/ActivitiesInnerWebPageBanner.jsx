import "./ActivitiesInnerWebPageBanner.css";
import { BsSearch, BsPerson } from "react-icons/bs";
import { FaPlusCircle, FaMinusCircle} from 'react-icons/fa';

export const ActivitiesInnerWebPageBanner = () => {

    return (

            <>
             <div className= 'card BannerDiv '>
                <img  className='activityinnerBannerimage'  src="Images/ActivitiesInnerPage/bannerimage.webp" alt='banner image'/>
                <div class="card-img-overlay ">
                    <p className='activityinnerbannerHeading'>ACTIVITIES WITH TRAVELFLAP</p>
                     <div className="activityinnerbannerbutton">Let's Plan Your Next Activities</div>
                </div>

                 
            <div id='activityinnerfilterFormContainer'>
                <div className='activityinnerInputmaindiv'>
                    <div className='activityinnerDestinationInputContainer'>
                        <h5>Enter Destination</h5>
                        <div className='activityinnerNameInput'>
                            <BsSearch className='activityinnerInputicon'/>
                            <div className='activityinnerInputNameContainer'>
                                <input type="text" placeholder='Search destination,Hotels'/>
                            </div>

                        </div>
                    </div>

                    <div className='activityinnerCheckIn_dateContainer'>
                        <h5>Checkin Date</h5>
                        <input type="datetime-local" placeholder='Check-In Date' />
                    </div>

                    <div className='activityinnerCheckout_DateContainer'>
                        <h5>CheckOut Date</h5>
                        <input type="datetime-local" placeholder='Check-Out Date' />
                    </div>

                    <div className='activityinnerGuest_outerDiv'>
                        <h5>Travellers</h5>
                        <div id='activityinner_departure'>
                            <h3>Choose travellers </h3>
                            {/* <FaAngleDown className='downHotelPagearrowicon' /> */}
                            <div className="dropdownactivityinner-content">
                                <div className='navbaractivityinnerPageOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbaractivityinnerPageOptions '>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbaractivityinnerPageOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                            <BsPerson className='activityinnerGuestIcon' />
                        </div>
                    </div>

                    <div className='activityinner_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>

                    </div>
            </div>
            </>
    );
}

