import { actionTypes } from "../actionTypes";


const initialState = {
    movies:[]
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