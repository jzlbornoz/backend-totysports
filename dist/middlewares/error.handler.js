"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.logsErrors = void 0;
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
