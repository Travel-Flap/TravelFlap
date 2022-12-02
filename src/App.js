import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Offers } from "./components/Pages/Offers/Offers";
import { NewCruisePage } from "./components/Pages/NewCruisePage/NewCruisePage";
import { NewActivities } from "./components/Pages/NewActivities/NewActivities";
import { NewVisa } from "./components/Pages/NewVisa/NewVisa";
import { VisaDetails } from "./components/Pages/Visa/VisaInnerpages/VisaDetails";
import { NewStaycationPage } from "./components/Pages/NewStaycationPage/NewStaycationPage";
import { Rentals } from "./components/Pages/Rentals/Rentals";

import { NewHomeLayout } from "./components/Pages/NewHomePage/NewHomeLayout";
import { NewFlight } from "./components/Pages/NewFlightsPage/NewFlight";
import { NewHotel } from "./components/Pages/NewHotelsPage/NewHotel";
import { NewHomeNav } from "./components/Pages/NewHomePage/NewHomeNavbar/NewHomeNavbar";
import { NewHolidaysPage } from "./components/Pages/NewHoldiaysPage/NewHolidaysPage";
import { NewRentalsPage } from "./components/Pages/NewRentalsPage/NewRentalsPage";
import { NewOffers } from "./components/Pages/NewOffersPage/NewOffers";

// import {HandpickedBeachDestinationPage} from "./components/Pages/SubPages/HandpickedBeachDestinationPage";
// import {InnerPopularDestinationAccomodations} from "./components/Pages/SubPages/InnerPopularDestination1/InnerPopularDestinationAccomodations/InnerPopularDestinationAccomodations";

import { HandpickedBeachDestinationPage } from "./components/Pages/SubPages/HandpickedBeachDestinationPage";
import { HandPickedHillStations } from "./components/Pages/SubPages/HandPickedHillStations/HandPickedHillStations";
import { HandPickedRomanticDestinations } from "./components/Pages/SubPages/HandPickedRomanticDestinations/HandPickedRomanticDestinations";

// import { Helmet } from "react-helmet";

// import {HandpickedBeachDestinationPage} from "./components/Pages/SubPages/HandpickedBeachDestinationPage";

import { Helmet } from "react-helmet";

import { InnerHandpicked2 } from "./components/Pages/SubPages/InnerHandpicked2/InnerHandpicked2";
// import { InnerPopularDestination1 } from "./components/Pages/SubPages/InnerPopularDestination1/InnerPopularDestination1";
import { InnerPopularDestination2 } from "./components/Pages/SubPages/InnerPopularDestination2/InnerPopularDestination2";
// import {InnerHandPicked3} from "./components/Pages/SubPages/InnerHandPicked3/InnerHandPicked3";
import { InnerVisaPage1 } from "./components/Pages/SubPages/InnerVisapages/InnerVisaPage1/InnerVisaPage1";
// import {InnerPopularDestinationInclusiveExclusive} from "./components/Pages/SubPages/InnerPopularDestination1/InnerPopularDestinationInclusiveExclusive/InnerPopularDestinationInclusiveExclusive";
import "swiper/css/bundle";
import { DomesticHolidaySubpages } from "./components/Pages/NewHoldiaysPage/DomesticHolidaySubpage/DomesticHolidaySubpages";
import { InternationHolidaySubpage } from "./components/Pages/NewHoldiaysPage/InternationHolidaySubpage/InternationHolidaySubpage";
import { HandPickedWeekendDestinations } from "./components/Pages/SubPages/HandPickedWeekendDestinations/HandPickedWeekendDestinations";
import { ContactUS } from "./components/Pages/ContactUS/ContactUS";
// import { EasyVisaInnerPage } from "./components/Pages/NewVisa/EasyVisaInnerPage/EasyVisaInnerPage";
import { TravelFlapAdmin } from "./Admin/Admin";
import Screen from "./Admin/Components/LoginSignup/Screen";
import Register from "./Admin/Components/LoginSignup/Register";
import Login from "./Admin/Components/LoginSignup/Login";
import AdminHome from "./Admin/Components/PannelAdmin/Home/Home";
import { HotelsInnerDetailsPage } from "./components/Pages/NewHotelsPage/HotelsInnerDetailsPage/HotelsInnerDetailsPage";

import { HotelBookingPageLayout } from "./components/Pages/NewHotelsPage/HotelsBookingPageLayout/HotelBookingPageLayout";
import { PopularDestination1 } from "./components/Pages/SubPages/PopularDestination1/PopularDestination1";
import { FlightNearYouInnerWebpage } from "./components/Pages/SubPages/FlightNearYouInnerWebpage/FlightNearYouInnerWebpage";
import { InnerCheapFlightDestination } from "./components/Pages/SubPages/InnerCheapFlightDestination/InnerCheapFlightDestination";
import { RentalsInnerPage1 } from "./components/Pages/NewRentalsPage/RentalsInnerPage1/RentalsInnerPage1";
import { ActivitiesInnerWebPage } from "./components/Pages/SubPages/ActivitiesInnerWebPage/ActivitiesInnerWebPage";
import { PopularDestination0 } from "./components/Pages/SubPages/PopularDestination0/PopularDestination0";
import { RentalsChildInnerPage } from "./components/Pages/NewRentalsPage/RentalsChildInnerPage/RentalsChildInnerPage";
<<<<<<< HEAD
import { StaycationsInnerDetailsPage } from "./components/Pages/NewStaycationPage/StaycationInnerDetailsPage/StaycationsInnerDetailsPage";
import { StaycationBookingPageLayout } from "./components/Pages/NewStaycationPage/HotelsBookingPageLayout/StaycationBookingPageLayout";
=======
import { ActivitiesChildInnerPage } from "./components/Pages/SubPages/ActivitiesChildInnerPage/ActivitiesChildInnerPage";

        
>>>>>>> 80654a2424bf1f5f79f49b3b52cfcdf7835e1a3c

