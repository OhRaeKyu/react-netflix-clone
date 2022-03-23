import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from '../api/axios';
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
      <MovieWrap>
        <h2>{movie.title || movie.name || movie.original_name}</h2>
        <h3>{movie.overview}</h3>
        <BtnWrap>
          <button type="button" className="btn-play">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Hawkins-Icon Hawkins-Icon-Standard"
            >
              <path
                d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>재생</span>
          </button>
          <button type="button" className="btn-info">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Hawkins-Icon Hawkins-Icon-Standard"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>상세 정보</span>
          </button>
        </BtnWrap>
      </MovieWrap>
      <FadeBottom />
    </BannerWrap>
  );
}

const BannerWrap = styled.header`
  background-position: top center;
  background-size: cover;
  color: #fff;
  object-fit: contain;
  height: 448px;

  @media screen and (min-width: 1500px) {
    position: relative;
    height: 600px;
  }
`;

const MovieWrap = styled.div`
  margin-left: 40px;
  padding-top: 140px;
  height: 190px;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.5rem;
  }

  h3 {
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-weight: 500;
    font-size: 1rem;
    max-width: 400px;
    margin-bottom: 20px;

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media screen and (max-width: 768px) {
    width: min-content !important;
    padding-left: 2.3rem;
    margin-left: 0px !important;

    h3 {
      font-size: 0.8rem !important;
      width: quto !important;
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;

  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 5px;
    padding: 0.4rem 1rem;
    margin-right: 1rem;

    &:hover {
      color: #000;
      background-color: rgba(170, 170, 170, 0.9);
      transition: all 0.2s;
    }

    svg + span {
      margin-left: 10px;
    }
  }

  .btn-play {
    background-color: white;
    color: black;
  }

  .btn-info {
    background-color: rgba(109, 109, 110, 0.7);
    color: white;

    &:hover {
      background-color: rgb(74, 74, 74);
      color: white;
    }
  }

  @media screen and (max-width: 768px) {
    .btn-info {
      text-align: start;
      padding-right: 1.2rem;
    }
  }
`;

const FadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );

  @media screen and (min-width: 1500px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20rem;
  }
`;
