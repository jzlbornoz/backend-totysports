import express, { Request, Response } from "express";
import { BotService } from "../services/bot.services";

const router = express.Router();
const service = new BotService();

router.get('/', async (req: Request, res: Response) => {
    const rta = await service.getClient('21');
    res.json(rta);
})

module.exports = router;