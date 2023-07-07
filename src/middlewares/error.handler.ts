import { NextFunction, Request, Response } from "express";
import { CustomError } from "../interfaces/CustomError";

type ErrorHandlerMiddleware = (
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction,
) => void;


// Proporciona una forma de registrar y visualizar los errores en la consola para propósitos de depuración.
const logsErrors: ErrorHandlerMiddleware = (err, req, res, next) => {
    console.error("Error: ", err);
    next(err);
}

// Se encarga de responder a las solicitudes con un formato de error adecuado.
const errorHandler: ErrorHandlerMiddleware = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

export { logsErrors, errorHandler };
