import "./Header.style.scss";
import SearchInput from "../../atomic/input/search/SearchInput.component.tsx";
import SortButton from "../../atomic/button/sort/SortButton.component.tsx";

const Header = () => {
  return(
    <div className="header">
      <div className="header__title">
        GeoMovies
      </div>
      <div className="header__search">
        <SearchInput />
      </div>
      <div className="header__sort">
        <SortButton />
      </div>
    </div>
  )
}

export default Header;
