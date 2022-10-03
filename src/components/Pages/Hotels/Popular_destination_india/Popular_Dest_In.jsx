import "../Popular_destination_india/Popular_Dest_In.css"
 
import { useState } from "react";
 
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export const Popular_Destination_In=()=>{
  let arr = [
    {
      city: "New Delhi and NCR",
      image:
        "https://pix6.agoda.net/geo/city/14552/1_14552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "10790 Hotels",
    },
    {
      city: "Goa",
      image:
        "https://pix6.agoda.net/geo/city/11304/1_11304_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "7752 Hotels",
    },
    {
      city: "Mumbai",
      image:
        "https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "3679 Hotels",
    },
    {
      city: "Bangalore",
      image:
        "https://pix6.agoda.net/geo/city/4923/1_4923_02.jpg?ca=8&ce=1&s=345x345&ar=1x1",
      accommodation: "4683 Hotels",
    },
    {
      city: "Chennai",
      image:
        "https://pix6.agoda.net/geo/city/17269/1_17269_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2834  Hotels",
    },
    {
      city: "Hyderabad",
      image:
        "https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2225 Hotels",
    },
    {
      city: "Jaipur",
      image:
        "https://pix6.agoda.net/geo/city/8845/1_8845_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2620 Hotels",
    },
    {
      city: "Pondicherry",
      image:
        "https://pix6.agoda.net/geo/city/12565/1_12565_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "1125 Hotels",
    },
    {
      city: "Pune",
      image:
        "https://pix6.agoda.net/geo/city/16854/1_16854_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2107 Hotels",
    },
    {
      city: "Ooty",
      image:
        "https://pix6.agoda.net/geo/city/16857/1_16857_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "1036 Hotels",
    },
    {
      city: "Varanasi",
      image:
        "https://pix6.agoda.net/geo/city/3005/1_3005_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "1032 Hotels",
    },
    {
      city: "Kolkata",
      image:
        "https://pix6.agoda.net/geo/city/6241/1_6241_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
      accommodation: "2658 Hotels",
    },
  ];
  const [index, setindex] = useState(1);
  const [slideImage, setslideImage] = useState([
    arr[0],
    arr[2],
    arr[3],
    arr[4],
    arr[5],
    arr[6],
  ]);
  function handlchange(text) {
    console.log(text);
    if (text == "next") {
      if (index < 5) {
        setindex(index + 1);
      } else {
        setindex(0);
      }
    }
    if (text == "pre") {
      if (index > 0) {
        setindex(index - 1);
      } else {
        setindex(4);
      }
    }
    setslideImage([
      arr[index],
      arr[index + 1],
      arr[index + 2],
      arr[index + 3],
      arr[index + 5],
      arr[index + 6],
    ]);
    console.log(slideImage);
  }

  return (
    <div className="main_Topdest_div">
      <h2>Popular destinations in India</h2>
     
      <div className="all_round_image">
        <div>
          <img src={slideImage[0].image} alt="" />
          <h4>{slideImage[0].city}</h4>
          <p>{slideImage[0].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[1].image} alt="" />
          <h4>{slideImage[1].city}</h4>
          <p>{slideImage[1].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[2].image} alt="" />
          <h4>{slideImage[2].city}</h4>
          <p>{slideImage[2].accommodation}s</p>
        </div>
        <div>
          <img src={slideImage[3].image} alt="" />
          <h4>{slideImage[3].city}</h4>
          <p> {slideImage[3].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[4].image} alt="" />
          <h4>{slideImage[4].city}</h4>
          <p>{slideImage[4].accommodation}</p>
        </div>
        <div>
          <img src={slideImage[5].image} alt="" />
          <h4>{slideImage[5].city}</h4>
          <p>{slideImage[5].accommodation}</p>

        </div>
      </div>
      <div className="slider_button_round ">
        <BsFillArrowLeftCircleFill
          className="left"
          onClick={() => {
            handlchange("next");
          }}
        >
          next
        </BsFillArrowLeftCircleFill>
        <BsFillArrowRightCircleFill
          className="right"
          onClick={() => {
            handlchange("pre");
          }}
        >
          pre
        </BsFillArrowRightCircleFill>
      </div>
    </div>
  );
}
