import { app } from '.';
import "express-async-errors";
const port = process.env.PORT || 1010;

app.listen(port, () => {
    console.log("rodando");
})