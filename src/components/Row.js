import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import axios from '../api/axios';

export default function Row({ title, id, fetchUrl, isTopRow }) {
  const [movies, setMovies] = useState([]);
  const scrollDiv = useRef(null);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(
      isTopRow ? request.data.results.slice(0, 10) : request.data.results
    );
  };

  const scrollLeft = () => {
    document.getElementById(id).scrollLeft -= window.innerWidth - 80;
  };

  const scrollRight = () => {
    document.getElementById(id).scrollLeft += window.innerWidth - 80;
  };

  return (
    <RowWrap>
      <Title>{title}</Title>
      <Container ref={scrollDiv}>
        <Item id={id}>
          {movies.map((movie, index) => (
            <li>
              {isTopRow ? <p>{index + 1}</p> : <></>}
              <MovieImg
                key={movie.id}
                src={`https://image.tmdb.org/t/p/original/${
                  isTopRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={`영화 ${movie.title}의 포스터 이미지입니다.`}
                isTopRow={isTopRow}
              />
            </li>
          ))}
        </Item>
        <SliderLeft className="arrow" onClick={scrollLeft}>
          <span>{'<'}</span>
        </SliderLeft>
        <SliderRight className="arrow" onClick={scrollRight}>
          <span>{'>'}</span>
        </SliderRight>
      </Container>
    </RowWrap>
  );
}

const RowWrap = styled.section`
  margin-top: 20px;

  &:hover .arrow {
    background-color: rgba(20, 20, 20, 0.7);
    transition: background-color 0.5s;
  }

  &:hover .arrow span {
    display: inline-block;
  }
`;

const Title = styled.h2`
  margin-left: 40px;
`;

const Container = styled.div`
  position: relative;
`;

const Item = styled.ul`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 40px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  li + li {
    margin-left: 5px;
  }

  li {
    display: flex;
    align-items: center;

    p {
      font-family: 'GmarketSansBold';
      font-size: 160px;
      color: #000;
      text-shadow: 0 0 2px #fff;
      opacity: 0.5;
    }
  }
`;

const MovieImg = styled.img`
  max-height: ${(props) => (props.isTopRow ? '160px' : '125px')};
  object-fit: contain;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.3);
  }
`;

const SliderRight = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: none;
    transition: transform 0.3s;
    font-size: 1.5rem;
  }

  &:hover {
    span {
      transform: scale(1.3);
    }
  }
`;

const SliderLeft = styled(SliderRight)`
  left: 0;
`;
