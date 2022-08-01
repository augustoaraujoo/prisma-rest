"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const _1 = require(".");
require("express-async-errors");
const PORT = process.env.PORT || 5000;
_1.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
