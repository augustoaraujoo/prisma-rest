require("dotenv").config();
import { app } from '.';
import "express-async-errors";

app.listen(process.env.PORT || 3000);