import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
// images
import images11 from '../assets/images/carousel/star-wars-11.png';
import images22 from '../assets/images/carousel/star-wars-22.png';
import images33 from '../assets/images/carousel/star-wars-33.png';
import images44 from '../assets/images/carousel/star-wars-44.png';
import images55 from '../assets/images/carousel/star-wars-55.png';
import images66 from '../assets/images/carousel/star-wars-66.png';
import images77 from '../assets/images/carousel/star-wars-77.png';
import images88 from '../assets/images/carousel/star-wars-88.png';
import images991 from '../assets/images/carousel/star-wars-991.png';
import images992 from '../assets/images/carousel/star-wars-992.png';

const HomePage = () => {
  const [data] = useState([
    { img: images991 }, { img: images44 }, { img: images33 }, { img: images88 },
    { img: images77 }, { img: images66 }, { img: images11 }, { img: images22 },
    { img: images992 }, { img: images55 }
  ]);

  return (
    <>
      <h2 className="h2home h2homeneon padding2b">Hello there, welcome you are!</h2>
      <p className="h2home padding2b">
        This Star Wars project has the intention to learn and evolve my skills in reactjs using other libraries.
      </p>
      <Carousel variant="dark" className="carouselDiv" interval={2000} controls>
        {data.map((d, index) => (
          <Carousel.Item key={index}>
            <img 
              className="d-block w-100"
              src={d.img} 
              alt={'image' + index}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default HomePage;
