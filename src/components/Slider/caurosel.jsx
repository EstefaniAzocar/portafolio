import React, { useState, useRef, useEffect } from "react";
import "./carousel.css";

const MyCarousel = ({ children }) => {
  const gap = 16;
  const carouselRef = useRef(null);
  const contentRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.offsetWidth);
    const handleResize = () => setWidth(carouselRef.current.offsetWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextClick = () => {
    carouselRef.current.scrollBy({ left: width + gap, behavior: "smooth" });
    if (carouselRef.current.scrollWidth - carouselRef.current.scrollLeft <= width + gap) {
      nextRef.current.style.display = "none";
    }
    prevRef.current.style.display = "flex";
  };
  
  const handlePrevClick = () => {
    carouselRef.current.scrollBy({ left: -(width + gap), behavior: "smooth" });
    if (carouselRef.current.scrollLeft <= width + gap) {
      prevRef.current.style.display = "none";
    }
    nextRef.current.style.display = "flex";
  };
  
  return (
    <div className="Wrapper">
      <div className="Carousel" ref={carouselRef}>
        <div className="Content" ref={contentRef}>
          {children}
        </div>
      </div>
      <button className="Button prev" onClick={handlePrevClick} ref={prevRef}>
        ←
      </button>
      <button className="Button next" onClick={handleNextClick} ref={nextRef}>
        →
      </button>
    </div>
  );
};

export default MyCarousel;
