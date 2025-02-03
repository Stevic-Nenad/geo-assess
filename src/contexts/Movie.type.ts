import {MovieSort} from "../components/complex/moviecontainer/MovieContainer.props.ts";

interface MovieContextType {
  searchText: string;
  setSearchText: (text: string) => void;
  movieSort: MovieSort;
  toggleSort: () => void;
}

export default MovieContextType;
