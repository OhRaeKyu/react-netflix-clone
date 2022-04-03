import React from 'react';
import styled from 'styled-components';

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  return (
    <Presentation>
      <ModalWrap>
        <Modal>
          <CloseBtn onClick={() => setModalOpen(false)}>X</CloseBtn>

          <MoviePosterImg
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={`영화 ${title}의 포스터 이미지입니다.`}
          />

          <MovieContent>
            <MovieRelease>
              <span>100% 일치</span>
              {release_date ? release_date : first_air_date}
            </MovieRelease>

            <MovieTitle>{title ? title : name}</MovieTitle>
            <MovieAverage> 평점: {vote_average}</MovieAverage>
            <MovieOverview> {overview}</MovieOverview>
          </MovieContent>
        </Modal>
      </ModalWrap>
      <Background onClick={() => setModalOpen(false)} />
    </Presentation>
  );
}
const Presentation = styled.div`
  z-index: 1200;
  position: absolute;
`;

const ModalWrap = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgb(0 0 0 / 71%);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;

  @media screen and (max-height: 769px) {
    align-items: unset;
    padding-top: 2rem;
    padding: 0;
  }
`;

const Modal = styled.div`
  position: relative;
  max-width: 800px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: #111;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: fadeIn 400ms;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
    visibility: hidden;
  }

  @media screen and (max-height: 768px) {
    overflow-y: scroll !important;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const CloseBtn = styled.span`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  z-index: 1000;
  transition: background 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const MoviePosterImg = styled.img`
  width: 100%;
  height: auto;
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

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
`;
