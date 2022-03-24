import { Reset } from 'styled-reset';
import styled from 'styled-components';

import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <AppWrap>
      <Reset />
      <Nav />
      <Banner />
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  background-color: rgb(20, 20, 20);
`;
