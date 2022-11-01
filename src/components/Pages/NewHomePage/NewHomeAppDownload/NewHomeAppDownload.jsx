import React from 'react';
import "./NewHomeAppDownload.css";
import mobile2 from "./mobile2.png";
import qrcode from "./qrcode.png";
import Vector from "./Vector.png";
import PlayStore from "./PlayStore.png";
import GooglePlay from "./GooglePlay.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


export const NewHomeAppDownload = () => {

    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch spinner
                setCountryState({
                    ...countryState,
                    loading: true,
                });

                //  fetch data
                const dataUrl = `https://restcountries.com/v3.1/all`;
                const response = await axios.get(dataUrl);
                setCountryState({
                    ...countryState,
                    countries: response.data,
                    loading: false,
                });
            } catch (error) {
                setCountryState({
                    ...countryState,
                    loading: false,
                    errorMessage: "Sorry Something went wrong",
                });
            }
        };

        fetchData();
    }, []);
    const { loading, errorMessage, countries } = countryState;
    console.log("loading", loading);
    console.log("countries", countries);
    console.log("errorMessage", errorMessage);

    const [selectedCountry, setSelectedCountry] = useState();
    console.log("selectedCountry", selectedCountry);

    //   find selected country data
    //search selected country
    const searchSelectedCountry = countries.find((obj) => {
        if (obj.name.common === selectedCountry) {
            return true;
        }
        return false;
    });
    console.log("searchSelectedCountry", searchSelectedCountry);

    return (
        <>
            <div className='newhomedownloadmaindiv'>
                <img className='mobileinhand' src={mobile2} />
                <div className='newhomedownloadbuttons'>
                    <div className='newhomedownloadtext'>
                        Subscribe to get Latest News and amazing offers from TravelFlap
                    </div>
                    <div className='newhomesearchbox'>
                        {/* <input type="text" placeholder='Search Country' className='newhomesearchcountrydiv'/>  */}
                        <section style={{ width: "70% !important" }}>
                            <div className="bg-white w-auto h-96 pb-20 mx-5 mt-40 sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto" style={{ borderRadius: "20px" }}>

                                <div>
                                    {loading === true ?
                                        <div style={{ backgroundColor: "#5697F5", color: "white" }}>
                                            <p className="uppercase font-bold text-3xl">...loading</p>
                                        </div> :
                                        <div className="newhomecountryselectdivouter">
                                            <div className='newhomevectorimage'>

                                                <img width="90% !important" height="55%" src={Vector} />
                                                <img width="100% !important" height="80%" src={Vector} />
                                            </div>
                                            <div className='newhomecountryselectdiv'>
                                                <select
                                                    value={selectedCountry}
                                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                                    className="newhomecountryselect" style={{ outline:"none",width: "100% " }}
                                                >
                                                    <option>--Select Country--</option>
                                                    {countries.map((item) => {
                                                        return (
                                                            <option key={uuidv4()} value={item.name.common}>
                                                                {item.name.common}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                            <div style={{ marginTop: "15%", height: "auto", width: "40%" }}>
                                                {searchSelectedCountry && (
                                                    <div className="flex space-x-4">
                                                        <div className="newhomecontactdata" >
                                                            <img
                                                                className="newhomeflagsimage"
                                                                src={
                                                                    searchSelectedCountry &&
                                                                    searchSelectedCountry.flags.png
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <p className="newhomestdcode">
                                                                {searchSelectedCountry &&
                                                                    searchSelectedCountry.idd.root}
                                                                {searchSelectedCountry &&
                                                                    searchSelectedCountry.idd.suffixes}
                                                            </p>


                                                            <input
                                                                type="tel"
                                                                placeholder="Phone"
                                                                className="newhomecontactplaceholder"
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </section>
                        <div className='newhomeappdownloadsearchbutton'>Search</div>
                    </div>


                    {/* header section */}
                    {/* <div className="h-32 flex justify-center items-center shadow">
                        <p className="uppercase font-bold text-3xl text-center">
                            Select Country / <br />
                            auto flag & area code{" "}
                        </p>
                    </div> */}

                    {/* body section */}
                    {/* <div className='newhomeplaybuttons'>
                 <img className='playstoreimage' src={PlayStore}/>
                 <img className='googlePlayimage' src={GooglePlay}/>
               </div> */}
                </div>
                <div className='newhomebarcode'>
                    <p className='qrcodetext1'>Download The App Now!!!!</p>
                    <img className='qrcodeimage' src={qrcode} />
                    <p className='qrcodetext'>Scan QR Code to get our app</p>
                    <div className='newhomeplaybuttons'>
                        <img className='playstoreimage' src={PlayStore} />
                        <img className='googlePlayimage' src={GooglePlay} />
                    </div>
                    {/* <img className='starsimage' src={stars}/> */}
                </div>
            </div>
        </>
    )
}
