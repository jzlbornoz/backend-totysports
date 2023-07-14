"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//const service = new BotService();
/*

const botService = BotService.getInstance();

router.post('/', async (req: Request, res: Response) => {
    const body = req.body;
    const isConnected = await botService.isConnected();
    if (!isConnected) {
    }
    await botService.SendOrder(body);
    res.status(201).json({ message: "Mensaje enviado" })
}) */
module.exports = router;
