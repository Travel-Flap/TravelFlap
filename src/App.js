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
import {InnerPopularDestinationAccomodations} from "./components/Pages/SubPages/InnerPopularDestination1/InnerPopularDestinationAccomodations/InnerPopularDestinationAccomodations";

import { HandpickedBeachDestinationPage } from "./components/Pages/SubPages/HandpickedBeachDestinationPage";

// import { Helmet } from "react-helmet";

// import {HandpickedBeachDestinationPage} from "./components/Pages/SubPages/HandpickedBeachDestinationPage";


import { Helmet } from "react-helmet";

import { InnerHandpicked2 } from "./components/Pages/SubPages/InnerHandpicked2/InnerHandpicked2";
import { InnerPopularDestination1 } from "./components/Pages/SubPages/InnerPopularDestination1/InnerPopularDestination1";
import { InnerPopularDestination2 } from "./components/Pages/SubPages/InnerPopularDestination2/InnerPopularDestination2";
// import {InnerHandPicked3} from "./components/Pages/SubPages/InnerHandPicked3/InnerHandPicked3";
import { InnerVisaPage1 } from "./components/Pages/SubPages/InnerVisapages/InnerVisaPage1/InnerVisaPage1";
import {InnerPopularDestinationInclusiveExclusive} from "./components/Pages/SubPages/InnerPopularDestination1/InnerPopularDestinationInclusiveExclusive/InnerPopularDestinationInclusiveExclusive";


import { DomesticHolidaySubpages } from "./components/Pages/NewHoldiaysPage/DomesticHolidaySubpage/DomesticHolidaySubpages";
import { InternationHolidaySubpage } from "./components/Pages/NewHoldiaysPage/InternationHolidaySubpage/InternationHolidaySubpage";


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
      <NewHomeNav />
      {/* <Hotel/> */}
      {/* <Holidays /> */}
    <Helmet>
      <title>TravelFlap</title>
      <meta name="description" content="Welcome to TravelFlap one stop for all your travel solutions" />
      <meta name="keywords" content="Travel, Holidays packages, Flight Booking, Hotel Booking, International Holiday Bookings" />
    </Helmet>
    <NewHomeNav/>
    
    {/* <Hotel/> */}
    {/* <Holidays /> */}
      {/* <Navbar /> */}
      {/* <Activities /> */}
      {/* <Link to="/hotels"><Hotel/></Link> */}
      {/* <Link to="/Holidays"></Link> */}
      {/* <Router path="./components/Pages/Home/Home.jsx">Home</Router> */}
      <Routes>
        {/* <Router path="/home" element={<Home/>}></Router> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/flights" element={<Flights/>} /> */}
        {/* <Route path="/holidays" element={<Holidays />} /> */}
        {/* <Route path="/rentals" element={ <Rentals/>} /> */}
        {/* <Route path="/offers" element={<Offers />}   /> */}

        {/* <Route path="/" element={<NewHomeLayout/>} /> */}
        <Route path="/" element={<NewFlight />} />
        <Route path="/home" element={<NewHomeLayout/>} />
        
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
          path="/weekendgetaways"
          element={<HandpickedBeachDestinationPage />}
        />

        <Route path="/domesticHolidays" element={<DomesticHolidaySubpages/> } />
        <Route path="/internationalHolidayssubpage" element={ <InternationHolidaySubpage/> } />
          
        <Route path="/bali" element={<InnerHandpicked2 />} />

        <Route path="/visa" element={<NewVisa/>}/>
        <Route path="/visadetail" element={<VisaDetails/>} />
        {/* <Route path="/cruise" element={<NewCruisePage/>} /> */}
        <Route path="/rentals" element={ <NewRentalsPage/>} />
        <Route path="/offers" element={<NewOffers/>}   />
        
        <Route path="/weekendgetaways" element={<HandpickedBeachDestinationPage/>} />
        <Route path="/bali" element={<InnerHandpicked2/>}/>
        <Route path="/populardestination" element={<InnerPopularDestination1/>}/>
        <Route path="/TurkeyDescription" element={<InnerPopularDestination2/>} />

        <Route path="/accomodations" element={<InnerPopularDestinationAccomodations/>}/>
        <Route path="/inc&exc" element={<InnerPopularDestinationInclusiveExclusive/>} />
        {/* <Route path="/baliDetails" element={<InnerHandPicked3/>}/> */}
        {/* <Route path="/easyvisainnerpage" element={<InnerVisaPage1/>}/> */}

        {/* <Route path="/staycations" element={ <Staycations/>} /> */}
      </Routes>
    </>
  );
}

export default App;
