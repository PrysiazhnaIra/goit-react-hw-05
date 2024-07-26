import { useEffect, useState } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { getMovieDetails } from "../../api/tmdbApi";
import { getImageUrl } from "../../api/tmdbApi";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId);

        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMoviesDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
          <p>{movie.overview}</p>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
      )}
    </div>
  );
}
