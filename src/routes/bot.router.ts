import express, { Request, Response } from "express";
import { BotService } from "../services/bot.services";

const router = express.Router();
const service = new BotService();

router.post('/', async (req: Request, res: Response) => {
    const body = req.body;
    const newOrder = await service.SendOrder(body);
    res.status(201).json(newOrder);
})


module.exports = router;