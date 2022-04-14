<div align="center">
  <h1>Netflix Clone</h1>
</div>

![시작페이지](https://user-images.githubusercontent.com/58412914/163308959-cee624aa-8b35-4938-a267-a5e8e1fcd9cb.png)

- Page : http://react-netflix-clone.s3-website.ap-northeast-2.amazonaws.com/

## 개요

- 넷플릭스 홈 화면을 클론 코딩한 것입니다.
- React의 Hooks 사용 및 API로부터 받아온 데이터를 사용하는 것을 깊이 있게 학습하기 위한 목적으로 개발하였습니다.

## 목표

TheMovieDB API에서 받아온 영화 정보를 활용하여 컴포넌트를 구성하였으며
필요에 따라 Custom Hooks를 구현하고 API 서버와 통신하는 코드에서 axios.create를 통해 params를 상수화하는 등 개발 효율을 높일 수 있는 노하우를 쌓는 것이 목표입니다.

## 기능

- TOP 10 콘텐츠, 지금 뜨는 콘텐츠, 장르별 콘텐츠 등 다양한 영화의 정보를 제공합니다. (영화 포스터 이미지, 제목, 개요, 평점 등)
- 영화 제목을 통해 검색이 가능합니다.

## 개발 환경

### 기술 스택

- FE : React / JavaScript / Styled-component
- BE : TheMovieDB API 활용 (https://www.themoviedb.org/?language=ko)

### 개발 일정

- 2022년 03월 14일 - 프로젝트 기획
- 2022년 03월 15일 ~ 04월 05일 - UI 및 기능 구현
- 2022년 04월 05일 ~ 04월 14일 - 리팩토링

## 주요 코드

### 커스텀 Hooks (src/hooks/useDebounce.js)

```js
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
```

- 영화 검색 시 키보드의 onChange를 통해 검색어를 state에 저장하여 검색 결과를 보여주는 과정에서 변화마다 API 데이터를 불러와 쓸데없는 요청과 원하지 않는 결과를 함께 불러오는 문제가 발생하였습니다.
- 특정 시간만큼 delay 후 API 데이터를 불러오는 useDebounce 커스텀 hooks를 구현하여 해결하였습니다.

### API 설정 (src/api/axios.js, src/api/requests.js)

```js
// axios create를 통해 params를 상수화
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0000',
    language: 'ko-KR',
  },
});
```

```js
export const requests = {
  fetchNowPlaying: 'movie/now_playing',
  fetchNetflixOriginals: '/discover/tv?with_networks=213',
  fetchTrending: '/trending/all/week',
  fetchTopRated: `/movie/top_rated?primary_release_date.gte=${year}-${lastMonth}`,
  fetchActionMovies: '/discover/movie?with_genres=28',
  fetchComedyMovies: '/discover/movie?with_genres=35',
  fetchHorrorMovies: '/discover/movie?with_genres=27',
  fetchRomanceMovies: '/discover/movie?with_genres=10749',
};
```

- API와 통신하는 과정에서 필요한 params(URL, params 등)을 미리 상수화 시켜 개발 시 편의성을 높였습니다.

<br/>

## 폴더 트리

```
📂 react-netflix-clone
├─ .gitignore
├── package-lock.json
├── package.json
├── 📂 public
│   ├── 📂 images
│   │   ├── profile.png
│   │   └── search.png
│   └── index.html
└── 📂 src
    ├── App.css
    ├── App.js
    ├── 📂 Layout
    │   ├── Footer.jsx
    │   ├── Nav.jsx
    │   └── index.jsx
    ├── 📂 api
    │   ├── axios.js
    │   └── requests.js
    ├── 📂 components
    │   ├── Banner.jsx
    │   ├── 📂 MovieModal
    │   │   └── index.jsx
    │   └── Row.jsx
    ├── 📂 hooks
    │   └── useDebounce.js
    ├── index.js
    └── 📂 pages
        ├── 📂 DetailPage
        │   └── index.jsx
        ├── 📂 MainPage
        │   └── index.jsx
        └── 📂 SearchPage
            └── index.jsx
```
