import { DepositUseCase } from "./DepositUseCase";
import { Request, Response } from 'express';

class DepositController {
    constructor(private depositUseCase: DepositUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            email,
            value,
            title } = request.body;
        const create = await this.depositUseCase.execute({
            email,
            value,
            title
        })

        return response.status(201).json(create);
    }
}

export { DepositController }