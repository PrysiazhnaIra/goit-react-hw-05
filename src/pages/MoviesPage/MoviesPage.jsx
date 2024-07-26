import { useState } from "react";
import { searchMovies } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";
import { Outlet } from "react-router-dom";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const searchResult = await searchMovies(query);
      setMovies(searchResult.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
      <Outlet />
    </div>
  );
}
