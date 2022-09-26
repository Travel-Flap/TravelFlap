import React from "react";
// import './SeoLocalServices.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from "react-icons/lib";
import { IoLocationSharp } from 'react-icons/io5';
import { ImLink } from 'react-icons/im';
import { SiGoogleanalytics } from 'react-icons/si';
import { AiOutlineAudit } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { MdExpandLess } from 'react-icons/md'
import { useState } from "react";
import { button } from "react-bootstrap";

// import {Image1} from "../../../../../public/Images/CardImage1.jpg"

export default function SeoLocalServices() {
    const [more, setmore] = useState(false);
    const [num, setnum] = useState();
    const [a, seta] = useState();

    const arr1 = [
        {
            servicename: "Mauritius",
            buttontext:"Tap for more",
            // icons: <BsSearch />,
            img: "/images/CardImage1.jpg",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Greece",
            img: "/images/CardImage1.jpg",
            buttontext:"Tap for more",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Scotland",
            img: "/images/CardImage1.jpg",
            buttontext:"Tap for more",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            servicename: "Paris",
            img: "/images/CardImage1.jpg",
            buttontext:"Tap for more",
            data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        // {
        //     servicename: "New York",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
        // {
        //     servicename: "Spain",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
        // {
        //     servicename: "America",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
        // {
        //     servicename: "Australia",
        //     img: "/images/CardImage1.jpg",
        //     buttontext:"Tap for more",
        //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        // },
    ]

    const toggle = (i) => {
        let b = i;
        if (b != a) {
            // console.log(i,"upper");
            // console.log(more);
            setnum(i)
            setmore(true)
        }
        if (b == a) {
            // console.log(i,"lower");
            // console.log(more);
            // // setnum(i)
            setmore(!more)
        }
        seta(i);
        // console.log(a)
        // console.log(b)
    }

    {/* <div className="_SeoLocaluppericon">{<MdExpandLess onClick={()=>toggle(i)}/>}</div> */ }

    return (
        <div className="_SeoLocalservicesmaindiv">

            <span className="_SeoLocalServicesheading">
                OUR SERVICES INCLUDES....
            </span>
            <div className="_SeoLocalservicesslider">
                {
                    arr1.map((items, i) => {
                        return (
                            <div className=" _SeoLocalServicesnames">

                                {/* <IconContext.Provider value={{ className: more && num == i ? "_SeoLocalicons2" : "_SeoLocalicons1" }}>
                                    {items.icons}
                                </IconContext.Provider> */}
                                <div className="_Activitiescard">
                                    <img src={items.img} />
                                    <p  className={more && num == i ? "_SeoLocalName2" : "_SeolocalNamebutton"}>{items.buttontext}</p>
                                    <div className={more && num == i ? "_SeoLocalName2" : "_SeoLocalName"}>{items.servicename}</div>
                                </div>
                                <div className={more && num == i ? "_SeoLocalservicedata1" : "_SeoLocalservicedata"} onClick={() => toggle(i)} >{items.data}</div>  
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

