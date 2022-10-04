import { HotelNav } from "../Hotels/HotelNavbar/HotelNav"
import { Staycationsbanner } from "./Staycationsbanner/Staycationsbanner";
import { Staycationsimagesslider } from "./Staycationsimagesslider/Staycationsimagesslider";
import { Staycationsnavbar } from "./Staycationsnavbar/Staycationsnavbar";


export const Staycations = () => {
  return (
   <>
     <HotelNav/>
     <Staycationsbanner/>
     <Staycationsnavbar/>
     <Staycationsimagesslider/>
   </>
  )
}
