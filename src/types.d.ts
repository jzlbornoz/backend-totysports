import { Boom } from "@hapi/boom";

export interface CustomError extends Boom {
    statusCode: number,
    message: string
}

export type Players = string | null;

export interface JerseyModel {
    name: string;
    size: string;
    price: number;
    sale: number;
    team: string;
    players: Players;
    season: string;
    stock: number;
    technology: string;
    link: string;
    img: string[];
    brand: string;
}