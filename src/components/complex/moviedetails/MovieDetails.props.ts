import Movie from "../../../models/Movie.ts";

interface MovieDetailsProps {
  movie: Movie | null;
  onClose: () => void;
}

export default MovieDetailsProps;
