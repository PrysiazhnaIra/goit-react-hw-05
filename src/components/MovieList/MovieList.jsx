import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import { getImageUrl } from "../../api/tmdbApi";

export default function MovieList({ movies }) {
  // const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} className={css.link}>
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              className={css.image}
            />
            <h3 className={css.title}>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
