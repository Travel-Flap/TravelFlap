import React from 'react';
import "./AminitiesFacilities.css";
import { SiSparkfun } from "react-icons/si";
import { MdOutlineRoomService } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";
import { BsFillLaptopFill } from "react-icons/bs";
import { CgScreenMirror } from "react-icons/cg";
import { RiRestaurantFill } from "react-icons/ri";
import { BiWifi } from "react-icons/bi";



export const AminitiesFacilities = () => {
    return (
        <>
            <div className='facilitiesMainDiv'>
                <h2> Amenities and Facilities </h2>

                <div className='amenitiesOuterDiv'>
                    <div className='amenitiesInnnerDiv1' >
                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv' > <SiSparkfun /></div>
                            <h5>Spa and wellness centre</h5>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <MdOutlineRoomService /></div>
                            <h5> Room Service </h5>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <SiCoffeescript /></div>
                            <h5> Tea/Coffee Maker</h5>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <BsFillLaptopFill /></div>
                            <h5> Business Centre </h5>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <CgScreenMirror /></div>
                            <h5> Flat screen TV </h5>
                        </div>
                    </div>

                    <div className='amenitiesInnnerDiv2'>
                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <RiRestaurantFill /></div>
                            <h5> Restaurant </h5>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <BiWifi /></div>
                            <h5> Free Wi-Fi </h5>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv' > <SiCoffeescript /></div>
                            <h5> Coffee Shop </h5>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <BiWifi /></div>
                            <h5> Wi-Fi available in all areas </h5>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <CgScreenMirror /></div>
                            <h5> TV </h5>
                        </div>
                    </div>
                </div>

                <h5 className='dropButtonAMenities'>Show all 90 amenities</h5>
            </div>
        </>
    )
}
