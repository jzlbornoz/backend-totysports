import express, { Express, Router } from "express";
const routerBot = require('./bot.router');


function routerApi(app: Express): void {
    const router: Router = express.Router();
    app.use('/api/v1', router);
    router.use('/bot', routerBot);
}

module.exports = routerApi;