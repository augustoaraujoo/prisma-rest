"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, response) {
        const { name, email, confirmPassword, password, avatar } = request.body;
        try {
            const create = await this.createUserUseCase.execute({ email, name, confirmPassword, password, avatar });
            return response.status(201).json(create);
        }
        catch (error) {
            return response.status(400).json({ err: error });
        }
    }
}
exports.CreateUserController = CreateUserController;
