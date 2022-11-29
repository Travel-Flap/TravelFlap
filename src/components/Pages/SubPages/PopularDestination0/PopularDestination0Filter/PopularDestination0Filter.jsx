import React from 'react'
import './PopularDestination0Filter.css'


export const PopularDestination0Filter = () => {
  return (
    <div>
      <div className='PopularDestination0Filtermaindiv'>
       <div className='budgetdiv'>
        <div className='duretiondiv'>
          <div>
       <h5> Budget </h5>
       </div>
       <div className='persondiv'>
       <p> Per person</p>
       </div>
       </div>
       <p> (1,00,000 - 5,00,000)</p>
       <div className='rangediv'>
       <input type = "range" min = "1" max = "100" value = "100" className='valuerange'/>
       </div>
       </div>
       <div className='budgetdiv'>
        <div className='duretiondiv'>
          <div>
       <h5> Duration </h5>
       </div>
       <div className='persondiv'>
       <p> in nights</p>
       </div>
       </div>
       <p> (4 N - 7 N)</p>
       <div className='rangediv'>
       <input type = "range" min = "1" max = "100" value = "100" className='valuerange'/>
       </div>
       </div>
       


       <div className='hotelchoice'>
        <p>Hotel Choice</p>
        <div className='hotelchoicestar'>
          <div className='hotelrating'><p>  3★</p>
          </div>
          <div className='hotelrating'><p>  3★
          </p></div>
          <div className='hotelrating'><p>  3★</p>
          </div>
          <div className='hotelrating'><p>  3★</p>
          </div>
        </div>
       </div>
       {/* <div className='hotelchoicedropdown'>
        <div className='selectoptiondiv'>
          <select className='selectoptiondiv1'>
            <option value = "true">Flight</option>
            <option value = "1">Flight</option>
            <option value = "2">Flight</option>
            <option value = "3">Flight</option>
            <option value = "4">Flight</option>
          </select>
        </div>
        <div>
          <select>
            <option value = "true">For Couple</option>
            <option value = "1">Flight</option>
            <option value = "2">Flight</option>
            <option value = "3">Flight</option>
            <option value = "4">Flight</option>
          </select>
        </div>
        <div>
          <select>
            <option value = "true">Similar City</option>
            <option value = "1">Flight</option>
            <option value = "2">Flight</option>
            <option value = "3">Flight</option>
            <option value = "4">Flight</option>
          </select>
        </div>
       </div> */}
      </div>
    </div>
  )
}