function App() {
  return (
    <>
      <Helmet>
        <title>TravelFlap</title>
        <meta
          name="description"
          content="Welcome to TravelFlap one stop for all your travel solutions"
        />
        <meta
          name="keywords"
          content="Travel, Holidays packages, Flight Booking, Hotel Booking, International Holiday Bookings"
        />
      </Helmet>
      {/* <NewHomeNav /> */}

      <Helmet>
        <title>TravelFlap</title>
        <meta
          name="description"
          content="Welcome to TravelFlap one stop for all your travel solutions"
        />
        <meta
          name="keywords"
          content="Travel, Holidays packages, Flight Booking, Hotel Booking, International Holiday Bookings"
        />
      </Helmet>
      {/* <NewHomeNav /> */}

      {/* <Hotel/> */}
      {/* <Holidays /> */}
      {/* <Navbar /> */}
      {/* <Activities /> */}
      {/* <Link to="/hotels"><Hotel/></Link> */}
      {/* <Link to="/Holidays"></Link> */}
      {/* <Router path="./components/Pages/Home/Home.jsx">Home</Router> */}
      <Routes>
        {/* <Route path="/flights" element={<Flights/>} /> */}
        {/* <Route path="/holidays" element={<Holidays />} /> */}
        {/* <Route path="/rentals" element={ <Rentals/>} /> */}
        {/* <Route path="/offers" element={<Offers />}   /> */}

        {/* <Route path="/" element={<NewHomeLayout/>} /> */}
        <Route path="/" element={<NewFlight />} />
        <Route path="/home" element={<NewHomeLayout />} />

        <Route path="/flights" element={<NewFlight />} />
        <Route path="/hotel" element={<NewHotel />} />
        <Route path="/holidays" element={<NewHolidaysPage />} />
        <Route path="/staycations" element={<NewStaycationPage />} />
        <Route path="/cruise" element={<NewCruisePage />} />
        <Route path="/activities" element={<NewActivities />} />
        <Route path="/visa" element={<NewVisa />} />
        <Route path="/visadetail" element={<VisaDetails />} />
        <Route path="/rentals" element={<NewRentalsPage />} />
        <Route path="/offers" element={<NewOffers />} />

        <Route
          path="/beachDestinations"
          element={<HandpickedBeachDestinationPage />}
        />

        <Route
          path="/romanticDestinations"
          element={<HandPickedRomanticDestinations />}
        />

        <Route path="/hillStations" element={<HandPickedHillStations />} />

        <Route path="/weekend" element={<HandPickedWeekendDestinations />} />

        <Route path="/domesticHolidays" element={<DomesticHolidaySubpages />} />
        <Route
          path="/internationalHolidayssubpage"
          element={<InternationHolidaySubpage />}
        />

        <Route path="/bali" element={<InnerHandpicked2 />} />

        <Route path="/visa" element={<NewVisa />} />
        <Route path="/visadetail" element={<VisaDetails />} />
        {/* <Route path="/cruise" element={<NewCruisePage/>} /> */}
        <Route path="/rentals" element={<NewRentalsPage />} />
        <Route path="/offers" element={<NewOffers />} />

        <Route path="/holidaysOffers" element={<InnerPopularDestination2 />} />

        <Route path="/populardestination" element={<PopularDestination0 />} />
        <Route path="/populardestination1" element={<PopularDestination1 />} />

        {/* These Routes here are for the  Admin page */}

        <Route path="/admin" element={<Screen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminhome" element={<AdminHome />} />

        {/* <Route path="/accomodations" element={<InnerPopularDestinationAccomodations/>}/>
        <Route path="/inc&exc" element={<InnerPopularDestinationInclusiveExclusive/>} /> */}
        {/* <Route path="/baliDetails" element={<InnerHandPicked3/>}/> */}

        {/* <Route path="/easyvisainnerpage" element={<InnerVisaPage1/>}/> */}

        <Route path="/easyvisainnerpage" element={<InnerVisaPage1 />} />

        <Route
          path="/activitiesInnerpage"
          element={<ActivitiesInnerWebPage />}
        />
        {/* <Route path="/staycations" element={ <Staycations/>} /> */}

        {/* <Route path="/contact" element={<ContactUS/>}/> */}

        {/* These rouutes are for the hotels pages */}

        <Route path="/cheapflight" element={<InnerCheapFlightDestination />} />
        <Route path="/flightnearyou" element={<FlightNearYouInnerWebpage />} />
        <Route path="/hoteldetailspage" element={<HotelsInnerDetailsPage />} />
        <Route path="/hotelbookingpage" element={<HotelBookingPageLayout />} />

        {/* Routes for the Car Rentals Page */}
<<<<<<< HEAD
        <Route path="/rentalscarDetails" element={<RentalsInnerPage1 />} />
        <Route path="/carBookingPage" element={<RentalsChildInnerPage />} />

        {/* Routes for the staycations Inner Pages */}
        <Route path="/staycationdetailsPage" element={<StaycationsInnerDetailsPage />} />
        <Route path="/staycationBookingPage" element={ <StaycationBookingPageLayout/> } />
=======
        <Route path="/rentalscarDetails" element={ <RentalsInnerPage1/> } />
        <Route path="/carBookingPage" element={ <RentalsChildInnerPage/> } />
        <Route path="/activitiesDetails" element={<ActivitiesChildInnerPage/>}/>
>>>>>>> 80654a2424bf1f5f79f49b3b52cfcdf7835e1a3c

        

        <Route path="/contact" element={<ContactUS />} />
      </Routes>
    </>
  );
}

export default App;
