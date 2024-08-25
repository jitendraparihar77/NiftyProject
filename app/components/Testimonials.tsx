"use client"; // Mark this component as a Client Component

import { useRef } from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Client Testimonials
        </h2>
        <div className="scroll-wrapper">
          <div className="scroll-container" ref={scrollRef}>
            {/* Testimonials block */}
            <div className="scroll-item">
              <Testimonial
                name="Bhavyaa Narotambhai"
                feedback="Superb app! You guys are great. Everything's at my fingertips now."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Rajkumari Sahani"
                feedback="The website and app are incredibly intuitive and easy to navigate."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Anjan Banerjee"
                feedback="This is the app I've been looking for a long time. I couldn't find it anywhere else."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Anjan Banerjee"
                feedback="This is the app I've been looking for a long time. I couldn't find it anywhere else."
              />
            </div>
            {/* Duplicate testimonials to ensure seamless loop */}
            <div className="scroll-item">
              <Testimonial
                name="Bhavyaa Narotambhai"
                feedback="Superb app! You guys are great. Everything's at my fingertips now."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Anjan Banerjee"
                feedback="This is the app I've been looking for a long time. I couldn't find it anywhere else."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Rajkumari Sahani"
                feedback="The website and app are incredibly intuitive and easy to navigate."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Anjan Banerjee"
                feedback="This is the app I've been looking for a long time. I couldn't find it anywhere else."
              />
            </div>
          </div>
        </div>

        <div className="scroll-wrapper mt-5">
          <div className="scroll-container" ref={scrollRef}>
            {/* Testimonials block */}
            <div className="scroll-item">
              <Testimonial
                name="Bhavyaa Narotambhai"
                feedback="Superb app! You guys are great. Everything's at my fingertips now."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Rajkumari Sahani"
                feedback="The website and app are incredibly intuitive and easy to navigate."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Anjan Banerjee"
                feedback="This is the app I've been looking for a long time. I couldn't find it anywhere else."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Anjan Banerjee"
                feedback="This is the app I've been looking for a long time. I couldn't find it anywhere else."
              />
            </div>
            {/* Duplicate testimonials to ensure seamless loop */}
            <div className="scroll-item">
              <Testimonial
                name="Bhavyaa Narotambhai"
                feedback="Superb app! You guys are great. Everything's at my fingertips now."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Anjan Banerjee"
                feedback="This is the app I've been looking for a long time. I couldn't find it anywhere else."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Rajkumari Sahani"
                feedback="The website and app are incredibly intuitive and easy to navigate."
              />
            </div>
            <div className="scroll-item">
              <Testimonial
                name="Anjan Banerjee"
                feedback="This is the app I've been looking for a long time. I couldn't find it anywhere else."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
