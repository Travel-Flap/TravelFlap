import React from 'react';

import Register from '../LoginSignup/Register';
import { Routes, Route } from "react-router";
import Screen from '../LoginSignup/Screen';
import Login from '../LoginSignup/Login';
import AdminHome from '../PannelAdmin/Home/Home';

const AllRoute = () => {
  return (
    <div>


      <Routes>
        {/* <Route path="/" element={<Screen/>} /> */}

        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/adminhome' element={<AdminHome />} /> */}

        <Route path="/admin" element={<Screen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminhome" element={<AdminHome />} />
        {/* <Route path="/hoteldetailspage" element={ <HotelsInnerDetailsPage/> }/> */}
      </Routes>


    </div>
  )
}

export default AllRoute


