import { actionTypes } from "../actionTypes";


const initialState = {
    movies:[]
}
const initialGenreState = {

    genre:[]
}

const initialSelectedGenreState = {

    gen:[]
}

export const  moviesReducers = (state = initialState, {type, payLoad}) =>{

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

export const genresReducer = (state = initialGenreState, {type, payLoad}) =>{
       
     switch (type) {
        case actionTypes.SET_MOVIE_GENRES:
               return {...state, genre:payLoad}

        case actionTypes.ADD_REMOVE_SELECTED_GENRE:
            return {...state, genre: payLoad}
     
        default:
            return state
     }
}

export const selectedGenresReducer = (state = initialSelectedGenreState, {type, payLoad})=>{

    switch (type) {
        case actionTypes.SELECTED_GENRES:
             return {...state, 
              gen:[...state.gen, payLoad]
            }
        case actionTypes.CLEAR_SELECTED_GENRE:
            return  initialSelectedGenreState
    
        default:
            return state
    }

    
}


// case actionTypes.REMOVE_SELECTED_GENRE:
//     const result = state.genre.filter(gen=>{ return ( gen.id !== payLoad.id)})
//       return {...state, genre: result }