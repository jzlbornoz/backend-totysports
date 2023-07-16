import express, { Express, Router } from "express";
const routerBot = require('./bot.router');
const routerProducts = require('./products.router');


function routerApi(app: Express): void {
    const router: Router = express.Router();
    app.use('/api/v1', router);
    // router.use('/bot', routerBot);
    router.use('/products', routerProducts)
}

export { routerApi } 