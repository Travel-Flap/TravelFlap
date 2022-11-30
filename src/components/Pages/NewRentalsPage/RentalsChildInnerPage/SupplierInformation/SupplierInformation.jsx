import React from 'react';
import "./SupplierInformation.css";

export const SupplierInformation = () => {
    return (
        <>
            <div className='rentalsBookingSupplierOuterDiv'>
                <div className='rentalsBookingSupplierHeading'>
                    <h3> Supplier Information </h3>
                </div>

                <div className='rentalsBookingContentMainDiv'>
                    <div className='rentalsBookingContentInnerDiv1'>
                        <p> Location : </p>
                    </div>

                    <div className='rentalsBookingContentInnerBookingHours'>

                        <p className='rentalsBookingContentHeading1'> Opening Hours :</p>

                        <div className='rentalsInnerBookingHoursInnerDiv'>
                            <p className='bookingHourInnerContent1'> Open for 24 hours </p>

                            <p className='bookingHourInnerContent2'>
                                Service outside of business hours is available at selected locations. In this case,
                                an additional charge may apply if the service is to be provided. Please contact the
                                rental desk. Please note that if the car is dropped off outside of business hours, the
                                customer will be responsible for the car (damages, etc.) until the branch opens for business
                                the next day.
                            </p>
                        </div>
                    </div>

                    <div className='rentalsSupplierContactNumberDiv'>
                        <p> Contact : <span> +91 5243567546</span> </p>
                    </div>

                    <div className='rentalsBoookingPickUpInstructionMainDiv'>
                        <p> Pick up Instruction : </p>
                    </div>
                </div>
            </div>
        </>
    )
}
