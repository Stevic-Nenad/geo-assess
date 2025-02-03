import "./MovieDetails.style.scss";
import MovieDetailsProps from "./MovieDetails.props.ts";

const MovieDetails = ({movie, open}: MovieDetailsProps) => {
  return (
    <>
      {open ?
        <div className="movie-details">
          <div className="movie-details__content">
            <img className="movie-details__content__image" src={movie.cover} alt="Movie cover"/>
            <div className="movie-details__content__text">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            </div>
          </div>
        </div>
        :
        null
      }
    </>
  );
}

export default MovieDetails;
