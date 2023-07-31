import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import { badRequest } from "@hapi/boom";


type ValidatorHandlerMiddleware = (
    schema: Schema,
    property: string
) => (
    req: Request,
    res: Response,
    next: NextFunction) => void

//clousure
const validatorHandler: ValidatorHandlerMiddleware = (schema, property) => {
    return (req, res, next) => {
        const data = req[property as keyof Request];
        const { error } = schema.validate(data , {abortEarly: false});
        if (error) {
            next(badRequest(error));
        }
        next();
    }
}

export { validatorHandler };