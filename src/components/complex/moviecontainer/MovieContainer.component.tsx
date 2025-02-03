import "./MovieContainer.style.scss";
import Movie from "../../../models/Movie.ts";
import {useCallback, useEffect, useState} from "react";

const MovieContainer = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/movies");
      if (!response.ok) {
        throw new Error("Could not find movies from the server");
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    void fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="movie-container">
      {movies && movies.map((movie) => (
        <div className="movie" key={movie.id}>{movie.title
        }</div>
      ))}
    </div>
  );
}

export default MovieContainer;
