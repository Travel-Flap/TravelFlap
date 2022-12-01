import React from 'react'
import './PopularDestination0serachbox.css';
export const PopularDestination0serachbox = () => {
  return (
    <div>
        <div className='destinputdiv'>
                      <div className='goingtodiv'><input type="text" placeholder='Starting from'   className='goingtodiv1'/></div>
                      <div className='goingtodiv'><input type="text" placeholder='Going to' className='goingtodiv1' /></div>
                      <div className='goingtodiv'><input type="datetime-local" placeholder='Starting date '   className='goingtodiv1'/></div>
                      <div className='goingtodiv'><button type="button" class="btn btn-primary goingtodivbutton ">Search</button></div>
                    </div>
    </div>
  )
}
