import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from '../api/axios';

export default function Row({ title, id, fetchUrl, isTopRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(
      isTopRow ? request.data.results.slice(0, 10) : request.data.results
    );
  };

  return (
    <RowWrap>
      <h2>{title}</h2>
      <Container>
        <Item id={id}>
          {movies.map((movie) => (
            <MovieImg
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${
                isTopRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={`영화 ${movie.title}의 포스터 이미지입니다.`}
              isTopRow={isTopRow}
            />
          ))}
        </Item>
        <SliderLeft>
          <span></span>
        </SliderLeft>
        <SliderRight>
          <span></span>
        </SliderRight>
      </Container>
    </RowWrap>
  );
}

const RowWrap = styled.section``;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div``;

const MovieImg = styled.img`
  height: ${(props) => (props.isTopRow ? '160px' : '125px')};
`;

const SliderLeft = styled.div`
  width: 20px;
  height: 40px;
  background-color: rgba(20, 20, 20, 0.7);

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    transform: rotate(45deg);
    transition: all 0.3s;
  }

  &:hover {
    span {
      transform: rotate(45deg) scale(1.3);
    }
  }
`;

const SliderRight = styled(SliderLeft)`
  span {
    border-bottom: none;
    border-left: none;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
  }
`;
