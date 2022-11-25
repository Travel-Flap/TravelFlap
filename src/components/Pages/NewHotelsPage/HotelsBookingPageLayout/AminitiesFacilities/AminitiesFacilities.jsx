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
                            <p>Spa and wellness centre</p>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <MdOutlineRoomService /></div>
                            <p> Room Service </p>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <SiCoffeescript /></div>
                            <p> Tea/Coffee Maker</p>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <BsFillLaptopFill /></div>
                            <p> Business Centre </p>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <CgScreenMirror /></div>
                            <p> Flat screen TV </p>
                        </div>
                    </div>

                    <div className='amenitiesInnnerDiv2'>
                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <RiRestaurantFill /></div>
                            <p> Restaurant </p>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <BiWifi /></div>
                            <p> Free Wi-Fi </p>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv' > <SiCoffeescript /></div>
                            <p> Coffee Shop </p>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <BiWifi /></div>
                            <p> Wi-Fi available in all areas </p>
                        </div>

                        <div className='amenitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <CgScreenMirror /></div>
                            <p> TV </p>
                        </div>
                    </div>
                </div>

                <p className='dropButtonAMenities'>Show all 90 amenities</p>
            </div>
        </>
    )
}
