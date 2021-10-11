import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { Action } from "../action-interface";
import { ActionType } from "../action-types";
import API_KEYS from "../../api";

export const getMovieCarouselAction = () => async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionType.MOVIE_CAROUSEL_REQUEST })
    axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEYS}&language=en-US&page=1`)
    .then((res: AxiosResponse) => dispatch({ type: ActionType.MOVIE_CAROUSEL_SUCCESS, payload: res['data']['results'] }))
    .catch(err => dispatch({ type: ActionType.MOVIE_CAROUSEL_FAIL, payload: err }))
}

export const getTopRatedMovieAction = () => async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionType.MOVIE_TOP_RATED_REQUEST })
    axios
    .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEYS}&language=en-US&page=1`)
    .then((res: AxiosResponse) => dispatch({ type: ActionType.MOVIE_TOP_RATED_SUCCESS, payload: res['data']['results'] }))
    .catch(err => dispatch({ type: ActionType.MOVIE_TOP_RATED_FAIL, payload: err }))
}

export const getPopularMovieAction = () => async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionType.MOVIE_POPULAR_REQUEST })
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEYS}&language=en-US&page=1`)
    .then((res: AxiosResponse) => dispatch({ type: ActionType.MOVIE_POPULAR_SUCCESS, payload: res['data']['results'] }))
    .catch(err => dispatch({ type: ActionType.MOVIE_POPULAR_FAIL, payload: err }))
}

export const getMovieBySearch = (search: string) => async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionType.SEARCH_MOVIE_REQUEST })
    axios
    .get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEYS}&language=en-US&page=1&query=${search}&include_adult=true`)
    .then((res: AxiosResponse) => dispatch({ type: ActionType.SEARCH_MOVIE_SUCCESS, payload: res['data']['results'] }))
    .catch(err => dispatch({ type: ActionType.SEARCH_MOVIE_FAIL, payload: err }))
}

export const getDetailMovie = (id: string) => async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionType.MOVIE_DETAIL_REQUEST })
    axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEYS}&language=en-US`)
    .then((res: AxiosResponse) => dispatch({ type: ActionType.MOVIE_DETAIL_SUCCESS, payload: res['data'] }))
    .catch(err => dispatch({ type: ActionType.MOVIE_DETAIL_FAIL, payload: err }))
}

export const getSimilarMovie = (id: string) => async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionType.MOVIE_SIMILAR_REQUEST })
    axios
    .get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEYS}&language=en-US`)
    .then((res: AxiosResponse) => dispatch({ type: ActionType.MOVIE_SIMILAR_SUCCESS, payload: res['data']['results'] }))
    .catch(err => dispatch({ type: ActionType.MOVIE_SIMILAR_FAIL, payload: err }))
}

export const getCastMovie = (id: string) => async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionType.MOVIE_CAST_REQUEST })
    axios
    .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEYS}&language=en-US`)
    .then((res: AxiosResponse) => dispatch({ type: ActionType.MOVIE_CAST_SUCCESS, payload: res['data']['cast'] }))
    .catch(err => dispatch({ type: ActionType.MOVIE_CAST_FAIL, payload: err }))
}