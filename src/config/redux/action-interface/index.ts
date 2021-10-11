import { ActionType } from '../action-types'

type array = {
    data: array
}

interface MoviCarouselRequest {
    type: ActionType.MOVIE_CAROUSEL_REQUEST,
}

interface MovieCarouselSuccess {
    type: ActionType.MOVIE_CAROUSEL_SUCCESS,
    payload: array
}

interface MovieCarouselFail {
    type: ActionType.MOVIE_CAROUSEL_FAIL,
    payload: string
}

interface MoviePopularRequest {
    type: ActionType.MOVIE_POPULAR_REQUEST,
}

interface MoviePopularSuccess {
    type: ActionType.MOVIE_POPULAR_SUCCESS,
    payload: array
}

interface MoviePopularFail {
    type: ActionType.MOVIE_POPULAR_FAIL,
    payload: string
}

interface MovieTopRatedRequest {
    type: ActionType.MOVIE_TOP_RATED_REQUEST,
}

interface MovieTopRatedSuccess {
    type: ActionType.MOVIE_TOP_RATED_SUCCESS,
    payload: array
}

interface MovieTopRatedFail {
    type: ActionType.MOVIE_TOP_RATED_FAIL,
    payload: string
}

interface MovieDetailRequest {
    type: ActionType.MOVIE_DETAIL_REQUEST,
}

interface MovieDetailSuccess {
    type: ActionType.MOVIE_DETAIL_SUCCESS,
    payload: array
}

interface MovieDetailFail {
    type: ActionType.MOVIE_DETAIL_FAIL,
    payload: string
}

interface MovieSearchRequest {
    type: ActionType.SEARCH_MOVIE_REQUEST,
}

interface MovieSearchSuccess {
    type: ActionType.SEARCH_MOVIE_SUCCESS,
    payload: array
}

interface MovieSearchFail {
    type: ActionType.SEARCH_MOVIE_FAIL,
    payload: string
}

interface MovieSimilarRequest {
    type: ActionType.MOVIE_SIMILAR_REQUEST,
}

interface MovieSimilarSuccess {
    type: ActionType.MOVIE_SIMILAR_SUCCESS,
    payload: array
}

interface MovieSimilarFail {
    type: ActionType.MOVIE_SIMILAR_FAIL,
    payload: string
}

interface MovieCastRequest {
    type: ActionType.MOVIE_CAST_REQUEST,
}

interface MovieCastSuccess {
    type: ActionType.MOVIE_CAST_SUCCESS,
    payload: array
}

interface MovieCastFail {
    type: ActionType.MOVIE_CAST_FAIL,
    payload: string
}

export type Action = MovieCastRequest | MovieCastSuccess | MovieCastFail | MovieSimilarRequest | MovieSimilarSuccess | MovieSimilarFail | MoviCarouselRequest | MovieCarouselSuccess | MovieCarouselFail | MovieDetailRequest | MovieDetailSuccess | MovieDetailFail | MoviePopularRequest | MoviePopularSuccess | MoviePopularFail | MovieSearchRequest | MovieSearchSuccess | MovieSearchFail | MovieTopRatedRequest | MovieTopRatedSuccess | MovieTopRatedFail