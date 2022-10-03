import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./OurPartners.css";
export default class OurPartners extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows : false,
            cssEase: "linear",
        };
        return (
            <div className="_maincarouseldiv">
                <Slider {...settings}>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/6.png" className="_imagediv" alt="carouselimage" />
                        <div className="_hoverdiv">
                        </div>
                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/8.png" className="_imagediv" alt="carouselimage" />
                        
                        
                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/7.png" className="_imagediv" alt="carouselimage" />
                        
                        
                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/9.png" className="_imagediv" alt="carouselimage" />
                        
                        
                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/10.png" className="_imagediv" alt="carouselimage" />
                        
                        
                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/11.png" className="_imagediv" alt="carouselimage" />
                        
                        
                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/12.png" className="_imagediv" alt="carouselimage" />
                        
                        
                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/13.png" className="_imagediv" alt="carouselimage" />
                        
                        
                    </div>
                    <div className="_carouseldiv1">
                        <img src="https://blueberry-travel.com/src/img/brands/1.png" className="_imagediv" alt="carouselimage" />
                        
                        
                    </div>
                </Slider>
            </div>
        );
    }
}

// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./OurPartners";
// // import "/src/App.css";

// export const OurPartners = () => {
//     let settings = {
//         dots: true,
//         // infinite: true,
//         autoplay:true,
//         // speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         cssEase: "linear"
//     }
//     return (
//         <Slider {...settings} className="multiCardSlider">
//             <div className="card-wrapper">
//                 <div className="card multicards">
//                     <div className="card-image">
//                         <img src="https://i.imgur.com/rxaxKNr.jpg" />
//                     </div>
//                     {/* <ul className="social-icons">
//                         <li><a href="#"><i className="fa fa-facebook"></i></a></li>
//                         <li><a href="#"><i className="fa fa-instagram"></i></a></li>
//                         <li><a href="#"><i className="fa fa-twitter"></i></a></li>
//                         <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
//                     </ul> */}
//                     <div className="details">
//                         <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
//                             <p>I love the experience with the travel Flap. I surely recommend it
//                                 other for same
//                             </p></span>
//                         </h2>
//                     </div>
//                 </div>
//             </div>

//             <div className="card-wrapper">
//                 <div className="card multicards">
//                     <div className="card-image">
//                         <img src="Images/TravelImage6.jpg" />
//                     </div>
//                     {/* <ul className="social-icons">
//                         <li><a href="#"><i className="fa fa-facebook"></i></a></li>
//                         <li><a href="#"><i className="fa fa-instagram"></i></a></li>
//                         <li><a href="#"><i className="fa fa-twitter"></i></a></li>
//                         <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
//                     </ul> */}
//                     <div className="details">
//                         <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
//                             <p>I love the experience with the travel Flap. I surely recommend it
//                                 other for same
//                             </p></span>
//                         </h2>
//                         {/* <h2><span className='job-title'>I love the experience with the travel Flap. I surely recommend it
//                             other for same</span></h2> */}

//                     </div>
//                 </div>
//             </div>

//             <div className="card-wrapper">
//                 <div className="card multicards">
//                     <div className="card-image">
//                         <img src="Images/TravelImage3.jpg" />
//                     </div>
//                     {/* <ul className="social-icons">
//                         <li><a href="#"><i className="fa fa-facebook"></i></a></li>
//                         <li><a href="#"><i className="fa fa-instagram"></i></a></li>
//                         <li><a href="#"><i className="fa fa-twitter"></i></a></li>
//                         <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
//                     </ul> */}
//                     <div className="details">
//                         <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
//                             <p>I love the experience with the travel Flap. I surely recommend it
//                                 other for same
//                             </p></span>
//                         </h2>
//                     </div>
//                 </div>
//             </div>

//             <div className="card-wrapper">
//                 <div className="card multicards">
//                     <div className="card-image">
//                         <img src="Images/TravelImage4.jpg" />
//                     </div>
//                     {/* <ul className="social-icons">
//                         <li><a href="#"><i className="fa fa-facebook"></i></a></li>
//                         <li><a href="#"><i className="fa fa-instagram"></i></a></li>
//                         <li><a href="#"><i className="fa fa-twitter"></i></a></li>
//                         <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
//                     </ul> */}
//                     <div className="details">
//                         <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
//                             <p>I love the experience with the travel Flap. I surely recommend it
//                                 other for same
//                             </p></span>
//                         </h2>
//                     </div>
//                 </div>
//             </div>
//         </Slider>
//     )
// }

// export default OurPartners;

//... is called spread operator

//thanks for watching
//pleae subscribe my channel


