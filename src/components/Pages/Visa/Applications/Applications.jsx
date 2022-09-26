import { useEffect } from "react";
import { useState } from "react"
import "./Applications.css";

export const Applications=()=>{

 const [count,setCount]=useState(1);
 const stop=()=>{
    setCount(100);
 }
 var timer;
 useEffect(() =>{
    timer = setInterval(() =>{
        setCount(count+50);
        if(count===5)
        {
            stop();
        }
    },10)
    return ()=> clearInterval(timer);
 });

    return(
        <>
       <div id="container_footprint">
           <div className="container_child">
           
            <div className="down_child">
                <h1>We have processed over {count} applications</h1>
            </div>
            <div className="details_card">
                <div><h1>15</h1>
                <h5>Years</h5></div>
                <div><h2>95+</h2>
                <h5>Globally Branches</h5></div>
                <div><h1>15,294</h1>
                <h5>Clients</h5></div>
                <div><h1>{count}</h1>
                <h5>Visa Processes</h5></div>
            </div>
           </div>
        </div>
        </>
    )
}