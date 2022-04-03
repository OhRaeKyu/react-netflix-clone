import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import requests from './api/requests';

import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail/:movieId" element={<DetailPage />} />
      </Routes>
      <Nav />
      <Banner />
      <RowContainer>
        <Row title="TOP 10 콘텐츠" fetchUrl={requests.fetchTopRated} isTopRow />
        <Row title="지금 뜨는 콘텐츠" fetchUrl={requests.fetchTrending} />
        <Row
          title="넷플릭스 시리즈"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="코미디 시리즈" fetchUrl={requests.fetchComedyMovies} />
        <Row title="액션 시리즈" fetchUrl={requests.fetchActionMovies} />
        <Row title="로맨스 시리즈" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="호러 시리즈" fetchUrl={requests.fetchHorrorMovies} />
      </RowContainer>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
