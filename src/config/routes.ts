import { IRoute } from "../interfaces";
import { Home, DetailMovie, SearchMovie } from "../pages";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true
    },
    {
        path: '/detail/:id',
        name: 'DetailMovie',
        component: DetailMovie,
        exact: true
    },
    {
        path: '/search/:name',
        name: 'SearchMovie',
        component: SearchMovie,
        exact: true
    },
]

export default routes