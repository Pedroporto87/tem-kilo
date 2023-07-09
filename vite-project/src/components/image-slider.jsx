import { useState, useEffect, useRef } from 'react'
import '../styles/components/imageslider.scss'

    export const ImageSlider = () => {
      const [index, setIndex] = useState(0);
      const timeoutRef = useRef(null);


   const japaSlides = [
        {id: 1, image: '../../slider/tk-2.jpg'},
        {id: 2, image: '../../slider//tk-17-2.jpg'},
        {id: 3, image: '../../slider/tk-3.jpg'},
        {id: 4, image: '../../slider/tk-23.jpg'},
    ]

  
      const delay = 2500;
      const length = japaSlides.length
  
      function resetTimeout() {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
  
      useEffect(() => {
          resetTimeout()
          timeoutRef.current = setTimeout(
            () =>
              setIndex((prevIndex) =>
                prevIndex === length - 1 ? 0 : prevIndex + 1
              ),
            delay
          ),[index];
      
          return () => {resetTimeout();};
        }, );
  
    return (
   <section className="buffet-image-slider">
      <section className="buffet-image-slide" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {japaSlides.map((image) =>{
           return (
              <div className="slide" key={image.id}>
                  <img src={image.image} />
              </div>
          )})}
      </section>
      <section className="slideshowDots">
          {japaSlides.map((_, idx) => (
            <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} 
            onClick={() => {
              setIndex(idx);
            }}></div>
          ))}
      
      </section>
   </section>
    )
  }
  