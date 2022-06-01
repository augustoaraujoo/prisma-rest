import { Request, Response } from "express";
import { FindUserAccountUseCase } from "./FindUserAccountUseCase";

class FindUserAccountController {
    constructor(private findUserAccountUseCase: FindUserAccountUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.params;

        const user = await this.findUserAccountUseCase.execute({ email })
        if(user.length === 0) {
            return response.status(401).json('user não encontrado')
        }
        
        return response.status(201).json(user);
    }
}
export { FindUserAccountController }