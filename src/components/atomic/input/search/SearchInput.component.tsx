import "./SearchInput.style.scss";
import {useMovieContext} from "../../../../contexts/Movie.context.tsx";

const SearchInput = () => {
  const { searchText, setSearchText } = useMovieContext();

  return (
    <input className="input-search"
           value={searchText}
           onChange={(e) => setSearchText(e.target.value)}
           placeholder="Search..."
    />
  );
}

export default SearchInput;
