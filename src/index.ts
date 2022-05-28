import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { usersRoutes } from './routes/user.routes'

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(function (req: Request, res: Response, next: NextFunction) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
    );
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
});


app.use("/users", usersRoutes);

export { app }