"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerApi = require('./routes');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3077;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("hola");
});
routerApi(app);
app.listen(PORT, () => {
    console.log("servidor en el puerto " + PORT);
});
