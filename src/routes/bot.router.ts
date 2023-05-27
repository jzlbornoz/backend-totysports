import express, { Request, Response } from "express";
import { BotService } from "../services/bot.services";

const router = express.Router();
const service = new BotService();

router.get('/', async (req: Request, res: Response) => {
    const isConnected = await service.isConnected();
    if (isConnected) {
        res.send("El Bot esta conectado")
    } else {
        res.send("el bot fallo");
    }
})

router.post('/', async (req, res) => {
    const body = req.body;
    const newOrder = await service.SendOrder(body);
    res.status(201).json(newOrder);
})


module.exports = router;