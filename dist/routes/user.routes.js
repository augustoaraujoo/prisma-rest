"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const createUser_1 = require("../modules/accounts/useCases/createUser");
const index_1 = require("../modules/accounts/useCases/findUserAccount/index");
const deposit_1 = require("../modules/accounts/useCases/deposit");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
usersRoutes.post("/", (request, response) => {
    return createUser_1.createUserController.handle(request, response);
});
usersRoutes.get("/", (request, response) => {
    return response.status(201).json("log");
});
usersRoutes.get("/account/:email", (request, response) => {
    return index_1.findUserAccountController.handle(request, response);
});
usersRoutes.post("/deposit", (request, response) => {
    return deposit_1.depositController.handle(request, response);
});
