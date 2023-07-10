import React, { useState, useEffect } from 'react';
import './Carousel.css'
import graf1 from './pics/graf1.jpeg'
import graf2 from './pics/graf2.jpeg'
import graf3 from './pics/graf3.jpeg'
import graf4 from './pics/graf4.jpeg'
import graf5 from './pics/graf5.jpeg'

const images = [
    graf1,
    graf2,
    graf3,
    graf4,
    graf5
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt="Slideshow" className="image"/>
    </div>
  );
}

export default Carousel;