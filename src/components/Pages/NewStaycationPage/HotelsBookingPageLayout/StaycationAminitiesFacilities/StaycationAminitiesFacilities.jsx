import React from 'react';
import "./StaycationAminitiesFacilities.css";
import { SiSparkfun } from "react-icons/si";
import { MdOutlineRoomService } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";
import { BsFillLaptopFill } from "react-icons/bs";
import { CgScreenMirror } from "react-icons/cg";
import { RiRestaurantFill } from "react-icons/ri";
import { BiWifi } from "react-icons/bi";



export const StaycationAminitiesFacilities = () => {
    return (
        <>
            <div className='facilitiesMainDiv'>
                <h2> Staycations Aminities and Facilities </h2>

                <div className='staycationsAminitiesOuterDiv'>
                    <div className='staycationsAminitiesInnnerDiv1' >
                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv' > <SiSparkfun /></div>
                            <p>Spa and wellness centre</p>
                        </div>

                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <MdOutlineRoomService /></div>
                            <p> Room Service </p>
                        </div>

                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <SiCoffeescript /></div>
                            <p> Tea/Coffee Maker</p>
                        </div>

                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <BsFillLaptopFill /></div>
                            <p> Business Centre </p>
                        </div>

                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <CgScreenMirror /></div>
                            <p> Flat screen TV </p>
                        </div>
                    </div>

                    <div className='staycationsAminitiesInnnerDiv2'>
                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <RiRestaurantFill /></div>
                            <p> Restaurant </p>
                        </div>

                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <BiWifi /></div>
                            <p> Free Wi-Fi </p>
                        </div>

                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv' > <SiCoffeescript /></div>
                            <p> Coffee Shop </p>
                        </div>

                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <BiWifi /></div>
                            <p> Wi-Fi available in all areas </p>
                        </div>

                        <div className='staycationsAminitiesInnerSubDiv'>
                            <div className='facilityIconsDiv'> <CgScreenMirror /></div>
                            <p> TV </p>
                        </div>
                    </div>
                </div>

                <p className='dropButtonstaycationsAminities'>Show all 90 staycationsAminities</p>
            </div>
        </>
    )
}
