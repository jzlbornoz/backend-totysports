"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorHandler = void 0;
const boom_1 = require("@hapi/boom");
//clousure
const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next((0, boom_1.badRequest)(error));
        }
        next();
    };
};
exports.validatorHandler = validatorHandler;
