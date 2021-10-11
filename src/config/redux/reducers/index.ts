import { ActionType } from "../action-types";
import { Action } from "../action-interface";

const initialState = {
    loading: true,
    movies: [],
    error: ''
}

const detailMovieState = {
    loading: true,
    movie: {},
    error: ''
}

const castMovieState = {
    loading: true,
    casts: [],
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

export const detailMovieReducer = (state: object = detailMovieState, action: Action): any => {
    switch (action.type){
        case ActionType.MOVIE_DETAIL_REQUEST:
            return { loading: true }
        case ActionType.MOVIE_DETAIL_SUCCESS:
            return { loading: false, movie: action.payload }
        case ActionType.MOVIE_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const similarMovieReducer = (state: object = initialState, action: Action): any => {
    switch (action.type){
        case ActionType.MOVIE_SIMILAR_REQUEST:
            return { loading: true }
        case ActionType.MOVIE_SIMILAR_SUCCESS:
            return { loading: false, movies: action.payload }
        case ActionType.MOVIE_SIMILAR_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const castMovieReducer = (state: object = castMovieState, action: Action): any => {
    switch (action.type){
        case ActionType.MOVIE_CAST_REQUEST:
            return { loading: true }
        case ActionType.MOVIE_CAST_SUCCESS:
            return { loading: false, casts: action.payload }
        case ActionType.MOVIE_CAST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}