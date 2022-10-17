import "./App.css";
import { BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import { Offers } from "./components/Pages/Offers/Offers";
import {NewCruisePage} from "./components/Pages/NewCruisePage/NewCruisePage";
import { NewActivities } from "./components/Pages/NewActivities/NewActivities";
import { NewVisa } from "./components/Pages/NewVisa/NewVisa";
import { VisaDetails} from "./components/Pages/Visa/VisaInnerpages/VisaDetails";
import { NewStaycationPage } from "./components/Pages/NewStaycationPage/NewStaycationPage";
import { Rentals } from "./components/Pages/Rentals/Rentals";

import { NewHomeLayout } from "./components/Pages/NewHomePage/NewHomeLayout";
import { NewFlight } from "./components/Pages/NewFlightsPage/NewFlight";
import { NewHotel } from "./components/Pages/NewHotelsPage/NewHotel";
import { NewHomeNav } from "./components/Pages/NewHomePage/NewHomeNavbar/NewHomeNavbar";
import { NewHolidaysPage } from "./components/Pages/NewHoldiaysPage/NewHolidaysPage";
import { NewRentalsPage } from "./components/Pages/NewRentalsPage/NewRentalsPage";

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
        {/* <Route path="/rentals" element={ <Rentals/>} /> */}

        
        <Route path="/" element={<NewHomeLayout/>} />
        <Route path="/flights" element={<NewFlight/>} />
        <Route path="/hotel" element={<NewHotel/>} />
        <Route path="/holidays" element={<NewHolidaysPage/>} />
        <Route path="/offers" element={<Offers />}   />
        <Route path="/staycations" element={<NewStaycationPage />} />
        <Route path="/cruise" element={<NewCruisePage />} />
        <Route path="/activities" element={<NewActivities />} />
        <Route path="/visa" element={<NewVisa/>}/>
        <Route path="/visadetail" element={<VisaDetails/>} />
        {/* <Route path="/cruise" element={<NewCruisePage/>} /> */}
        <Route path="/rentals" element={ <NewRentalsPage/>} />

        
        {/* <Route path="/staycations" element={ <Staycations/>} /> */}
      </Routes>
    </>
  );
}

export default App;
