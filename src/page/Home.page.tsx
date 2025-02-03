import "./Home.style.scss";
import Header from "../components/complex/header/Header.component.tsx";
import MovieContainer from "../components/complex/moviecontainer/MovieContainer.component.tsx";
import {MovieContext} from "../contexts/Search.context.tsx";
import {useState} from "react";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <MovieContext.Provider value={{searchText, setSearchText}}>
      <div className="home-page">
        <Header/>
        <div className="home-page__content">
          <h2 className="home-page__content__title">
            Browse
          </h2>
          <MovieContainer />
        </div>
      </div>
    </MovieContext.Provider>
  );
}

export default HomePage;
