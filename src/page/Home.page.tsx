import "./Home.style.scss";
import Header from "../components/complex/header/Header.component.tsx";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header/>
      <div className="home-page__content">
        Content
      </div>
    </div>
  );
}

export default HomePage;
