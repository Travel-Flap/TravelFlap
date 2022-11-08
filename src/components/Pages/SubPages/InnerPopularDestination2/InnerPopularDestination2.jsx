import { StaycationFaq } from "../Faq/Faq";
import { InnerhandpickedFooter } from "../InnerhandpickedFooter/InnerhandpickedFooter";
import { VideoTextStaycation } from "../VideoText/VideoText";
import { InnerPopularDestination2Banner } from "./InnerPopularDestination2Banner/InnerPopularDestination2Banner";
import { InnerPopularDestination2BestDealinCity } from "./InnerPopularDestination2BestDealinCity/InnerPopularDestination2BestDealinCity";
import { InnerPopularDestination2BestinCity } from "./InnerPopularDestination2BestinCity/InnerPopularDestination2BestinCity";
import { InnerPopularDestination2WhereisCity } from "./InnerPopularDestination2WhereisCity/InnerPopularDestination2WhereisCity";


export const InnerPopularDestination2 = () => {
    return (
        <>
           <InnerPopularDestination2Banner/>
           <InnerPopularDestination2WhereisCity/>
           <InnerPopularDestination2BestDealinCity/>
           <InnerPopularDestination2BestinCity/>
           <StaycationFaq/>
           <VideoTextStaycation/>
           <div style={{marginTop:"4.5%"}}>
           <InnerhandpickedFooter/>
           </div>
        </>
       
    );
}

