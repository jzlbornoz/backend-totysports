import { NextFunction, Request, Response } from "express";
import { CustomError } from "../interfaces/CustomError";
import { Schema } from "joi";
import { badRequest } from "@hapi/boom";


type ValidatorHandlerMiddleware = (
    schema: Schema,
    property: string
) => (
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction) => void

//clousure
const validatorHandler: ValidatorHandlerMiddleware = (schema, property) => {
    return (err, req, res, next) => {
        const data = req[property as keyof Request];
        const { error } = schema.validate(data);
        if (error) {
            next(badRequest(error));
        }
        next();
    }
}

export { validatorHandler };