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

function App() {
  return (
    <>
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
        <Route path="/" element={<NewHomeLayout/>} />
        <Route path="/flights" element={<NewFlight/>} />
        <Route path="/offers" element={<Offers />}   />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/staycations" element={<Staycations />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/visa" element={<Visa/>}/>
        <Route path="/visadetail" element={<VisaDetails/>} />
        <Route path="/cruise" element={<Cruise/>} />
        <Route path="/rentals" element={ <Rentals/>} />
        <Route path="/staycations" element={ <Staycations/>} />
      </Routes>
    </>
  );
}

export default App;
