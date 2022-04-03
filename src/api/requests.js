const today = new Date();
const year = today.getFullYear();
const lastMonth = ('0' + (today.getMonth() - 1)).slice(-2);

const requests = {
  fetchNowPlaying: 'movie/now_playing',
  fetchNetflixOriginals: '/discover/tv?with_networks=213',
  fetchTrending: '/trending/all/week',
  fetchTopRated: `/movie/top_rated?primary_release_date.gte=${year}-${lastMonth}`,
  fetchActionMovies: '/discover/movie?with_genres=28',
  fetchComedyMovies: '/discover/movie?with_genres=35',
  fetchHorrorMovies: '/discover/movie?with_genres=27',
  fetchRomanceMovies: '/discover/movie?with_genres=10749',
};

export default requests;
