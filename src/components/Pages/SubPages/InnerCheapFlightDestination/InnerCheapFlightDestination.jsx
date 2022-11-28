import { InnerWebPageFooter } from "../InnerWebPageFooter/InnerWebPageFooter";
import { ChepestFlight } from "./ChepestFlight/ChepestFlight";
import { FlighAirlineServing } from "./FlighAirlineServing/FlighAirlineServing";
import { Flightgraph } from "./Flightgraph/Flightgraph";
import { FlightInnerPageBanner } from "./FlightInnerPageBanner/FlightInnerPageBanner";
import { FlightPageGoodtoKnow } from "./FlightPageGoodtoKnow/FlightPageGoodtoKnow";


export const InnerCheapFlightDestination = () => {


    return (

        <>

        <FlightInnerPageBanner/>
        <FlightPageGoodtoKnow/>
        <Flightgraph/>
        <ChepestFlight/>
        
        <FlighAirlineServing/>
        <InnerWebPageFooter/>
        
        </>


    );
}

