// import React from 'react';
// import "./MultipleCards.css"

// export const MultipleCards = () => {
//     return (
//         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//             <div class="carousel-inner">
//                 <div class="carousel-item active">
//                     <div class="cards-wrapper">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..." />
//                                 <div class="card-body">
//                                     <h5 class="card-title">Card title</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                         </div>
//                         <div class="card d-none d-md-block">
//                             <img src="..." class="card-img-top" alt="..." />
//                                 <div class="card-body">
//                                     <h5 class="card-title">Card title</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                         </div>
//                         <div class="card d-none d-md-block">
//                             <img src="..." class="card-img-top" alt="..." />
//                                 <div class="card-body">
//                                     <h5 class="card-title">Card title</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="carousel-item">
//                     <div class="cards-wrapper">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..." />
//                                 <div class="card-body">
//                                     <h5 class="card-title">Card title</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                         </div>
//                         <div class="card d-none d-md-block">
//                             <img src="..." class="card-img-top" alt="..."/>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Card title</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                         </div>
//                         <div class="card d-none d-md-block">
//                             <img src="..." class="card-img-top" alt="..."/>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Card title</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="carousel-item">
//                     <div class="cards-wrapper">
//                         <div class="card">
//                             <img src="..." class="card-img-top" alt="..."/>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Card title</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                         </div>
//                         <div class="card d-none d-md-block">
//                             <img src="..." class="card-img-top" alt="..."/>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Card title</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                         </div>
//                         <div class="card d-none d-md-block">
//                             <img src="..." class="card-img-top" alt="..."/>
//                                 <div class="card-body">
//                                     <h5 class="card-title">Card title</h5>
//                                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Previous</span>
//             </a>
//             <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span class="sr-only">Next</span>
//             </a>
//         </div>
//     )
// }

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultipleCards.css"

export const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card multicards">
                    <div className="card-image">
                        <img src="Images/Travel Image 1.jpg" />
                    </div>
                    {/* <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul> */}
                    <div className="details">
                        <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                            <p>I love the experience with the travel Flap. I surely recommend it
                                other for same
                            </p></span>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card multicards">
                    <div className="card-image">
                        <img src="images/Travel Image 6.jpg" />
                    </div>
                    {/* <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul> */}
                    <div className="details">
                        <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                            <p>I love the experience with the travel Flap. I surely recommend it
                                other for same
                            </p></span>
                        </h2>
                        {/* <h2><span className='job-title'>I love the experience with the travel Flap. I surely recommend it
                            other for same</span></h2> */}

                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card multicards">
                    <div className="card-image">
                        <img src="images/Travel Image 3.jpg" />
                    </div>
                    {/* <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul> */}
                    <div className="details">
                        <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                            <p>I love the experience with the travel Flap. I surely recommend it
                                other for same
                            </p></span>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card multicards">
                    <div className="card-image">
                        <img src="images/Travel Image 4.jpg" />
                    </div>
                    {/* <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul> */}
                    <div className="details">
                        <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                            <p>I love the experience with the travel Flap. I surely recommend it
                                other for same
                            </p></span>
                        </h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

// export default ImageSlider
