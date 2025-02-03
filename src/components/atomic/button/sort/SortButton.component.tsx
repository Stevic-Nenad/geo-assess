import "./SortButton.style.scss";
import {useMovieContext} from "../../../../contexts/Movie.context.tsx";
import {MovieSort} from "../../../complex/moviecontainer/MovieContainer.props.ts";

const SortButton = () => {
  const {movieSort, toggleSort} = useMovieContext();

  return (
    <button className="button-sort" onClick={toggleSort}>
      <div className="button-sort__text">
        {movieSort === MovieSort.NONE ? '↕' : movieSort === MovieSort.ASC ? '↑' : '↓'}
      </div>
    </button>
  )
}
export default SortButton;
