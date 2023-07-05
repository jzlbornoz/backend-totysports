import express from "express";
const routerApi = require('./routes');
const app = express();
const PORT = process.env.PORT || 3077;

app.use(express.json());

app.get('/', (req, res: express.Response) => {
    res.send("hola");
})

routerApi(app);

app.listen(PORT, () => {
    console.log("servidor en el puerto " + PORT);
})