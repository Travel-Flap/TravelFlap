import React, { useState } from 'react';
import { MdFlight } from 'react-icons/md';
import { FaHotel } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { FaBus } from 'react-icons/fa';
import { GiCruiser } from 'react-icons/gi';
import { BsFillMoonFill } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg';
import './CarouselForm.css';
import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom";
export const Menu = () => {
    const [selected, setSelected] = useState(0);

    const handleClick = (id) => () => {
        setSelected(id);
    };
    const links = [
        {
            id: 0,
            name: 'Flight',
            icon: <MdFlight size={"1.9em"}/>,
            link:"/flight",
            
        },
        {
            id: 1,
            name: 'Hotel',
            icon: <FaHotel size={"1.9em"} />,
            link: "/hotel",
        },
        {
            id: 2,
            name: 'Visa',
            icon: <RiVisaFill size={"1.9em"}/>,
            link:"/visa",
        },
        {
            id: 3,
            name: 'Holidays',
            icon: <GiPalmTree size={"1.9em"}/>,
            link:"/holidays",
        },
        {
            id: 4,
            name: 'Bus',
            icon: <FaBus size={"1.9em"}/>,
            link:"/bus",
        },
        {
            id: 5,
            name: 'Cruise',
            icon: <GiCruiser size={"1.9em"}/>,
            link:"/cruise",
        },
       
        {
            id: 7,
            name: 'More',
            icon: <CgMoreAlt size={"1.9em"}/>,
            link:"/more",
        },

    ];

    return (

        <div className='carouselmenu'>
         {links.map((item) => {
           return <NavLink key={item.id} to={item.link} className={selected == item.id ? 'carouselmenu-icon-active'  : 'carouselmenu-icon'} onClick={handleClick(item.id)}>
           {item.icon}
           {item.name}
           {/* <span id='iconnames'>{item.name}</span> */}
       
           </NavLink>
         })}
        
       </div>
       
    )
}

