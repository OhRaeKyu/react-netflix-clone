import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

import axios from '../../api/axios';
import MovieModal from '../MovieModal';

export default function Row({ title, fetchUrl, isTopRow }) {
  const scrollDiv = useRef(null);
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchMovieData = useCallback(async () => {
    await axios.get(fetchUrl).then((res) => {
      setMovies(isTopRow ? res.data.results.slice(0, 10) : res.data.results);
    });
  }, [fetchUrl, isTopRow]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const scrollLeft = (e) => {
    e.preventDefault();
    scrollDiv.current.scrollLeft -= window.innerWidth - 80;
  };

  const scrollRight = (e) => {
    e.preventDefault();
    scrollDiv.current.scrollLeft += window.innerWidth - 80;
  };

  const handleModal = (movie) => {
    setModalOpen(true);
    setSelectedMovie(movie);
  };

  const renderMovies = movies.map((movie, index) => {
    const imgSrc = `https://image.tmdb.org/t/p/original/${
      isTopRow ? movie.poster_path : movie.backdrop_path
    }`;

    return (
      <li key={movie.id} onClick={() => handleModal(movie)}>
        {isTopRow && <p>{index + 1}</p>}
        <MovieImg
          src={imgSrc}
          alt={`영화 ${movie.title}의 포스터 이미지입니다.`}
          isTopRow={isTopRow}
        />
      </li>
    );
  });

  return (
    movies && (
      <RowWrap isTopRow={isTopRow}>
        <Title>{title}</Title>
        <Container>
          <Item ref={scrollDiv}>{renderMovies}</Item>
          <SliderLeft className="arrow" onClick={scrollLeft}>
            <span>{'<'}</span>
          </SliderLeft>
          <SliderRight className="arrow" onClick={scrollRight}>
            <span>{'>'}</span>
          </SliderRight>
        </Container>
        {modalOpen && (
          <MovieModal {...selectedMovie} setModalOpen={setModalOpen} />
        )}
      </RowWrap>
    )
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
  cursor: pointer;
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

    &:hover img {
      transform: scale(1.3);
    }

    p {
      font-family: 'GmarketSansBold';
      font-size: 160px;
      color: #000;
      text-shadow: 0 0 5px #fff;
      opacity: 0.5;
    }
  }
`;

const MovieImg = styled.img`
  max-height: ${(props) => (props.isTopRow ? '160px' : '125px')};
  object-fit: contain;
  border-radius: 3px;
  transition: all 0.3s;
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
