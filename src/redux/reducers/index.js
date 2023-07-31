import { combineReducers } from "redux";
import { moviesReducers,
    selectedMovieReducer,
    genresReducer,
    selectedGenresReducer,
    setFeturedMovieReducer,
    trendingMoviesReducer,
    topratedMoviesReducer
} from "./moviesReducer";



//combined reducers
 const reducers = combineReducers({
    allMovies : moviesReducers,
    movieDetails : selectedMovieReducer,
    allGenres: genresReducer,
    selectedGenres: selectedGenresReducer,
    featuredMovie: setFeturedMovieReducer,
    trendingMovies: trendingMoviesReducer,
    topratedMovies:  topratedMoviesReducer
})

export default reducers;