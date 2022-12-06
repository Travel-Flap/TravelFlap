import React,{useState,useEffect} from 'react';
import "./CurrencyDataFetchTest.css";


export const CurrencyDataFetchTest = () => {
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
    <div className="CurrencyDataFetchTestContainerDiv">
     {
       data && data.length>0 && data.map(
           (item)=>
           <p className='CurrencyDataFetchNames'>
            <span>
              {item.name}
              <h6 className='CurrencyDataFetchCodes'>{item.currency.code}</h6>
              <h6 className='CurrencyDataFetchCodes'>{item.currency.name}</h6>
              <h6 className='CurrencyDataFetchCodes'>{item.currency.symbol}</h6>
              <img className='CurrencyDataFetchImage' src={item.flag}/>
            </span>
            </p>
       )
     }
    </div>
    </>
  );
}


