import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {
    render() {
      const carouselInterval = 5000; 
        return (
            <Carousel>
  <Carousel.Item interval={carouselInterval}>
    <img
      className="d-block w-100"
      src="images/sliders/first.png"
      alt="First slide"
    />
    <Carousel.Caption >
      <h3 style={{color:"black"}} >بدك مكان على ذوقك؟</h3>
      <p style={{color:"black"}} >اختار مطعم من اللي عارضيلنك اياهن واختار كل شي على ذوقك وبسرعة! عنا كل التفاصيل لالك</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={carouselInterval}>
    <img
      className="d-block w-100"
      src="images/sliders/second.png"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3 style={{color:"black"}} >بدك مكان على ذوقك؟</h3>
      <p style={{color:"black"}} >اختار مطعم من اللي عارضيلنك اياهن واختار كل شي على ذوقك وبسرعة! عنا كل التفاصيل لالك</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={carouselInterval}>
    <img
      className="d-block w-100"
      src="images/sliders/third.png"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3 style={{color:"black"}} >بدك مكان على ذوقك؟</h3>
      <p style={{color:"black"}} >اختار مطعم من اللي عارضيلنك اياهن واختار كل شي على ذوقك وبسرعة! عنا كل التفاصيل لالك</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={carouselInterval}>
    <img
      className="d-block w-100"
      src="images/sliders/fourth.png"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3 style={{color:"black"}} >بدك مكان على ذوقك؟</h3>
      <p style={{color:"black"}} >اختار مطعم من اللي عارضيلنك اياهن واختار كل شي على ذوقك وبسرعة! عنا كل التفاصيل لالك</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    };
}

export default BootstrapCarouselComponent;