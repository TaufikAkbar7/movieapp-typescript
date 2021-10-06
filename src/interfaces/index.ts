import { ChangeEvent } from "react";

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
    title: string;
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
        id: number
        title: string;
        backdrop_path: string;
        vote_average: number;
    };
}

export interface IGap {
    width: number | undefined;
    height: number | undefined;
}