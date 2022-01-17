import React, { useState } from 'react';
import Carousel from './Carousel';
import styled from 'styled-components';
import { CarouselData } from './CarouselData';

function Main() {
  const length = CarouselData.length;
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState();
  // const [swipe, setSwipe] = useState();

  // const imgSec = useRef();
  // useEffect(() => {
  //   imgSec.current.addEventListener('mousedown', (e) => {
  //     e.preventDefault();
  //     setSwipe(e['screenX']);
  //   });

  //   imgSec.current.addEventListener('mouseup', (e) => {
  //     e.preventDefault();
  //     if (swipe - e['screenX'] > 0) {
  //       setCount(count === length - 5 ? -(length - 5) : count + 1);
  //       setDirection('next');
  //     } else {
  //       setCount(count === -(length - 5) ? length - 5 : count - 1);
  //       setDirection('prev');
  //     }
  //   });
  // });

  const prevSlide = (e) => {
    e.preventDefault();
    setCount(count === -(length - 5) ? length - 5 : count - 1);
    setDirection('prev');
  };

  const nextSlide = (e) => {
    e.preventDefault();
    setCount(count === length - 5 ? -(length - 5) : count + 1);
    setDirection('next');
  };

  return (
    <div className="carousel">
      <Carousel
        count={count}
        setCount={setCount}
        direction={direction}
        setDirection={setDirection}
      />
      <SlidePrevBtn onClick={prevSlide} className="btn-slide">
        <svg viewBox="0 0 18 18" className="btn-arrow">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </SlidePrevBtn>
      <SlideNextBtn onClick={nextSlide} className="btn-slide">
        <svg viewBox="0 0 18 18" className="btn-arrow">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </SlideNextBtn>
    </div>
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

export default Main;
