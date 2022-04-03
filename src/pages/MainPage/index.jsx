import React from 'react';

import requests from '../../api/requests';

import Banner from '../../components/Banner';
import Row from '../../components/Row';

export default function MainPage() {
  return (
    <>
      <Banner />
      <Row title="TOP 10 콘텐츠" fetchUrl={requests.fetchTopRated} isTopRow />
      <Row title="지금 뜨는 콘텐츠" fetchUrl={requests.fetchTrending} />
      <Row title="넷플릭스 시리즈" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="코미디 시리즈" fetchUrl={requests.fetchComedyMovies} />
      <Row title="액션 시리즈" fetchUrl={requests.fetchActionMovies} />
      <Row title="로맨스 시리즈" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="호러 시리즈" fetchUrl={requests.fetchHorrorMovies} />
    </>
  );
}
