import "./InnerVisaPage1Banner.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const InnerVisaPage1Banner = () => {
  return (
    <>
      <div className="innervisapagebannerOuterDiv">
        <div className="innervisaPagebannerMainDiv">
          <div className="innervisapagebannerSlider">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-indicators">
                <button className="carouselButtonVisa"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="Images/NewHomeLayout/Banners/Flight/Images 1.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="Images/NewHomeLayout/Banners/Flight/Images 2.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="Images/NewHomeLayout/Banners/Flight/Images 3.jpg" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="innerVisapagebannerContents">
            <div className="innervisaheadingDiv">
              <div className="innervisapagebannerCountryHeading">
                <h2>Vietnam</h2>
                <p> Continent Asia</p>
                <button className="innervisaFavouritebutton">
                  Add to Favourites
                </button>
              </div>
              <div className="innervisaCountryImage">
                <img src="Images/InnerVisaPage/vietnam.png" />
              </div>
            </div>
            <div className="innervisabannerDescription">
              <div className="innervisadescriptionText">
                <p>
                  South Africa is a country on the southernmost tip of the
                  African continent, marked by several distinct ecosystems.
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
