import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselImage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleItemClick = (index) => {
    console.log(`Item ${index} clicked`);
  };

  const handleThumbClick = (index) => {
    console.log(`Thumb ${index} clicked`);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', height:"500px" }}>
      <Carousel
   onChange={handleSlideChange}
   onClickItem={handleItemClick}
   onClickThumb={handleThumbClick}
   selectedItem={currentSlide}
      >
        <div>
          <img src="/images/1.jpg" alt="slide 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/images/2.jpg" alt="slide 2" />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselImage;


// import { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';

// function CarouselImage() {
// const [currentSlide, setCurrentSlide] = useState(0);

// const handleSlideChange = (index) => {
// setCurrentSlide(index);
// };

// const handleItemClick = (index) => {
// console.log(`Item ${index} clicked`);
// };

// const handleThumbClick = (index) => {
// console.log(`Thumb ${index} clicked`);
// };

// return (
// <Carousel
//    showArrows={true}
//    onChange={handleSlideChange}
//    onClickItem={handleItemClick}
//    onClickThumb={handleThumbClick}
//    selectedItem={currentSlide}
  
//  >
  
// <div >
// <img src="/images/1.jpg" alt="slide 1"  />
// <p className="legend">Legend 1</p>
// </div>
// <div >
// <img src="/images/2.jpg" alt="slide 2" />
// <p className="legend">Legend 2</p>
// </div>
// </Carousel>
// );
// }

// export default CarouselImage;