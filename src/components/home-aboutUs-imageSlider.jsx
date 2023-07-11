import {aboutUsSlides} from  '../aboutus-imageslider'
import { useEffect, useState, useRef } from 'react'
import '../styles/components/aboutUsSlider.scss'



export const AboutUsImageSlider = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const delay = 2500;
    const length = aboutUsSlides.length

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
 <section className="aboutUs-image-slider">
    <section className="aboutUs-image-slide" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {aboutUsSlides.map((image) =>{
         return (
            <div className="slide" key={image.id}>
                <img src={image.image} />
            </div>
        )})}
    </section>
    <section className="slideshowDots">
        {aboutUsSlides.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} 
          onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
    
    </section>
 </section>
  )
}
