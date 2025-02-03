import Movie from "../../../models/Movie.ts";

interface MovieCardProps {
  movie: Movie;
  onClick: (e: Movie) => void;
}

export default MovieCardProps;
