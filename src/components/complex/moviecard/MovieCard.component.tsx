import "./MovieCard.style.scss";
import MovieCardProps from "./MovieCard.props.ts";

const MovieCard = ({movie, onClick}: MovieCardProps) => {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img className="movie-card__image" src={movie.cover} alt="cover"/>
      <h3 className="movie-card__title">{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
