import { StaycationFaq } from "../Faq/Faq";
import { InnerhandpickedFooter } from "../InnerhandpickedFooter/InnerhandpickedFooter";
import { VideoTextStaycation } from "../VideoText/VideoText";
import { InnerPopularDestination2Banner } from "./InnerPopularDestination2Banner/InnerPopularDestination2Banner";
import { InnerPopularDestination2BestDealinCity } from "./InnerPopularDestination2BestDealinCity/InnerPopularDestination2BestDealinCity";
import { InnerPopularDestination2BestinCity } from "./InnerPopularDestination2BestinCity/InnerPopularDestination2BestinCity";
import { InnerPopularDestination2FamilyDestination } from "./InnerPopularDestination2FamilyDestination/InnerPopularDestination2FamilyDestination";
import { InnerPopularDestination2mostfamous } from "./InnerPopularDestination2mostfamous/InnerPopularDestination2mostfamous";




export const InnerPopularDestination2 = () => {
    return (
        <>
           <InnerPopularDestination2Banner/>
           <InnerPopularDestination2mostfamous/>
           <InnerPopularDestination2BestDealinCity/>
           <InnerPopularDestination2BestinCity/>
           <InnerPopularDestination2FamilyDestination/>
           <StaycationFaq/>
           <VideoTextStaycation/>
           <div style={{marginTop:"-3%"}}><InnerhandpickedFooter/> </div>
        </>
       
    );
}

