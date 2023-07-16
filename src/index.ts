import express from "express";
import { boomHandler, errorHandler, logsErrors } from "./middlewares/error.handler";
import { routerApi } from "./routes";
const app = express();
const PORT = process.env.PORT || 3007;

app.use(express.json());

app.get('/', (req, res: express.Response) => {
    res.send("hola");
})

routerApi(app);

app.use(logsErrors);
app.use(boomHandler);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("servidor en el puerto " + PORT);
})