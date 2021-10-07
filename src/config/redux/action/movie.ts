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