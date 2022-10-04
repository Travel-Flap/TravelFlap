import { BottomBar } from "../../BottomBar/BottomBar";
import { Footer } from "../../Footer/Footer";
import { FooterLinks } from "../../FooterLinks/FooterLinks";
import Newsletter from "../../NewsLetter/NewsLetter";
import { Experiment } from "../../Tags/Tags";
import { HotelNav } from "../Hotels/HotelNavbar/HotelNav"
import { Staycationsbanner } from "./Staycationsbanner/Staycationsbanner";
import { Staycationsimagesslider } from "./Staycationsimagesslider/Staycationsimagesslider";
import { Staycationsnavbar } from "./Staycationsnavbar/Staycationsnavbar";


export const Staycations = () => {
  return (
    <>
      <HotelNav />
      <Staycationsbanner />
      <Staycationsnavbar />
      <Staycationsimagesslider />

      <Newsletter />
      <FooterLinks />
      <Experiment />
      <Footer />
      <BottomBar />
    </>
  )
}
