import { StaycationFaq } from "../Faq/Faq";
import { InnerhandpickedFooter } from "../InnerhandpickedFooter/InnerhandpickedFooter";
import { VideoTextStaycation } from "../VideoText/VideoText";
import { InnerPopularDestination2Banner } from "./InnerPopularDestination2Banner/InnerPopularDestination2Banner";
import { InnerPopularDestination2categories } from "./InnerPopularDestination2categories/InnerPopularDestination2categories";
import { InnerPopularDestination2filter } from "./InnerPopularDestination2filter/InnerPopularDestination2filter";
import { InnerPopularDestination2scrollData } from "./InnerPopularDestination2scrollData/InnerPopularDestination2scrollData";




export const InnerPopularDestination2 = () => {
    return (
        <>
           <InnerPopularDestination2Banner/>

           <InnerPopularDestination2filter/>

           <InnerPopularDestination2categories/>

           <InnerPopularDestination2scrollData/>

           <div style={{marginTop:"80%"}}>
               <StaycationFaq/>
           </div>
           <VideoTextStaycation/>
           <div style={{marginTop:"-3%"}}><InnerhandpickedFooter/> </div>
        </>
       
    );
}

