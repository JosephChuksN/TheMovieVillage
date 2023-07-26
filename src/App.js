import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route index exact element={<MovieList />} />
      <Route path="movie/:movieId" exact element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
