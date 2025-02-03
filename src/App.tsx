import './App.scss'
import HomePage from "./page/Home.page.tsx";
import {MovieProvider} from "./contexts/Movie.provider.tsx";

const App = () => {
  return (
    <div className="app">
      <MovieProvider>
        <HomePage/>
      </MovieProvider>
    </div>
  )
}

export default App