// import React,{Component} from 'react';  
// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';  
// import './OurPartners.css';  
// export class OurPartners extends Component {  
//     render() {
//         return(
//         <div className='outer-div'>
//             <div class='container-fluid'>
//                 <div className="row title" style={{marginBottom: "20px"}} >
//                     <div class="overflow-hidden btn btn-info">
//                         Our Partners
//                     </div>
//                 </div>
//             </div>
//             <div class='container-fluid'>
//                 <OwlCarousel items={3} margin={8} autoplay ={true}>
//             <div >
//                 <img  className="img" src= "https://i.imgur.com/rxaxKNr.jpg"/>
//             </div>
//             <div>
//                 <img  className="img" src="https://i.imgur.com/rxaxKNr.jpg"/>
//             </div>  
//             <div>
//                 <img  className="img" src= "https://i.imgur.com/rxaxKNr.jpg"/>
//             </div>
//             <div>
//                 <img  className="img" src= "https://i.imgur.com/rxaxKNr.jpg"/>
//             </div>
//             <div>
//                 <img className="img" src= "https://i.imgur.com/rxaxKNr.jpg"/>
//             </div>
//             <div>
//                 <img className="img" src= "https://i.imgur.com/rxaxKNr.jpg"/>
//             </div>
//             <div>
//                 <img className="img" src= "https://i.imgur.com/rxaxKNr.jpg"/>
//             </div>  
//         </OwlCarousel> 

//       </div>  
//       </div>  

//           )  

//         }  

//       }  
        
// export default OurPartners; 

// import React from 'react';
// import Slider from "react-slick";
// import "./OurPartners.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export const OurPartners = () => {
//     let settings = {
//         dots: true,
//         infinite: true,
//         // autoplay:true,
//         // speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         cssEase: "linear"
//     }
//   return (
//     <Slider {...settings} className="multiCardSlider">
//         <div className="card-wrapper">
//                 <div className="card multicards">
//                     <div className="card-image">
//                         <img src="https://i.imgur.com/rxaxKNr.jpg" />
//                     </div>
//                     {/* <ul className="social-icons">
//                         <li><a href="#"><i className="fa fa-facebook"></i></a></li>
//                         <li><a href="#"><i className="fa fa-instagram"></i></a></li>
//                         <li><a href="#"><i className="fa fa-twitter"></i></a></li>
//                         <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
//                     </ul> */}
//                     <div className="details">
//                         <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
//                             <p>I love the experience with the travel Flap. I surely recommend it
//                                 other for same
//                             </p></span>
//                         </h2>
//                     </div>
//                 </div>
//             </div>
//     </Slider>
    
//   )
// }


// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// export default class AutoPlayMethods extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.play = this.play.bind(this);
// //     this.pause = this.pause.bind(this);
// //   }
// //   play() {
// //     this.slider.slickPlay();
// //   }
// //   pause() {
// //     this.slider.slickPause();
// //   }
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000
//     };
//     return (
//       <div>
//         <h2>Auto Play & Pause with buttons</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         {/* <div style={{ textAlign: "center" }}>
//           <button className="button" onClick={this.play}>
//             Play
//           </button>
//           <button className="button" onClick={this.pause}>
//             Pause
//           </button>
//         </div> */}
//       </div>
//     );
//   }
// }

// // import React from 'react';
// // // import './App.css';
// // //Owl Carousel Libraries and Module
// // import OwlCarousel from 'react-owl-carousel';
// // import 'owl.carousel/dist/assets/owl.carousel.css';
// // import 'owl.carousel/dist/assets/owl.theme.default.css';
// // //Owl Carousel Settings
// // const options = {
// //     margin: 70,
// //     responsiveClass: true,
// //     // nav: true,
// //     autoplay: false,
// //     // navText: ["Prev", "Next"],
// //     autoplay:true,
// //     pagination: false,
// //     autoplayTimeout:1000,
// //     smartSpeed: 1000,
// //     responsive: {
// //         0: {
// //             items: 1,
// //         },
// //         400: {
// //             items: 1,
// //         },
// //         600: {
// //             items: 2,
// //         },
// //         700: {
// //             items: 3,
// //         },
// //         1000: {
// //             items: 5,
// //         }
// //     },
// // };
// // class OurPartners extends React.Component {
// //     render() {

// //         return (
// //             <div>
// //                 <h1>Reactjs OwlCarousel Working</h1>
// //                 <OwlCarousel className="slider-items owl-carousel" {...options}>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                     <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" /></div>
// //                 </OwlCarousel>
// //             </div>
// //         )
// //     };
// // }
// // export default OurPartners;