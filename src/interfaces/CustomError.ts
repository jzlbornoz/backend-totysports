import { Boom } from "@hapi/boom";

export interface CustomError extends Boom {
    statusCode: number,
    message: string
}