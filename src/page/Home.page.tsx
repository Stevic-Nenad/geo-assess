import "./Home.style.scss";
import Header from "../components/complex/header/Header.component.tsx";
import MovieContainer from "../components/complex/moviecontainer/MovieContainer.component.tsx";
import {MovieContext} from "../contexts/Search.context.tsx";
import {useState} from "react";
import {MovieFilter, MovieSort} from "../components/complex/moviecontainer/MovieContainer.props.ts";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <MovieContext.Provider value={{searchText, setSearchText}}>
      <div className="home-page">
        <Header/>
        <div className="home-page__content">
          {!searchText ?
            <>
              <h2 className="home-page__content__title">
                Browse
              </h2>
              <MovieContainer filter={MovieFilter.NONE} sort={MovieSort.NONE} />
            </>
            :
            <>
              <h2 className="home-page__content__title">
                By Title
              </h2>
              <MovieContainer filter={MovieFilter.TITLE} sort={MovieSort.NONE} />
              <h2 className="home-page__content__title">
                By Description
              </h2>
              <MovieContainer filter={MovieFilter.DESCRIPTION} sort={MovieSort.NONE} />
            </>
          }
        </div>
      </div>
    </MovieContext.Provider>
  );
}

export default HomePage;
