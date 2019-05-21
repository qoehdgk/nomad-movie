import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a5cad6962a2b7a60f7cb80523d69a343",
    language: "ko-KR"
  }
});

export const moviesApi = {
  getNowPlaying: () => api.get("movie/now_playing"),
  getUpComing: () => api.get("/movie/upcoming"),
  getPopular: () => api.get("/movie/popular"),
  getMovie: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  searchMovies: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  getTopRated: () => api.get("tv/top_rated"),
  getPopular: () => api.get("/tv/popular"),
  getAiringToday: () => api.get("/tv/airing_today"),
  getShow: id =>
    api.get(`tv/${tv_id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  searchTV: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
