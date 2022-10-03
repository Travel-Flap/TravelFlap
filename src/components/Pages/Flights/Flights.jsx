import React from 'react'
import { ControlledCarousel } from "../../TopCorousel/Corousel";
import { DataCards } from "../../Cards/Cards";
import { Middleslider } from "../../MiddleCorousel/Middleslider";
import { Footer } from "../../Footer/Footer";

import { TitleBar } from "../../TopTitleBar/TitleBar";
import { CardText } from "../../CardwithText/CardText";
import { BottomBar } from "../../BottomBar/BottomBar";

import ImageSlider from "../../MultipleCards/MultiCardSlider";

// import {OurPartners} from "../../OurPatnersSection/OurPartners";
import OurPartners from '../../OurPatnersSection/OurPartners';

// import { Carousel } from "../../TopCorousel/Corousel";
import { PopularDestinations } from '../../PopularDestinations/PopularDestinations';
// import PopularDestinations from '../../ExclusiveDeals/ExclusiveDeals';

import TravelStories from "../../EasyVisaDestinations/EasyVisaDestinations";
import { Newsletter } from '../../NewsLetter/NewsLetter';
import Awards from '../../Achievements/Awards';
import { Nav } from "../../Nav/Nav";
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import TopCities from '../../TopCities/TopCities';
import { OtherServices } from './OtherServices/OtherServices';
import {FlightFaq} from './FlightFaq/FlightFaq';
// import ExclusiveDeals from '../../ExclusiveDeals/ExclusiveDeals';
// import { ExclusiveDeals } from '../../ExclusiveDeals/ExclusiveDeals';
import { ExclusiveDeals } from '../../ExclusiveDeals/ExclusiveDeals';
import { Experiment } from '../../Tags/Tags';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NearFlightsInternational } from './NearFlightsInternational/NearFlightsInternational';
import { NearFlightsDomestic } from './NearFlightsDomestic/NearFlightsDomestic';
// import { HandPicked } from '../../HandPicked/HandPicked';
import { CheapFlights } from './CheapFlights/CheapFlights';
export const Flights = () => {
    return (
        <div>

            <Nav />

            <ControlledCarousel/>
                {/* <ExclusiveDeals /> */}
            <div className='carousel'>
            </div>
            
            <NearFlightsInternational/>

            {/* <NearFlightsDomestic/> */}

            <PopularDestinations />

            {/* <DataCards /> */}

            {/* <Carousel /> */}

            <div className='carousel'>
                <TopCities />
            </div>

            {/* <HandPicked/> */}

            <CheapFlights/>

            {/* <CardText /> */}

            <div className='carousel'>
                <h1 className='travelstories_title'>Easy Visa Destinations</h1>
                <TravelStories />
            </div>

            {/* <OtherServices/> */}

            <FlightFaq/>
            {/* <div className="carousel">
                <h1 className="achievements_title">Achievement and Awards</h1>
                <Awards />
            </div> */}

            {/* <div className="carousel">
                <h1 className="clientstestimonial_title">What our Clients say about us</h1>
                <ImageSlider />
            </div> */}

            {/* <div className='carousel'>
                <h1 className='partners_title'>Our Partners</h1>
                <OurPartners />
            </div> */}

            {/* <Newsletter /> */}

            <FooterLinks />

            <Experiment/>
            <Plan/>
            <Footer/>

            <BottomBar />

        </div>
    )
}
