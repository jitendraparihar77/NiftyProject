"use client";

import React, { useEffect, useState } from 'react';

const images = ["/image1.png", "/image2.png", "/image3.png", "/image4.png", "/image5.png"]; // List of images

const ImageScroller: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image
    }, 3000); // Change image every 3000ms (3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-[543px] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />
    </div>
  );
};

export default ImageScroller;
