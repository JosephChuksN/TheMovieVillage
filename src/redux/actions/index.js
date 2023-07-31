import { actionTypes } from "../actionTypes"

//actions to set states

export const setMovies = (movies) =>{
    return {
        type : actionTypes.SET_MOVIES,
        payLoad : movies
    }
}

export const setSelectedMovie = (movie) =>{
    return {
        type : actionTypes.SET_SELECTED_MOVIE,
        payLoad : movie
    }
}
export const removeSelectedMovie = ()=>{
    return{
        type: actionTypes.REMOVE_SELECTED_MOVIE
    }
}

export const setMovieGenre = (genres) =>{
    return {
        type : actionTypes.SET_MOVIE_GENRES,
        payLoad : genres
    }
}

export const setSelectedMovieGenre = (selectedGenre)=>{
    return {
        type: actionTypes.SELECTED_GENRES,
        payLoad: selectedGenre
    }
}
export const clearSelectedGenres = ()=>{
    return {
        type: actionTypes.CLEAR_SELECTED_GENRE,
        
    }
}

export const setFeaturedMovie = (featuredMovie) => {
    return{
        type: actionTypes.SET_FETURED_MOVIE,
        payLoad: featuredMovie
    }
}

export const setTrendingMovies = (trendingMovies) =>{
    return {
        type: actionTypes.SET_TRENDING_MOVIES,
        payLoad: trendingMovies 
    }
}

export const setTopratedMovies = (topratedMovies) =>{
    
    return {
        type: actionTypes.SET_TOPRATED_MOVIES,
        payLoad:topratedMovies
    }
}