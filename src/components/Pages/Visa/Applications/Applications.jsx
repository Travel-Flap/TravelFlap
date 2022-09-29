import { useEffect } from "react";
import { useState } from "react"
import "./Applications.css";

export const Applications=()=>{

 const [count,setCount]=useState(0);
 const[countclients,setCountclients]=useState(0);
 const[branch,setBranch]=useState(0);
 const[year,setYear]=useState(0);
 
 var applications;
 var clients;
 var branches;
 var Years;
 useEffect(() =>{
    applications = setInterval(() =>{
        setCount(count+1000);
        if(count===500000)
        {
            setCount(0);
            StopApplications();
        }
    },100)
    return ()=> clearInterval(applications);
 });

 const StopApplications=()=>{
    setCount(500000);
 }

 useEffect(() =>{
    clients = setInterval(() =>{
        setCountclients(countclients+100);
        if(countclients===15000)
        {
            setCountclients(0);
            StopClients();
        }
    },100)
    return ()=> clearInterval(clients);
 });

 const StopClients=()=>{
    setCountclients(15000);
 }

 useEffect(() =>{
    branches = setInterval(() =>{
        setBranch(branch+10);
        if(branch===100)
        {
            setBranch(0);
            StopBranches();
        }
    },100)
    return ()=> clearInterval(branches);
 });

 const StopBranches=()=>{
    setBranch(100);
 }

 useEffect(() =>{
    Years = setInterval(() =>{
        setYear(year+1);
        if(year===15)
        {
            setYear(0);
            StopYears();
        }
    },100)
    return ()=> clearInterval(Years);
 });

 const StopYears=()=>{
    setYear(15);
 }

    return(
        <>
       <div className="container_footprint">
           <div className="container_child">
           
            <div className="down_child">
                <h1>We have processed over {count} applications</h1>
            </div>
            <div className="details_card">
                <div><h1>{year}</h1>
                <h5>Years</h5></div>
                <div><h2>{branch}</h2>
                <h5>Globally Branches</h5></div>
                <div><h1>{countclients}</h1>
                <h5>Clients</h5></div>
                <div><h1>{count}</h1>
                <h5>Visa Processes</h5></div>
            </div>
           </div>
        </div>
        </>
    )
}