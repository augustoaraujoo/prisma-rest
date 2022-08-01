"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositController = void 0;
class DepositController {
    constructor(depositUseCase) {
        this.depositUseCase = depositUseCase;
    }
    async handle(request, response) {
        const { value, title, email } = request.body;
        await this.depositUseCase.execute({ value, title, email });
        return response.status(201).json("criado");
    }
}
exports.DepositController = DepositController;
