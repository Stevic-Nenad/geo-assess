import "./Home.style.scss";
import Header from "../components/complex/header/Header.component.tsx";
import MovieContainer from "../components/complex/moviecontainer/MovieContainer.component.tsx";
import {useMovieContext} from "../contexts/Movie.context.tsx";
import {MovieFilter} from "../components/complex/moviecontainer/MovieContainer.props.ts";

const HomePage = () => {
  const {searchText} = useMovieContext();

  return (
    <div className="home-page">
      <Header/>
      <div className="home-page__content">
        {!searchText ?
          <>
            <h2 className="home-page__content__title">
              Browse
            </h2>
            <MovieContainer filter={MovieFilter.NONE} />
          </>
          :
          <>
            <h2 className="home-page__content__title">
              By Title
            </h2>
            <MovieContainer filter={MovieFilter.TITLE} />
            <h2 className="home-page__content__title">
              By Description
            </h2>
            <MovieContainer filter={MovieFilter.DESCRIPTION} />
          </>
        }
      </div>
    </div>
  );
}

export default HomePage;
