import MovieCardProps from "./MovieCard.props.ts";

const MovieCard = ({movie}:MovieCardProps) => {
  return(
    <div className="movie-card">
      <img src={movie.cover} alt="cover" />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
