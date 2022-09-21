import './../App.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
// images
import images11 from '../images/carousel/star-wars-11.png';
import images22 from '../images/carousel/star-wars-22.png';
import images33 from '../images/carousel/star-wars-33.png';
import images44 from '../images/carousel/star-wars-44.png';
import images55 from '../images/carousel/star-wars-55.png';
import images66 from '../images/carousel/star-wars-66.png';
import images77 from '../images/carousel/star-wars-77.png';
import images88 from '../images/carousel/star-wars-88.png';
import images991 from '../images/carousel/star-wars-991.png';
import images992 from '../images/carousel/star-wars-992.png';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [{img:images991},{img:images44},{img:images33},{img:images88},{img:images77},{img:images66},{img:images11},{img:images22},{img:images992},{img:images55}]      
    };
  }

  render() {
    const { data } = this.state;
    return (<>
      <h2 className="h2home h2homeneon padding2b">Hello there, welcome you are!</h2>
      <p className="h2home padding2b">This Star Wars project has the intention to learn and evolve my skills in reactjs using other libraries.</p>

      <Carousel variant="dark" className="carouselDiv" key='carousel' interval={2000} controls={true} >
          {data.map((d, key)=>(
              <Carousel.Item>
                  <img 
                    className="d-block w-100"
                    key={d.img.replace(/[^0-9]/g, '')} 
                    src={d.img} 
                    alt={'image' + key}
                  />
              </Carousel.Item>
          ))}
      </Carousel>
    </>)
  }
}

export default HomePage;
