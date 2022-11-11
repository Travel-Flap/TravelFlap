import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ProductImagesSlider from './Testcomponents/product-images-slider/testSlider';
import { productImages } from './Sliderassets'

export const Test1 = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border:"2px solid red"
    }}>
      <div style={{
        width: '800px',
        height: '700px',
        backgroundColor: '#fff',
        padding: '20px',
        border:"2px solid yellow"
      }}>
        <ProductImagesSlider images={productImages} />
      </div>
    </div>
  );
}


