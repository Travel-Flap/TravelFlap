// import React,{useState,useEffect} from 'react';
// import "./CountryDataFetchTest.css";


// export const CountryDataFetchTest = () => {
//   const [data,setData]=useState([]);
//   const getData=()=>{
//     fetch('data.json'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])
//   return (
//     <>
//     <div className="CountryDataFetchTestContainerDiv">
//      {
//        data && data.length>0 && data.map(
//            (item)=>
//            <p className='CountryDataFetchNames'>
//               {item.name}
//               <h6 className='CountryDataFetchCodes'>{item.code}</h6>
//               <img className='CountryDataFetchImage' src={item.flag}/>
//             </p>
//        )
//      }
//     </div>
//     </>
//   );
// }


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
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
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
          //  <p className='CountryDataFetchNames'>
            <div className='CountryDataFetchdetails'>
              {/* {item.name} */}
              <img className='CountryDataFetchImage' src={item.flag}/>
              {/* <img className='CountryDataFetchImage' src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"/> */}
              <h6 className='CountryDataFetchCodes'>{item.name}</h6>
              {/* <h6 className='CountryDataFetchLangugeCodes'>{item.language.code} </h6> */}
              {/* <h6 className='CountryDataFetchSymbol'>{item.Country.symbol}</h6> */}

           </div>
            // </p>
       )
     }
    </div>
    </>
  );
}




