import "./Header.style.scss";
import SearchInput from "../../atomic/input/search/SearchInput.component.tsx";

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
        <button className="header__sort__button">Sort</button>
      </div>
    </div>
  )
}

export default Header;
