import express from "express";
const routerApi = require('./routes');
const app = express();
const port = 3002;

app.use(express.json());

app.get('/', (req, res: express.Response) => {
    res.send("hola");
})

routerApi(app);

app.listen(port, () => {
    console.log("servidor en el puerto " + port);
})