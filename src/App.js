import MarqueeComp from "./components/TopLine";
// import  { TopNavbar } from "./components/Navbar/Navbar";
// import { Navbar } from "./components/Navbar/Navbar";
// import { HomePage } from "./components/Experiment Page/Homepage";
// import CollapsibleExample from "./Components/Navbar"
import { ControlledCarousel } from "./components/TopCorousel/Corousel";
import { TravelForm } from "./components/FormBelowCorousel/TravelForm";
import { DataCards } from "./components/Cards/Cards";
// import { ImageTexCards } from "./components/CardWithSIdeText/imageTextcard";
// import { MultiCardSlider } from "./components/MultiCardSlider/MultiCardSlider";
import { Middleslider } from "./components/MiddleCorousel/Middleslider";
import { ContactForm } from "./components/contactform/ContactForm";
import { Footer } from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import { TitleBar } from "./components/TopTitleBar/TitleBar";
import "./App.css";

// import { DataCards  } from "./components/DataCards/DataCards";
import { CardText } from "./components/CardwithText/CardText";
import { TrendingNow } from "./components/TrendingNowCards/TrendingNow";
// import { CardCarousel } from "./components/CardCarousel/CardCarousel";

// import { ProductSlider } from "./components/Slider/ProductSlider";
// import { Imagecarousel } from "./components/ImageCarousel/Imagecar/ousel";
// import { TopPart } from "./components/TopPart/TopPart";

import { BottomBar } from "./components/BottomBar/BottomBar";
import { ImageSlider } from "./components/MultipleCards/MultipleCards";
function App() {
  return (
    <div className="App">
      <TitleBar />
      {/* <TopPart /> */}
      {/* <MarqueeComp /> */}
      {/* <ProductSlider /> */}
      {/* <Imagecarousel /> */}
      <Navbar />

      <ControlledCarousel />
      {/* <TopNavbar /> */}

      <TravelForm />

      {/* <br /> */}
      <DataCards />

      {/* <br /> */}
      <Middleslider />

      {/* <br/> */}
      <CardText />

      <div className="container mt-5 carousel">
        <h1 className="slider_title">What our Clients say about us</h1>
        <ImageSlider />
      </div>

      {/* <br/> */}
      <TrendingNow />

      {/* <br /> */}
      <ContactForm />

      <Footer />

      <BottomBar />
    </div>
  );
}

export default App;
