import React, { useRef, useState } from 'react';
import { CarouselData } from './CarouselData';
import styled from 'styled-components';

function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = CarouselData.length;

  const carouselRef = useRef();

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const SlideImgList = () => {
    const styles = { display: 'flex', justifyContent: 'center' };
    const preImg = current === 0 ? length - 1 : current - 1;
    const nextImg = current === length - 1 ? 0 : current + 1;

    return (
      <div style={styles} ref={carouselRef}>
        <img
          src={CarouselData[preImg].image}
          alt={CarouselData[preImg].title}
          className="img-carousel"
        />
        <img
          src={CarouselData[current].image}
          alt={CarouselData[current].title}
          className="img-carousel on"
        />
        <img
          src={CarouselData[nextImg].image}
          alt={CarouselData[nextImg].title}
          className="img-carousel"
        />
      </div>
    );
  };

  return (
    <section className="carousel">
      <SlideImgList />
      <SlidePrevBtn onClick={prevSlide}>
        <svg viewBox="0 0 18 18" className="btn-slide">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </SlidePrevBtn>
      <SlideNextBtn onClick={nextSlide}>
        <svg viewBox="0 0 18 18" className="btn-slide">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </SlideNextBtn>
    </section>
  );
}

const SlidePrevBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: calc((100% - 1210px) / 2);
  width: 30px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const SlideNextBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: calc((100% - 1210px) / 2);
  width: 30px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

export default Carousel;
