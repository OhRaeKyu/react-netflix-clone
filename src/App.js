import { Reset } from 'styled-reset';
import styled from 'styled-components';

import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './api/requests';

function App() {
  return (
    <AppWrap>
      <Reset />
      <Nav />
      <Banner />
      <Row
        title="TOP 10 콘텐츠"
        id="TR"
        fetchUrl={requests.fetchTopRated}
        isTopRow
      />
      <Row title="지금 뜨는 콘텐츠" id="TN" fetchUrl={requests.fetchTrending} />
      <Row
        title="넷플릭스 시리즈"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title="코미디 시리즈"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row title="액션 시리즈" id="AM" fetchUrl={requests.fetchActionMovies} />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  background-color: rgb(20, 20, 20);
  font-family: 'GmarketSansMedium';
  color: #fff;
`;
