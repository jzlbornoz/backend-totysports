import { NextFunction, Request, Response } from "express";
import { CustomError } from "../types";


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

// Detecta los errores Boom y los maneja enviando una respuesta adecuada con la información del error. Para otros errores, 
// simplemente pasa el control al siguiente middleware.
const boomHandler: ErrorHandlerMiddleware = (err, req, res, next) => {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

export { logsErrors, errorHandler, boomHandler };
