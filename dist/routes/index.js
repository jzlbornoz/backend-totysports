"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerBot = require('./bot.router');
function routerApi(app) {
    const router = express_1.default.Router();
    app.use('/api/v1', router);
    router.use('/bot', routerBot);
}
module.exports = routerApi;