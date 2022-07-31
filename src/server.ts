require("dotenv").config();
import { app } from '.';
import "express-async-errors";
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});