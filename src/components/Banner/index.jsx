import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from '../../api/axios';
import requests from '../../api/requests';
import BannerSkeleton from './BannerSkeleton';

export default function Banner() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState('');
  const [playClicked, setPlayClicked] = useState(false);

  const fetchData = async () => {
    let movieId = 0;

    await axios
      .get(requests.fetchNowPlaying)
      .then((res) => {
        movieId =
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
            .id;
      })
      .catch((err) => console.log(err));

    await axios
      .get(`movie/${movieId}`, {
        params: { append_to_response: 'videos' },
      })
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
        if (res.data.videos.results.length > 0) {
          setVideo(res.data.videos.results[0].key);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!playClicked) {
    if (!!loading) {
      return <BannerSkeleton />;
    } else {
      return (
        <BannerWrap>
          <div>
            <MovieImg
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={`영화 ${movie.title}의 포스터 이미지입니다.`}
            />
            <BackImg />
          </div>
          <MovieInfo>
            <h2>{movie.title || movie.name || movie.original_name}</h2>
            <h3>{movie.overview}</h3>
            <BtnWrap>
              <button
                type="button"
                className="btn-play"
                onClick={() => setPlayClicked(true)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>상세 정보</span>
              </button>
            </BtnWrap>
          </MovieInfo>
        </BannerWrap>
      );
    }
  } else {
    return (
      <PlayWrap>
        {!!video ? (
          <Iframe
            src={`https://www.youtube.com/embed/${video}?controls=1&autoplay=1&loop=1&mute=1&playlist=${video}`}
            title="Youtube video player"
          />
        ) : (
          <p>예고편 영상이 존재하지 않습니다.</p>
        )}
      </PlayWrap>
    );
  }
}

const BannerWrap = styled.header`
  position: relative;
`;

const MovieImg = styled.img`
  display: block;
  width: 100%;
`;

const BackImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const MovieInfo = styled.div`
  position: absolute;
  bottom: 20%;
  left: 0;
  margin-left: 40px;
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
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media screen and (max-width: 768px) {
    width: min-content !important;
    padding-left: 2.3rem;
    margin-left: 0px !important;

    h3 {
      font-size: 0.8rem !important;
      width: auto !important;
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
    color: #fff;

    &:hover {
      background-color: rgba(170, 170, 170, 0.9);
      transition: all 0.2s;
    }

    svg + span {
      margin-left: 10px;
    }
  }

  .btn-play {
    background-color: white;
    color: #000;
  }

  .btn-info {
    background-color: rgba(109, 109, 110, 0.7);

    &:hover {
      background-color: rgb(74, 74, 74);
    }
  }

  @media screen and (max-width: 768px) {
    .btn-info {
      text-align: start;
      padding-right: 1.2rem;
    }
  }
`;

const PlayWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
