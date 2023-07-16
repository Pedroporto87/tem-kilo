import { useState, useEffect, useRef } from 'react'
import '../styles/components/imageslider.scss';
import PropTypes from 'prop-types';

    export const ImageSlider = ({ slider }) => {
      const [index, setIndex] = useState(0);
      const timeoutRef = useRef(null);

      const delay = 2500;
      const length = slider.length
  
      function resetTimeout() {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
  
        useEffect(() => {
          resetTimeout();
          timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
          }, delay);
      
          return () => {
            resetTimeout();
          };
        }, [index, length]);

    return (
   <section className="image-slider">
      <section className="image-slide" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {slider.map((image) =>{
           return (
              <div className="slide" key={image.id}>
                  <img src={image.image} alt=''/>
              </div>
          )})}
      </section>
      <section className="slideshowDots">
          {slider.map((_, idx) => (
            <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} 
            onClick={() => {
              setIndex(idx);
            }}></div>
          ))}
      
      </section>
   </section>
    )

  }
  ImageSlider.propTypes = {
    slider: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  