import React from 'react'
import cl from './VideoSection.module.css'
import Carousel from 'react-bootstrap/Carousel';


const VideoSection = () => {
  return (
    <div>
        <Carousel
          indicators={false}
          controls={false}
          // prevIcon={
          //   <button className={cl.carouselControlPrev} type="button" data-bs-target="#textCarousel"  data-bs-slide="prev">
          //     <img src="images/back.svg" alt=""/>
          //   </button>
          // }
          // nextIcon={
          //   <button className={cl.carouselControlNext} type="button" data-bs-target="#textCarousel"  data-bs-slide="next">
          //     <img src="images/forward.svg" alt=""/>
          //   </button>
          // }
        >
            <Carousel.Item>
              <p className={cl.title}>Начни свой день с хорошего настроения! </p>
            </Carousel.Item>
            <Carousel.Item>
              <p className={cl.title}>Отличные идеи рождаются за чашечкой лучшего кофе</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className={cl.title}>У нас ты сможешь выбрать подходящее кофе для себя  </p>
            </Carousel.Item>

            {/* <button className={cl.carouselControlPrev} type="button" data-bs-target="#textCarousel"  data-bs-slide="prev">
              <img src="images/back.svg" alt=""/>
              <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className={cl.carouselControlNext} type="button" data-bs-target="#textCarousel"  data-bs-slide="next">
              <img src="images/forward.svg" alt=""/>
              <span className="visually-hidden">Следующий</span>
            </button> */}
        </Carousel>
    </div>
  )
}

export default VideoSection