import { DepositUseCase } from "./DepositUseCase";
import { Request, Response } from 'express';

class DepositController {

    constructor(private depositUseCase: DepositUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { value, title, email } = request.body;
        await this.depositUseCase.execute({ value, title, email });
        
        return response.status(201).json("criado")

    }

}


export { DepositController }