import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { 
    movieCarouselReducer, 
    popularMovieReducer, 
    topRatedMovieReducer,
    searchMovieReducer,
    detailMovieReducer, 
    similarMovieReducer,
    castMovieReducer,
} from './reducers'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const reducers = combineReducers({
    movieCarousel: movieCarouselReducer,
    popularMovie: popularMovieReducer,
    topRatedMovie: topRatedMovieReducer,
    searchMovie: searchMovieReducer,
    detailMovie: detailMovieReducer,
    similarMovie: similarMovieReducer,
    castMovie: castMovieReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk)
));

export type RootState = ReturnType<typeof reducers>