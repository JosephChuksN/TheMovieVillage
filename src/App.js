import MovieList from "./Pages/MovieList";
import Movie from "./components/Movie";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="font-poppins">
      <Routes>
      <Route index exact element={<MovieList />} />
      <Route path="movie/:movieId" exact element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
