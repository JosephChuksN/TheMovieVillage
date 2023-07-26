import { combineReducers } from "redux";
import { moviesReducers } from "./moviesReducer";
import { selectedMovieReducer } from "./moviesReducer";

 const reducers = combineReducers({
    allMovies : moviesReducers,
    movieDetails : selectedMovieReducer
})

export default reducers;