"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute({ email, name, confirmPassword, password, avatar }) {
        const user = await this.prisma.user.create({
            data: {
                email,
                name,
                password,
                confirmPassword,
                avatar,
            }
        });
        return user;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
