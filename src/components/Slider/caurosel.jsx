import React, { useRef, useEffect } from 'react';

const Carousel = ({children}) => {
  const gap = 16;
  const carousel = useRef(null);
  const next = useRef(null);
  const prev = useRef(null);

  const checkButtons = (width) => {
    const { scrollLeft, scrollWidth, offsetWidth } = carousel.current;
    prev.current.style.display = scrollLeft ? "flex" : "none";
    next.current.style.display = scrollLeft < scrollWidth - offsetWidth ? "flex" : "none";
  };

  useEffect(() => {
    const handleResize = () => {
      checkButtons(carousel.current.offsetWidth);
    };

    window.addEventListener('resize', handleResize);

    // Call it initially to set the correct button states
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    const width = carousel.current.offsetWidth;
    carousel.current.scrollBy(width + gap, 0);
    checkButtons(width);
  };

  const handlePrev = () => {
    const width = carousel.current.offsetWidth;
    carousel.current.scrollBy(-(width + gap), 0);
    checkButtons(width);
  };

  return (
    <div>
      <div id="carousel" ref={carousel} style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
        {/* Aquí van los elementos de tu carrusel */}
        {children}
      </div>
      <button ref={next} onClick={handleNext} style={{ display: 'none' }}>Next</button>
      <button ref={prev} onClick={handlePrev} style={{ display: 'none' }}>Prev</button>
    </div>
  );
};

export default Carousel;
