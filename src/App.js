import MovieList from "./Pages/MovieList";
import Movie from "./Pages/Movie";
import Home from "./Pages/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="font-poppins relative">
      <Header />
      <Routes>
      <Route index exact element={<Home />} />
      <Route path="movielist" element={<MovieList />} />
      <Route path="movie/:movieId" exact element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
