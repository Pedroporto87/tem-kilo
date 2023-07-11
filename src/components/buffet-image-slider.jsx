import { useEffect, useState, useRef } from 'react'
import '../styles/components/buffet-image-slider.scss'
import { buffetImageSlider } from '../buffet-imageSlder';


export const BuffetImageSlider = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const delay = 2500;
    const length = buffetImageSlider.length

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
        {buffetImageSlider.map((image) =>{
         return (
            <div className="slide" key={image.id}>
                <img src={image.image} />
            </div>
        )})}
    </section>
    <section className="slideshowDots">
        {buffetImageSlider.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} 
          onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
    
    </section>
 </section>
  )
}
