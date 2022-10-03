import React from 'react';
import { Nav } from "../../Nav/Nav";
import { ExclusiveDeals } from "../../ExclusiveDeals/ExclusiveDeals"
import { Choose_Travelflap } from './Choose Travelflap/Choose_Travelflap';
import { PopularDestinations } from '../../PopularDestinations/PopularDestinations';
import { Newsletter } from '../../NewsLetter/NewsLetter';
import { Favouite, Favourite_Hotels } from './Favourite_hotels/Favourite';
import { Hotel_Banner } from './Hotel_Banner/Hotel_Banner';
import { Free_Hotel_Lunch } from './Hotel_Free_Lunch/Free_Lunch_Hotel';
import { Footer } from '../../Footer/Footer';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { HotelNav } from './HotelNavbar/HotelNav';
import { BottomBar } from '../../BottomBar/BottomBar';
export const Hotel = () => {
    return (
        <div>
            {/* <Nav/> */}
            <HotelNav/>
            <Hotel_Banner />
            <Choose_Travelflap />
            <div className=' mt-5 carousel'>
            <ExclusiveDeals/>
            </div>
            <PopularDestinations/>
            {/* <Favourite_Hotels /> */}
            <Favouite/>
            <Free_Hotel_Lunch />
            <Newsletter />
            <FooterLinks/>
            <Footer/>
            <BottomBar/>
        </div>
    )
}
