import React from 'react'
import './Banner2.css'

export const Banner2 = () => {
  return (
    <div className='Banner2image-div'>
        <img src='Images/blogpage/Share your travels section background image.png' className='Banner2image'></img>
        <div className='headinginputbann2div'>
        <h3>LET'S BUILD A COMMUNITY </h3>
        <h1>Join Our Next Destination </h1>
       
         <div className='banner2inputboxdiv'>
          <h2>Share your Travels</h2>
          <p>Suggest a new travel destination that you want to see and we will feature it in our blog </p>
         <input type="text" placeholder=  "  Destination name.." name="search" className=' blogpage-banner2input'/>
         <input type="text" placeholder=  "  Country of Destination" name="search" className='blogpage-banner2input'/>
         <input type="text" placeholder=  "  Your name" name="search" className='blogpage-banner2input'/>
         <input type="text" placeholder=  "  Shoot category" name="search" className='blogpage-banner2input'/>
         <input type="text" placeholder=  "  Describe what kind of photos you want to focus on " name="search" className='blogpage-banner2input2'/>
         <button type="button" className="btn btn-primary  banner2inputbutton ">Submite</button>
         </div>
         </div> 
    </div>
  )
}
