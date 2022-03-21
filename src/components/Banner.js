import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import styled from 'styled-components';

import requests from '../api/requests';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNowPlaying);
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' },
    });
    setMovie(movieDetail);
  };
  return (
    <BannerWrap
      style={{
        backgroundImage: `url(
          'https://image.tmdb.org/t/p/original/${movie.backdrop_path}'
        )`,
      }}
    >
      <div>
        <h2>{movie.title || movie.name || movie.original_name}</h2>
        <div>
          <button type="button">재생</button>
          <button type="button">상세 정보</button>
        </div>
        <h3>{movie.overview}</h3>
      </div>
    </BannerWrap>
  );
}

const BannerWrap = styled.header`
  background-position: cetner top;
  background-size: cover;
`;
