import { combineReducers } from "redux";
import { moviesReducers } from "./moviesReducer";
import { selectedMovieReducer } from "./moviesReducer";
import { genresReducer } from "./moviesReducer";

 const reducers = combineReducers({
    allMovies : moviesReducers,
    movieDetails : selectedMovieReducer,
    allGenres: genresReducer
})

export default reducers;