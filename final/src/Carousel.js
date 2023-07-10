import React, { useState, useEffect } from 'react';
import './Carousel.css'
import image1 from './pics/0-1.jpeg'
import image2 from './pics/0-1 (1).jpeg'
import image3 from './pics/0-1 (2).jpeg'

const images = [
    image1,
    image2,
    image3,
  // Add more image URLs here
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