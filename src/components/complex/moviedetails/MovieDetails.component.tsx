import "./MovieDetails.style.scss";
import MovieDetailsProps from "./MovieDetails.props.ts";

const MovieDetails = ({movie, onClose}: MovieDetailsProps) => {
  return (
    <>
      {movie ?
        <div className="movie-details" onClick={() => onClose()}>
          <div className="movie-details__content" onClick={e => e.stopPropagation()}>
            <img className="movie-details__content__image" src={movie.cover} alt="Movie cover"/>
            <div className="movie-details__content__text">
              <h2 className="movie-details__content__text__title">{movie.title}</h2>
              <p className="movie-details__content__text__description">{movie.description}</p>
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
