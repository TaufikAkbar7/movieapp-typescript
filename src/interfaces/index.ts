export interface ITitle {
    title: string;
    subtitle: string;
}

export interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}

export interface IMovie {
    title: string;
    backdrop_path: string;
    vote_average: number;
}