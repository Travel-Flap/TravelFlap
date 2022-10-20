import "./NewStaycationNavbar.css";
import React, { useState } from 'react';
import countrydata from '../../../../CountryData.json';
import {FaAngleRight} from "react-icons/fa";
import pickup from "./pickup.png";
export const NewStaycationNavbar = () => {

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
           <div className="newStaycationNavbarmaindiv">
              <div className="newStaycationNavbaricondiv1">
              <img className="newStaycationNavbaricon" src={pickup}/>
              </div>
              <div className="newStaycationNavbaricondiv2">
              <img className="newStaycationNavbaricon" src={pickup}/>
              </div>
              <div className="newStaycationNavbaricondiv3">
              <img className="newStaycationNavbaricon" src={pickup}/>
              </div>
              <div className="newStaycationNavbaricondiv4">
              <img className="newStaycationNavbaricon" src={pickup}/>
              </div>
              
              
              {/* <div className="newStaycationviewallbutton"> */}
              <div className='newStaycationNavbarDropContainer'>
                        <select className="form-select newStaycationNavbarCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ width: "60%",appearance:"none" }}>
                            <option value="" style={{ textAlign: "center" }}>Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='newStaycationNavbaricondiv'>
                        <FaAngleRight style={{fontSize:"15px"}} size={"1em"} className="handpickedicon" />
                        </div>
                    </div>
              </div>
           {/* </div> */}
        </>
    );
};



