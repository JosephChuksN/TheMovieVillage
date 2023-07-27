import { actionTypes } from "../actionTypes"


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

export const addRemoveSelectedGenres = (removedGenres)=>{
    return {
        type: actionTypes.ADD_REMOVE_SELECTED_GENRE,
        payLoad : removedGenres
    }
}