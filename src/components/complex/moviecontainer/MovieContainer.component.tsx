import "./MovieContainer.style.scss";
import Movie from "../../../models/Movie.ts";
import {useEffect} from "react";

const MovieContainer = () => {
  const [movies, setMovies] = React.useState<Movie[]>([]);

  return(
    <div className="movie-container">
      Movie Container
    </div>
  );
}

export default MovieContainer;
