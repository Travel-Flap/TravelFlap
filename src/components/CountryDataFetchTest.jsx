import React,{useState,useEffect} from 'react';
import "./CountryDataFetchTest.css";


export const CountryDataFetchTest = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div className="CountryDataFetchTestContainerDiv">
     {
       data && data.length>0 && data.map(
           (item)=>
           <p className='CountryDataFetchNames'>
            <span>
              {item.name}
              <h6 className='CountryDataFetchCodes'>{item.code}</h6>
              <img className='CountryDataFetchImage' src={item.flag}/>
            </span>
            </p>
       )
     }
    </div>
    </>
  );
}


