import axios from "axios";

// const API_KEY = "acbd01b79df1e8f8f6e232ccb0775eac";
const BASE_URL = "https://api.themoviedb.org/3";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
const IMAGE_SIZE = "w500";

// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2JkMDFiNzlkZjFlOGY4ZjZlMjMyY2NiMDc3NWVhYyIsIm5iZiI6MTcyMTk4MjgwMS42NjU0MzEsInN1YiI6IjY2YTM0YzE2ZmE0NTRjOWY2MTE2NDZmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0u6uZlYvtF6VaTxxkX_zUMNUduwCYu2L6sXKkWFnFU8",
  },
});

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const fetchTrendingMovies = async () => {
  try {
    const response = await api.get("/trending/movie/day");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get("/search/movie", {
      params: { query, include_adult: false, language: "en-US", page: 1 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};

export function getImageUrl(path) {
  return `${BASE_IMAGE_URL}${IMAGE_SIZE}${path}`;
}
