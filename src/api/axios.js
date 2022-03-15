import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '94e21d1b1ce58a830c0dfef8eea66f2c',
    language: 'ko-KR',
  },
});

export default instance;
