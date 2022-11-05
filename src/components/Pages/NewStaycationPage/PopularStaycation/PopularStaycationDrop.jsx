import React, { useState } from 'react';
import "./PopularStaycationDrop.css";
import countrydata from '../../../../CountryData.json';

export const popularStaycationDrop = () => {
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');

    const handlecounty = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);
        //console.log(getcountryId);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Get Country id" + countryid + " And " + stateid);
    }

    return (
        <>

            <div className='newHandPickedcontainer'>
                <div className='newHandPickeddropdown'>
                    <div className='newHandPickedoptionsContainer'>
                        <div className='newHandpickedsingledrop'>
                            <select className="form-select newHandPickedcountryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
                                style={{ border: "3px solid #3380f2", width: "60%" }}>
                                <option value="" style={{ textAlign: "center" }}>Select Country</option>
                                {
                                    countrydata.map((getcountry, index) => (
                                        <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* <div className='newHandpickedsingledrop1'>
                            <select className="form-select newHandPickedcountryDrop1" aria-label="Default select example"
                                style={{width:"100%" ,border: "3px solid #3380f2" }}>
                                <option value>Offers Category</option>
                                <option value="1">Cheap</option>
                                <option value="2">Expensive</option>
                                <option value="3">Normal</option>
                                <option value="3">Luxury</option>
                            </select>
                        </div> */}
                        {/* <div className='newHandpickedsingledrop'>
                            <button type="button" className="btn btn-primary homecardtextbutton">Search</button>
                        </div> */}
                    </div>


                </div>
            </div>
        </>
    )
}
