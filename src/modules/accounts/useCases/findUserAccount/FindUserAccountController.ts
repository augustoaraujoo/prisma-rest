import { Request, Response } from "express";
import { FindUserAccountUseCase } from "./FindUserAccountUseCase";

class FindUserAccountController {
    constructor(private findUserAccountUseCase: FindUserAccountUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, name, password} = request.body;

        const user = await this.findUserAccountUseCase.execute({
            email,
            name,
            password
        })
        return response.status(201).json(user);
    }
}
export { FindUserAccountController }