import { ActionType } from "../action-types";
import { Action } from "../action-interface";

const initialState = {
    loading: false,
    movies: [],
    error: ''
}

export const movieCarouselReducer = (state: object = initialState, action: Action): any => {
    switch (action.type){
        case ActionType.MOVIE_CAROUSEL_REQUEST:
            return { loading: true }
        case ActionType.MOVIE_CAROUSEL_SUCCESS:
            return { loading: false, movies: action.payload }
        case ActionType.MOVIE_CAROUSEL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const popularMovieReducer = (state: object = initialState, action: Action): any => {
    switch (action.type){
        case ActionType.MOVIE_POPULAR_REQUEST:
            return { loading: true }
        case ActionType.MOVIE_POPULAR_SUCCESS:
            return { loading: false, movies: action.payload }
        case ActionType.MOVIE_POPULAR_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const topRatedMovieReducer = (state: object = initialState, action: Action): any => {
    switch (action.type){
        case ActionType.MOVIE_TOP_RATED_REQUEST:
            return { loading: true }
        case ActionType.MOVIE_TOP_RATED_SUCCESS:
            return { loading: false, movies: action.payload }
        case ActionType.MOVIE_TOP_RATED_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const searchMovieReducer = (state: object = initialState, action: Action): any => {
    switch (action.type){
        case ActionType.SEARCH_MOVIE_REQUEST:
            return { loading: true }
        case ActionType.SEARCH_MOVIE_SUCCESS:
            return { loading: false, movies: action.payload }
        case ActionType.SEARCH_MOVIE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}