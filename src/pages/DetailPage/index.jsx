import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import axios from '../../api/axios';

export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`/movie/${movieId}`);
    setMovie(response.data);
  };

  return movie ? (
    <MovieWrap>
      <MoviePosterImg
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={`영화 ${movie.title}의 포스터 이미지입니다.`}
      />
      <MovieContent>
        <MovieRelease>
          <span>100% 일치 </span>
          {movie.release_date ? movie.release_date : movie.first_air_date}
        </MovieRelease>

        <MovieTitle>{movie.title ? movie.title : movie.name}</MovieTitle>
        <MovieAverage> 평점: {movie.vote_average}</MovieAverage>
        <MovieOverview> {movie.overview}</MovieOverview>
      </MovieContent>
    </MovieWrap>
  ) : (
    <div>...loading</div>
  );
}

const MovieWrap = styled.section`
  padding: 60px;
  padding-bottom: 0;
`;

const MoviePosterImg = styled.img`
  width: 100%;
`;

const MovieContent = styled.div`
  padding: 40px;
  color: white;
`;

const MovieRelease = styled.p`
  font-weight: 600;
  font-size: 18px;
  span {
    color: #46d369;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const MovieTitle = styled.h2`
  padding: 0;
  font-size: 40px;
  margin: 16px 0;
`;

const MovieAverage = styled.p`
  font-size: 20px;
  line-height: 1.5;
`;

const MovieOverview = styled.p`
  font-size: 20px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
