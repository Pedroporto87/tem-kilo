import { useEffect, useState, useRef } from 'react'
import '../styles/components/buffet-image-slider.scss'

export const BuffetImageSlider = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const imageSlider = [
        {id:1, image:'../../buffet-slider/freguesia-1.jpg' },
        {id:2, image: '../../buffet-slider/freguesia-4.jpg' },
        {id:3, image: '../../buffet-slider/tk-13.jpg'},
        {id:4, image: '../../buffet-slider/tk-5.jpg'}
    ]
    const delay = 2500;
    const length = imageSlider.length

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current =setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {resetTimeout();};
      }, [index]);

  return (
 <section className="buffet-image-slider">
    <section className="buffet-image-slide" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {imageSlider.map((image) =>{
         return (
            <div className="slide" key={image.id}>
                <img src={image.image} />
            </div>
        )})}
    </section>
    <section className="slideshowDots">
        {imageSlider.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} 
          onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
    
    </section>
 </section>
  )
}
