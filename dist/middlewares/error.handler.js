"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boomHandler = exports.errorHandler = exports.logsErrors = void 0;
// Proporciona una forma de registrar y visualizar los errores en la consola para propósitos de depuración.
const logsErrors = (err, req, res, next) => {
    console.error("Error: ", err);
    next(err);
};
exports.logsErrors = logsErrors;
// Se encarga de responder a las solicitudes con un formato de error adecuado.
const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
};
exports.errorHandler = errorHandler;
// Detecta los errores Boom y los maneja enviando una respuesta adecuada con la información del error. Para otros errores, 
// simplemente pasa el control al siguiente middleware.
const boomHandler = (err, req, res, next) => {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
};
exports.boomHandler = boomHandler;
