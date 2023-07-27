import { combineReducers } from "redux";
import { moviesReducers } from "./moviesReducer";
import { selectedMovieReducer } from "./moviesReducer";
import { genresReducer } from "./moviesReducer";
import { selectedGenresReducer } from "./moviesReducer";


//combined reducers
 const reducers = combineReducers({
    allMovies : moviesReducers,
    movieDetails : selectedMovieReducer,
    allGenres: genresReducer,
    selectedGenres: selectedGenresReducer
})

export default reducers;