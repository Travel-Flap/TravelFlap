import "bootstrap/dist/css/bootstrap.min.css";
import {InnerHandpicked2Activities}  from "./InnerHandpicked2Activities/InnerHandpicked2Activities";
import { InnerHandpicked2Banner } from "./InnerHandpicked2Banner/InnerHandpicked2Banner";
import { Innerhandpicked2BestTime } from "./Innerhandpicked2BestTime/Innerhandpicked2BestTime";
import { InnerHandPicked2FAQ } from "./InnerHandPicked2FAQ/InnerHandPicked2FAQ";
import { InnerHandpicked2Navbar } from "./InnerHandpicked2Navbar/InnerHandpicked2Navbar";
import { InnerhandPicked2SliderCards } from "../InnerhandPicked2SliderCards/InnerhandPicked2SliderCards";
import { InnerHandPicked2VideoText } from "./InnerHandPicked2VideoText/InnerHandPicked2VideoText";


 export const InnerHandpicked2 = () => {
  return (
    <>
       <InnerHandpicked2Banner/>
       {/* <InnerHandpicked2Navbar/> */}
       <InnerhandPicked2SliderCards/>
       <Innerhandpicked2BestTime/>
       <InnerHandpicked2Activities/>
       {/* <InnerHandPicked2FAQ/> */}
       <InnerHandPicked2VideoText/>

      </>
  );
}

