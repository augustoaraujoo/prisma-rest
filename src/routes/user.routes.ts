import { Router } from "express";
import { createUserController } from "../modules/accounts/useCases/createUser";
import { Request, Response} from "express";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    return createUserController.handle(request, response);
})
usersRoutes.get("/", (request:Request,response:Response)=> {
    return response.status(201).json("log")
});
export { usersRoutes }