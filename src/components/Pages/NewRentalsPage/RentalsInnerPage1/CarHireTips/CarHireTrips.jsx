import React from 'react';
import "./CarHireTrips.css";
import { GrCheckboxSelected } from "react-icons/gr";

export const CarHireTrips = () => {
    return (
        <>
            <div className='rentalsCarHireTips'>
                <h3> Top Tips for hiring a rental car in </h3>
                <p> <GrCheckboxSelected  style={{marginRight:"0.5%",color:"blue"}}/>
                    Book your rental car in ____at least 1 day before your trip in order to get a below-average price.
                </p>

                <p> <GrCheckboxSelected  style={{marginRight:"0.5%"}} />
                    Book your rental car in ____at least 1 day before your trip in order to get a below-average price.
                </p>
            </div>
        </>
    )
}
