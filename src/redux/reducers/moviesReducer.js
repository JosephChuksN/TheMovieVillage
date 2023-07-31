import { actionTypes } from "../actionTypes";


const initialState = {
    movies:[],
    genre:[],
    gen:[], 
    trending:[],
    toprated:[]
}



export const  moviesReducers = (state = initialState.movies, {type, payLoad}) =>{

    switch (type) {
        case actionTypes.SET_MOVIES :
            return {...state, movies: payLoad}
            
        default:
            return state
    }
}

export const selectedMovieReducer = (state = { }, {type, payLoad})=>{

    switch (type) {
        case actionTypes.SET_SELECTED_MOVIE:
               return {...state, ...payLoad}
        case actionTypes.REMOVE_SELECTED_MOVIE:
               return {}
        default:
          return  state
    }
}

export const genresReducer = (state = initialState.genre, {type, payLoad}) =>{
       
     switch (type) {
        case actionTypes.SET_MOVIE_GENRES:
               return {...state, genre:payLoad}

        case actionTypes.ADD_REMOVE_SELECTED_GENRE:
            return {...state, genre: payLoad}
     
        default:
            return state
     }
}

export const selectedGenresReducer = (state = initialState.gen, {type, payLoad})=>{

    switch (type) {
        case actionTypes.SELECTED_GENRES:
             return {...state, 
              gen:[...state.gen, payLoad]
            }
        case actionTypes.CLEAR_SELECTED_GENRE:
            return  initialState.gen
    
        default:
            return state
    }

    
}

export const setFeturedMovieReducer = (state = {}, {type, payLoad}) =>{
    switch (type) {
        case actionTypes.SET_FETURED_MOVIE:
          return {...state, ...payLoad}
            
    
        default:
           return state
    }
}

export const trendingMoviesReducer = (state = initialState.trending, { type, payLoad}) =>{
     switch (type) {
        case actionTypes.SET_TRENDING_MOVIES:
            return {...state, trending:payLoad}
           
     
        default:
            return state
     }
}

export const topratedMoviesReducer = (state = initialState.toprated, {type, payLoad}) => {
    switch (type) {
        case actionTypes.SET_TOPRATED_MOVIES:
            return {...state, toprated:payLoad}
    
        default:
            return state
    }
}