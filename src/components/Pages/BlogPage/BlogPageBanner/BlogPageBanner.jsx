import React from 'react'
import './BlogPageBanner.css'
import { FaSistrix } from "react-icons/fa";
export const BlogPageBanner = () => {
  return (
    <div>
      {/* <div className='card blogpageBannerDiv '>
                <img className='BlogBannerimage' src="Images/PopularDestinationImages/Populardestinationinnerimage banner1.jpg" alt='banner image' />
                <div class="card-img-overlay ">
                    <p className='blogpageBannerHeading'> Where will you go next </p>
                    <div className='Blogvaccy'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit soluta eaque deleniti rem quod sapiente,
                         libero similique reiciendis dicta optio qui,
                          adipisci pariatur ex quos eveniet in nisi officia aut.</p>

                          <h3>Let's Go......</h3>

                          <div className='bloginputdiv '> 
                          <div>
                            <input type="text" placeholder=  "  <FaSistrix/> Search your option.." name="search"/>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          
                          </div>

                </div>

            </div> */}

      <div className='card blogpageBannerDiv '>
        <img className='blogpageBannerimage' src="Images/blogpage/woman-traveler.png" alt='banner image' />
        <div class="card-img-overlay">
          <p className='blogpageBannerHeading'>Where will you go next........</p>
          <div className='Bannercontain'>
            <p style={{ marginTop: "-1%", color: "rgb(192, 189, 189)" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, eligendi? Maiores in ratione ea rem deserunt,
              delectus exercitationem magni ipsum harum hic quia aperiam consequatur neque sapiente ipsam assumenda vitae?</p></div>
          <p className='blogpageBannerHeading2' > Let's Go.....</p>
          <div className='bloginputdiv '>
            <div className=' blogpagesearch'>
              <input type="text" placeholder="  Search your option.." name="search" className='blogsearch' />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>



        </div>

      </div>
    </div>
  )
}
