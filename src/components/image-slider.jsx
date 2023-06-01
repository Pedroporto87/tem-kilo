import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/components/imageslider.scss'


export default function ImageSlider() {
   const [current, setCurrent] = useState(0)
  

    const japaSlides = [
        {id: 1, image: '../../public/slider/tk-2.jpg'},
        {id: 2, image: '../../public/slider//tk-17-2.jpg'},
        {id: 3, image: '../../public/slider/tk-3.jpg'},
        {id: 4, image: '../../public/slider/tk-23.jpg'},
    ]

    const nextSlide = () => {
      setCurrent(current === japaSlides.length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? japaSlides.length - 1 : current - 1);
    };

    if (!Array.isArray(japaSlides) || japaSlides.length <= 0) {
      return null;
    }

  return (
  <section className='imageslider'>
    <FaChevronLeft className='button-left' onClick={prevSlide}/>
    <FaChevronRight className='button-right' onClick={nextSlide} />
        {japaSlides.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={slide.id}>
              {index === current && (
              <img src={slide.image} className='image' />
            )}
            </div>
        )})}
    </section>
  )
}
