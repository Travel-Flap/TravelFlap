
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./StaycationsInnerBanner.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function StaycationsInnerBanner() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}



// import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import "./HotelInnerBanner.css";

// // import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper";

// export default function HotelInnerBanner() {
//     const [activeThumb, setactiveThumb] = useState(null);

//     return (
//         <>
//             <Swiper
//                 style={{
//                     "--swiper-navigation-color": "#fff",
//                     "--swiper-pagination-color": "#fff",
//                 }}
//                 loop={true}
//                 spaceBetween={10}
//                 navigation={true}
//                 thumbs={{ swiper: activeThumb }}
//                 modules={[FreeMode, Navigation, Thumbs]}
//                 className="mySwiper2"
//             >
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
//                 </SwiperSlide>
//             </Swiper>
//             <Swiper
//                 onSwiper={setactiveThumb}
//                 loop={true}
//                 spaceBetween={10}
//                 slidesPerView={4}
//                 freeMode={true}
//                 watchSlidesProgress={true}
//                 modules={[FreeMode, Navigation, Thumbs]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// }



// // import React, { useState, useEffect, useRef } from 'react';
// // import Swiper from 'react-id-swiper';
// // import "./HotelInnerBanner.css"

// // const HotelInnerBanner = () => {
// //     const gallerySwiperRef = useRef(null);

// //     const thumbnailSwiperRef = useRef(null);

// //     const gallerySwiperParams = {
// //         spaceBetween: 10,
// //         navigation: {
// //             nextEl: '.swiper-button-next',
// //             prevEl: '.swiper-button-prev',
// //         }
// //     };

// //     const thumbnailSwiperParams = {
// //         spaceBetween: 10,
// //         centeredSlides: true,
// //         slidesPerView: 'auto',
// //         touchRatio: 0.2,
// //         slideToClickedSlide: true
// //     };

// //     useEffect(() => {
// //         const gallerySwiper = gallerySwiperRef.current.swiper;

// //         const thumbnailSwiper = thumbnailSwiperRef.current.swiper;

// //         if (gallerySwiper.controller && thumbnailSwiper.controller
// //         ) {
// //             gallerySwiper.controller.control = thumbnailSwiper;
// //             thumbnailSwiper.controller.control = gallerySwiper;
// //         }
// //     }, []);

    

// //     return (
// //         <div className='mainouterdiv'>
// //             <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
// //                 <div style={{ backgroundImage: 'url(/public/Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp)' }} />
// //                 <div style={{ backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftravel&psig=AOvVaw2TTya6PQBWpPs_lEmNGvbS&ust=1669191888667000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi8kb6uwfsCFQAAAAAdAAAAABAE)' }} />
// //                 <div style={{ backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftravel&psig=AOvVaw2TTya6PQBWpPs_lEmNGvbS&ust=1669191888667000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi8kb6uwfsCFQAAAAAdAAAAABAE)' }} />
// //                 <div style={{ backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftravel&psig=AOvVaw2TTya6PQBWpPs_lEmNGvbS&ust=1669191888667000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi8kb6uwfsCFQAAAAAdAAAAABAE)' }} />
// //                 <div style={{ backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftravel&psig=AOvVaw2TTya6PQBWpPs_lEmNGvbS&ust=1669191888667000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi8kb6uwfsCFQAAAAAdAAAAABAE)' }} />
// //             </Swiper>
// //             <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiperRef}>
// //                 <div style={{ backgroundImage: 'url(/public/Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp)' }} />
// //                 <div style={{ backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftravel&psig=AOvVaw2TTya6PQBWpPs_lEmNGvbS&ust=1669191888667000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi8kb6uwfsCFQAAAAAdAAAAABAE)' }} />
// //                 <div style={{ backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftravel&psig=AOvVaw2TTya6PQBWpPs_lEmNGvbS&ust=1669191888667000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi8kb6uwfsCFQAAAAAdAAAAABAE)' }} />
// //                 <div style={{ backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftravel&psig=AOvVaw2TTya6PQBWpPs_lEmNGvbS&ust=1669191888667000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi8kb6uwfsCFQAAAAAdAAAAABAE)' }} />
// //                 <div style={{ backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ftravel&psig=AOvVaw2TTya6PQBWpPs_lEmNGvbS&ust=1669191888667000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLi8kb6uwfsCFQAAAAAdAAAAABAE)' }} />
// //             </Swiper>
// //         </div>
// //     );
// // };

// // export default HotelInnerBanner;



