import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

import axios from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = useDebounce(query.get('q'), 500);

  useEffect(() => {
    searchTerm && fetchSearchMovie(searchTerm);
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    await axios
      .get(`search/movie?include_adult=false&query=${searchTerm}`)
      .then((res) => setSearchResults(res.data.results))
      .catch((err) => console.log(err));
  };

  const MovieComponent = ({ movie }) => {
    if (!!movie.backdrop_path) {
      const movieImageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
      return (
        <li>
          <Link to={`/${movie.id}`}>
            <MoviePosterImg
              src={movieImageUrl}
              alt={`영화 ${movie.title}의 포스터 이미지입니다.`}
            />
          </Link>
        </li>
      );
    } else {
      return <></>;
    }
  };

  return searchResults.length > 0 ? (
    <SearchWrap>
      <ul>
        {searchResults.map((movie) => (
          <MovieComponent movie={movie} key={movie.id} />
        ))}
      </ul>
    </SearchWrap>
  ) : (
    <NoResultWrap>
      <p> 입력하신 검색어 "{searchTerm}"(와)과 일치하는 결과가 없습니다. </p>
    </NoResultWrap>
  );
}

const SearchWrap = styled.section`
  ul {
    padding: 60px;
    padding-bottom: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    text-align: center;
  }
`;

const MoviePosterImg = styled.img`
  cursor: pointer;
  width: 100%;
  border-radius: 0.2vw;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const NoResultWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c5c5c5;
  height: 100vh;
`;
