import Carousel from "react-bootstrap/Carousel";
import "./middleslider.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";

export const Middleslider = () => {
  return (
    <div className="middleslide">
      <img
        src="https://preview.colorlib.com/theme/travelix/images/xcta.jpg.pagespeed.ic.m69gPEowgD.webp"
        alt=""
      />

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="innerItem">
              <h1 className="text-center">MALDIVES DELUX PACKAGE</h1>
              <div className="ratingOuter">
                <IconContext.Provider value={{ className: "ratings" }}>
                  <AiFillStar color="#ffeb8d" />
                  <AiFillStar color="#fed46b" />
                  <AiFillStar color="#fbb53d" />
                  <AiFillStar color="#fa9e1b" />
                  <AiOutlineStar color="#fa9e30" />
                </IconContext.Provider>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                accusamus cupiditate! Quia dolores ipsam atque, reprehenderit
                quasi eum sed impedit mollitia molestias eveniet assumenda, id
                doloribus veniam deleniti nihil. Ab asperiores accusamus numquam
                
              </p>
              <div className="btnSlider">Boook Now</div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="innerItem">
              <h1 className="text-center">MALDIVES DELUX PACKAGE</h1>
              <div className="ratingOuter">
                <IconContext.Provider value={{ className: "ratings" }}>
                  <AiFillStar color="#ffeb8d" />
                  <AiFillStar color="#fed46b" />
                  <AiFillStar color="#fbb53d" />
                  <AiFillStar color="#fa9e1b" />
                  <AiOutlineStar color="#fa9e30" />
                </IconContext.Provider>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                accusamus cupiditate! Quia dolores ipsam atque, reprehenderit
                quasi eum sed impedit mollitia molestias eveniet assumenda, id
                doloribus veniam deleniti nihil. Ab asperiores accusamus numquam
               
              </p>
              <div className="btnSlider">Boook Now</div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="innerItem">
              <h1 className="text-center">MALDIVES DELUX PACKAGE</h1>
              <div className="ratingOuter">
                <IconContext.Provider value={{ className: "ratings" }}>
                  <AiFillStar color="#ffeb8d" />
                  <AiFillStar color="#fed46b" />
                  <AiFillStar color="#fbb53d" />
                  <AiFillStar color="#fa9e1b" />
                  <AiOutlineStar color="#fa9e30" />
                </IconContext.Provider>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                accusamus cupiditate! Quia dolores ipsam atque, reprehenderit
                quasi eum sed impedit mollitia molestias eveniet assumenda, id
                doloribus veniam deleniti nihil. Ab asperiores accusamus numquam
                
              </p>
              <div className="btnSlider">Boook Now</div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="false"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
