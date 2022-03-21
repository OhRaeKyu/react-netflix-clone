import { Reset } from 'styled-reset';

import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Reset />
      <Nav />
      <Banner />
    </div>
  );
}

export default App;
