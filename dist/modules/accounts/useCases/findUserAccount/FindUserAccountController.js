"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserAccountController = void 0;
class FindUserAccountController {
    constructor(findUserAccountUseCase) {
        this.findUserAccountUseCase = findUserAccountUseCase;
    }
    async handle(request, response) {
        const { email } = request.params;
        const user = await this.findUserAccountUseCase.execute({ email });
        if (user.length === 0) {
            return response.status(401).json('user não encontrado');
        }
        return response.status(201).json(user);
    }
}
exports.FindUserAccountController = FindUserAccountController;
