import "./Home.style.scss";
import Header from "../components/complex/header/Header.component.tsx";
import MovieContainer from "../components/complex/moviecontainer/MovieContainer.component.tsx";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header/>
      <div className="home-page__content">
        <h2 className="home-page__content__title">
          Browse
        </h2>
        <MovieContainer />
      </div>
    </div>
  );
}

export default HomePage;
