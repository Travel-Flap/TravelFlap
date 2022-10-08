import React, { useState } from 'react';
import "./NewExclusiveDealsDropdown.css";
import countrydata from '../../../../CountryData.json';

export const NewExclusiveDealsDropdown = () => {
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

            <div className='newExclusiveDealscontainer'>
                <div className='newExclusiveDealsinnerdropdown'>
                    <div className='newExclusiveDealsoptionsContainer'>
                        <div className='newExclusiveDealssingledrop'>
                            <select className="form-select newExclusiveDealscountryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
                                style={{ border: "3px solid #3380f2", width: "60%" }}>
                                <option value="" style={{ textAlign: "center" }}>Select Country</option>
                                {
                                    countrydata.map((getcountry, index) => (
                                        <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className='newExclusiveDealssingledrop1'>
                            <select className="form-select newExclusiveDealscountryDrop1" aria-label="Default select example"
                                style={{width:"100%" ,border: "3px solid #3380f2" }}>
                                <option value>Offers Category</option>
                                <option value="1">Cheap</option>
                                <option value="2">Expensive</option>
                                <option value="3">Normal</option>
                                <option value="3">Luxury</option>
                            </select>
                        </div>
                        <div className='newExclusiveDealssingledrop'>
                            {/* <button type="button" className="btn btn-primary homecardtextbutton">Search</button> */}
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
