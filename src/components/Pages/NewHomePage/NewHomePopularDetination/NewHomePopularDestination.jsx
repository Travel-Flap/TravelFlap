// import "./NewHomePopularDestination.css";
// import { useState } from "react";
// import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// // const images = [astronaut, celebrating, education, taken];

// export const NewHomePopularDestinations = () => {
//     const NextArrow = ({ onClick }) => {
//         return (
//             <div className="arrow next" onClick={onClick}>
//                 <FaArrowRight />
//             </div>
//         );
//     };

//     const PrevArrow = ({ onClick }) => {
//         return (
//             <div className="arrow prev" onClick={onClick}>
//                 <FaArrowLeft />
//             </div>
//         );
//     };

//     const [imageIndex, setImageIndex] = useState(0);

//     const settings = {
//         infinite: true,
//         lazyLoad: true,
//         speed: 300,
//         slidesToShow: 5,
//         centerMode: true,
//         centerPadding: 0,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         beforeChange: (current, next) => setImageIndex(next),
//     };

//     return (
//         <div className="newhomePopularDestinationmainouterdiv">
//             <h2>Popular Destinations</h2>
//             <div className="newhomePopularDestinations">

//             </div>
//             <Slider {...settings}>
//                 {/* {images.map((img, idx) => (
//                     <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
//                         <img src={img} alt={img} />
//                     </div>
//                 ))} */}
//             </Slider>
//         </div>
//     );
// }

