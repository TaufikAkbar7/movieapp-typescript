import { ChangeEvent } from "react";

//types

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
    id: number;
    original_name: string;
    original_title: string;
    backdrop_path: string;
    vote_average: number;
}

export interface INavbar {
    search: string;
    handleChange(e: ChangeEvent<HTMLInputElement>): void;
    onSearch(search: string): void;
}

export interface ICard {
    movie: {
        id: number;
        original_name: string;
        original_title: string;
        backdrop_path: string;
        vote_average: number;
    };
}

export interface IGap {
    width: number | undefined;
    height: number | undefined;
}

export interface IMatchParams {
    name: string;
}

export interface IDetailMovie {
    backdrop_path: string;
    genre_ids : number[];
    original_name: string;
    release_date: string;
    vote_average: number;
    overview: string;
}
