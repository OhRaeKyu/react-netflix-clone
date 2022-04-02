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
    <ModalWrap>
      <Background onClick={() => setModalOpen(false)} />
      <Modal>
        <CloseBtnWrap onClick={() => setModalOpen(false)}>
          <CloseBtn />
          <CloseBtn />
        </CloseBtnWrap>
        <MoviePosterImg
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={`${title}의 포스터 이미지입니다.`}
        />
        <MovieContent>
          <MovieRelease>
            <span></span>
            {release_date ? release_date : first_air_date}
          </MovieRelease>
          <MovieTitle>{title ? title : name}</MovieTitle>
          <MovieAverage> 평점 : {vote_average}</MovieAverage>
          <MovieOverview>{overview}</MovieOverview>
        </MovieContent>
      </Modal>
    </ModalWrap>
  );
}

const ModalWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

const Modal = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  background-color: rgb(20, 20, 20);
  border-radius: 15px;
`;

const CloseBtnWrap = styled.div``;

const CloseBtn = styled.span``;

const MoviePosterImg = styled.img`
  width: 80%;
`;

const MovieContent = styled.div``;

const MovieRelease = styled.p``;

const MovieTitle = styled.h2``;

const MovieAverage = styled.p``;

const MovieOverview = styled.p``;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9990;
`;
