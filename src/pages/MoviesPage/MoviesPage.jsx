import { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  useLocation,
  Link,
  useSearchParams,
  Outlet,
} from "react-router-dom";
import { searchMovies } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  // const navigate = useNavigate();
  // const location = useLocation();
  // const goBackRef = useRef(location.state?.from || "/movies");

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const searchResult = await searchMovies(query);
          setMovies(searchResult.results);
        } catch (error) {
          console.error("Error searching movies", error);
        }
      };
      fetchMovies();
    }
  }, [query]);

  const handleSearch = (value) => {
    setSearchParams({ query: value });
  };

  // const handleGoBack = () => {
  //   const backLink = location.state?.from ?? "/";
  //   navigate(backLink);
  // };

  return (
    <div>
      {movies.length >= 0 && (
        // <button onClick={handleGoBack} className={css.goBackButton}>
        //   Go back
        // </button>
        <Link className={css.goBackButton}>Go back to movies</Link>
      )}
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}
