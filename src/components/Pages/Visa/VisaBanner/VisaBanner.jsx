import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "./VisaBanner.css";

export const VisaBanner = () => {
    return (
        <>
            <div id='bannerImage'>
                <div className='bannerheading'>
                    <p>Get Your Visa here!</p>
                </div>
                <div className='bannersearchboxdiv'>
                    <div className='selectcountry' style={{marginLeft:"2%"}}>
                            <p className='visabannercountrytext'>Select visa country</p>
                            <select className="form-select visabannerdropdown" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
                                <option value>Select Country</option>
                                <option value="1">India Visa</option>
                                <option value="2">UAE Visa</option>
                                <option value="3">Pakistan Visa</option>
                                <option value="4">France Visa</option>
                                <option value="5">Spain Visa</option>
                                <option value="6">Turkey Visa</option>
                                <option value="7">Italy Visa</option>
                                <option value="8">Thailand Visa</option>
                                <option value="9">Mexico Visa</option>
                                <option value="10">Germany Visa</option>
                                <option value="11">United Kingdom Visa</option>
                                <option value="12">China Visa</option>
                                <option value="13">Korea Visa</option>
                            </select>
                        </div>
                        <div className='selectcountry'>
                           <p className='visabannercountrytext'>Select Nationality</p>
                            <select className="form-select visabannerdropdown" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
                                <option value>Select Nationality</option>
                                <option value="1">India</option>
                                <option value="2">UAE</option>
                                <option value="3">Pakistan</option>
                                <option value="4">France</option>
                                <option value="5">Spain</option>
                                <option value="6">Turkey</option>
                                <option value="7">Italy</option>
                                <option value="8">Thailand</option>
                                <option value="9">Mexico</option>
                                <option value="10">Germany</option>
                                <option value="11">United Kingdom</option>
                                <option value="12">China</option>
                                <option value="13">Korea</option>
                            </select>
                        </div>
                        <div className='selectcountry'>
                          <p className='visabannercountrytext'>Select country of Resident</p>
                            <select className="form-select visabannerdropdown" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
                                <option value>Select Residency</option>
                                <option value="1">India</option>
                                <option value="2">UAE</option>
                                <option value="3">Pakistan</option>
                                <option value="4">France</option>
                                <option value="5">Spain</option>
                                <option value="6">Turkey</option>
                                <option value="7">Italy</option>
                                <option value="8">Thailand</option>
                                <option value="9">Mexico</option>
                                <option value="10">Germany</option>
                                <option value="11">United Kingdom</option>
                                <option value="12">China</option>
                                <option value="13">Korea</option>
                            </select>
                        </div>
                    <Link to="/visadetail" className='bannersearchbutton'><p>Search</p></Link>
                </div>
            </div>
        </>
    )
}
