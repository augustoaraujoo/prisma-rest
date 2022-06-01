import { Router } from "express";
import { createUserController } from "../modules/accounts/useCases/createUser";
import { findUserAccountController } from "../modules/accounts/useCases/findUserAccount/index"
import { Request, Response } from "express";
import { depositController } from "../modules/accounts/useCases/deposit";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    return createUserController.handle(request, response);
})
usersRoutes.get("/", (request: Request, response: Response) => {
    return response.status(201).json("log")
});
usersRoutes.get("/account/:email", (request, response) => {
    return findUserAccountController.handle(request, response);
})
usersRoutes.post("/deposit", (request, response) => {
    return depositController.handle(request, response);
})
export { usersRoutes }