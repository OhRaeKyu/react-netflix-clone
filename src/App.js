import './App.css';
import { Reset } from 'styled-reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:movieId" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
