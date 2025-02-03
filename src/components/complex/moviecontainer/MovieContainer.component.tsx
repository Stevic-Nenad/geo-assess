import "./MovieContainer.style.scss";
import Movie from "../../../models/Movie.ts";
import {useCallback, useEffect, useState} from "react";
import MovieCard from "../moviecard/MovieCard.component.tsx";

const MovieContainer = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/movies`);
      if (!response.ok) {
        throw new Error("Could not find movies from the server");
      }
      const data: Movie[] = await response.json();

      //add some sample images to the movies so it looks a bit nicer :)
      const moviesWithCovers: Movie[] = data.map(movie => ({
        ...movie,
        cover: `https://picsum.photos/200?random=${movie.id}`
      }));

      setMovies(moviesWithCovers);
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
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

export default MovieContainer;
