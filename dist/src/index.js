"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_handler_1 = require("./middlewares/error.handler");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3007;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("hola");
});
(0, routes_1.routerApi)(app);
app.use(error_handler_1.logsErrors);
app.use(error_handler_1.boomHandler);
app.use(error_handler_1.errorHandler);
app.listen(PORT, () => {
    console.log("servidor en el puerto " + PORT);
});
