import Movie from "../../../models/Movie.ts";

interface MovieDetailsProps {
  movie: Movie | null;
  open: boolean;
}

export default MovieDetailsProps;
