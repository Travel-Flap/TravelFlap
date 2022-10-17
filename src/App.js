import "./App.css";
import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";

import { Home } from "./components/Pages/Home/Home";
import { Offers } from "./components/Pages/Offers/Offers";
import { Holidays } from "./components/Pages/Holidays/HolidayMainFile/Holidays";
// import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

import { Activities } from "./components/Pages/Activities/Activities";
import { Hotel } from "./components/Pages/Hotels/Hotel";
import { Visa } from "./components/Pages/Visa/Visa";
import { VisaDetails} from "./components/Pages/Visa/VisaInnerpages/VisaDetails";
import { Cruise } from "./components/Pages/Cruise/Cruise";
import { Flights } from "./components/Pages/Flights/Flights";
import { Staycations } from "./components/Pages/Staycations/Staycations";
import { Rentals } from "./components/Pages/Rentals/Rentals";

import { NewHomeLayout } from "./components/Pages/NewHomePage/NewHomeLayout";
import { NewFlight } from "./components/Pages/NewFlightsPage/NewFlight";
import { NewHotel } from "./components/Pages/NewHotelsPage/NewHotel";
import { NewHomeNav } from "./components/Pages/NewHomePage/NewHomeNavbar/NewHomeNavbar";
import { NewHolidaysPage } from "./components/Pages/NewHoldiaysPage/NewHolidaysPage";
import { NewVisa } from "./components/Pages/NewVisa/NewVisa";
import { NewActivities } from "./components/Pages/NewActivities/NewActivities";
import { NewRentalsPage } from "./components/Pages/NewRentalsPage/NewRentalsPage";
import { NewCruisePage } from "./components/Pages/NewCruisePage/NewCruisePage";
import { NewStaycationPage } from "./components/Pages/NewStaycationPage/NewStaycationPage";

function App() {
  return (
    <>
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
        {/* <Route path="/offers" element={<Offers />}   /> */}
        {/* <Route path="/holidays" element={<Holidays />} /> */}
        {/* <Route path="/visa" element={<Visa/>}/> */}
        {/* <Route path="/activities" element={<Activities />} /> */}
        {/* <Route path="/rentals" element={ <Rentals/>} /> */}
        {/* <Route path="/cruise" element={<Cruise/>} /> */}
        {/* <Route path="/staycations" element={ <Staycations/>} /> */}
        
        <Route path="/" element={<NewHomeLayout/>} />
        <Route path="/flights" element={<NewFlight/>} />
        <Route path="/hotel" element={<NewHotel/>} />
        <Route path="/holidays" element={<NewHolidaysPage/>} />
        <Route path="/visa" element={<NewVisa/>}/>
        <Route path="/activities" element={<NewActivities/>} />
        <Route path="/rentals" element={<NewRentalsPage/>} />
        <Route path="/cruise" element={<NewCruisePage/>} />
        <Route path="/staycations" element={ <NewStaycationPage/>} />

        
        
        <Route path="/offers" element={<Offers />}   />
        <Route path="/staycations" element={<Staycations />} />
        
        <Route path="/visadetail" element={<VisaDetails/>} />
        
        
      </Routes>
    </>
  );
}

export default App;
