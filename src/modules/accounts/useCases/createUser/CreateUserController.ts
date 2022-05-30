import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }
    async handle(request: Request, response: Response) {

        const { name, email, confirmPassword, password, avatar } = request.body;

        try {
            const create = await this.createUserUseCase.execute({ email, name, confirmPassword, password,avatar });
            return response.status(201).json(create);
        } catch (error) {
            return response.status(400).json({ err: error })
        }
    }
}

export { CreateUserController }