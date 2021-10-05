import { IRoute } from "../interfaces";
import { Home, DetailMovie } from "../pages";

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true
    },
    {
        path: '/detail',
        name: 'DetailMovie',
        component: DetailMovie,
        exact: true
    }
]

export default routes