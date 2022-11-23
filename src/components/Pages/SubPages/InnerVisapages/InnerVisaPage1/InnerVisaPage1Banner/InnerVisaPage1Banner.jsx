import "./InnerVisaPage1Banner.css";
import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaInfo,FaMapMarkerAlt,FaClock } from "react-icons/fa";

export const InnerVisaPage1Banner = () => {
  return (
    <>
      <div className="innervisapagebannerOuterDiv">
        <div className="innervisaPagebannerMainDiv">
          <div className="innervisapagebannerSlider">

          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active innervisapageSliderImages">
                        <LazyLoadImage src="Images/InnerVisaPage/image2.webp" class="d-block w-100 testinnnervisaImage" alt="InnerVisa banner image1" />
                    </div>
                    <div class="carousel-item innervisapageSliderImages">
                        <LazyLoadImage src="Images//InnerVisaPage/image3.webp" class="d-block w-100 testinnnervisaImage" alt="Innervisa banner image 3" />
                    </div>
                    <div class="carousel-item innervisapageSliderImages">
                        <LazyLoadImage src="Images//InnerVisaPage/image4.webp" class="d-block w-100 testinnnervisaImage" alt="Innervisa banner image 3" />
                    </div>
                    <div class="carousel-item innervisapageSliderImages">
                        <LazyLoadImage src="Images//InnerVisaPage/image5.webp" class="d-block w-100 testinnnervisaImage" alt="Innervisa banner image 3" />
                    </div>
                    <div class="carousel-item innervisapageSliderImages">
                        <LazyLoadImage src="Images//InnerVisaPage/image6.webp" class="d-block w-100 testinnnervisaImage" alt="Innervisa banner image 3" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
          </div>


          </div>
          <div className="innerVisapagebannerContents">
            <div className="innervisaheadingDiv">
              <div className="innervisapagebannerCountryHeading">
                <h2>Vietnam</h2>
                <p className="innervisacontinent"> <FaMapMarkerAlt className="innervisacontinentIcon"/> Continent : Asia</p>
                <p className="innervisaTime"> <FaClock className="innervisaTimeIcon"/> Processing Time : 5 - 6 Days </p>
                <button className="innervisaFavouritebutton">
                  Add to Favourites
                </button>
              </div>
              {/* <div className="innervisaCountryImage">
                <img src="Images/InnerVisaPage/vietnam.png" />
              </div> */}

              <div className='innervisadetailsimage'>
                      <img width="80%" height="80%" className='innervisadetailsflagimagge' src="Images/InnerVisaPage/VietnamFlag.jpg" />
              </div>

            </div>
            <div className="innervisabannerDescription">
              <div className="innervisadescriptionText">
                <p>
                  Vietnam is a country on the southernmost tip of the
                  Asian continent, marked by several distinct ecosystems.
                  Inland safari destination Kruger National Park is populated by
                  big game. The Western Cape offers beaches, lush winelands
                  around Stellenbosch and Paarl, craggy cliffs at the Cape of
                  Good Hope.
                </p>
              </div>
              <div className="innervisadescriptionPriceButton">₹ 10,589</div>
            </div>

            <div className="innervisabannerdetails">
              <div className="innervisabannerdetailsheadings">
                <ul>
                  <li>Ideal Duration : </li>
                  <li>Best Time : </li>
                  <li>Currency : </li>
                  <li>Budget : </li>
                </ul>
              </div>
              <div className="innervisabannerdata">
                <ul>
                  <li>10-12 Days</li>
                  <li>Spring (February to April)</li>
                  <li>Vietnamese Dong (VND)</li>
                  <li>Cheap </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
