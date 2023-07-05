import express, { Request, Response } from "express";
import { BotService } from "../services/bot.services";

const router = express.Router();
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