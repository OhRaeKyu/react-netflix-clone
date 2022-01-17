import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CarouselData } from './CarouselData';

function Carousel(props) {
  const carouselRef = useRef();
  const length = CarouselData.length;
  let move = -(props.count * 1084);

  useEffect(() => {
    if (props.count === -(length - 5) && props.direction === 'next') {
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(5420px)`;
      setTimeout(() => {
        carouselRef.current.style.transition = 'all 0.5s';
        carouselRef.current.style.transform = `translateX(${move}px)`;
      }, 10);
    } else if (props.count === length - 5 && props.direction === 'prev') {
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-5420px)`;
      setTimeout(() => {
        carouselRef.current.style.transition = 'all 0.5s';
        carouselRef.current.style.transform = `translateX(${move}px)`;
      }, 10);
    } else {
      carouselRef.current.style.transition = 'all 0.5s';
      carouselRef.current.style.transform = `translateX(${move}px)`;
    }
  });

  return (
    <CarouselImgList ref={carouselRef}>
      <img
        src={CarouselData[length - 2].image}
        alt={CarouselData[length - 2].title}
        className="img-temp"
      />
      <img
        src={CarouselData[length - 1].image}
        alt={CarouselData[length - 1].title}
        className="img-temp"
      />
      {CarouselData.map((ele, index) => {
        return (
          <div key={index} style={{ position: 'relative' }}>
            <div className="wrap-carousel">
              <img
                src={ele.image}
                alt={ele.title}
                className={
                  index === props.count + 4 ? 'img-carousel on' : 'img-carousel'
                }
              />
            </div>
            <CarouselContent
              className={
                index === props.count + 4 ? 'cont-carousel on' : 'cont-carousel'
              }
            >
              <div className="lst-title" key={index}>
                <h2 className="tit-carousel">{ele.title}</h2>
                <h3 className="subtit-carousel">{ele.subtitle}</h3>
              </div>
              <a href="#" className="link-carousel">
                바로가기 &gt;
              </a>
            </CarouselContent>
          </div>
        );
      })}
      <img
        src={CarouselData[0].image}
        alt={CarouselData[0].title}
        className="img-temp"
      />
      <img
        src={CarouselData[1].image}
        alt={CarouselData[1].title}
        className="img-temp"
      />
    </CarouselImgList>
  );
}

const CarouselImgList = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const CarouselContent = styled.div`
  position: absolute;
  bottom: 28px;
  left: 34px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
`;

export default Carousel;
