import "./Home.style.scss";
import Header from "../components/complex/header/Header.component.tsx";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header/>
      <div className="home-page__content">
        <h2 className="home-page__content__title">
          Browse
        </h2>
        <div className="home-page__content__movies">
          Movies
        </div>
      </div>
    </div>
  );
}

export default HomePage;
