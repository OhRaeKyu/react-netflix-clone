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
    setMovies(request.data.reults);
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
              alt={`영화 ${movie.name}의 포스터 이미지입니다.`}
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

const RowWrap = styled.div``;

const Container = styled.div``;

const Item = styled.div``;

const MovieImg = styled.img``;

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
  }

  &:hover {
    span {
      border-width: 4px;
    }
  }
`;

const SliderRight = styled(SliderLeft)`
  span {
    transform: rotate(225deg);
  }
`;
