"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserAccountUseCase = void 0;
class FindUserAccountUseCase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute({ email }) {
        const find = await this.prisma.user.findMany({
            include: {
                Card: true
            },
            where: {
                email: email
            }
        });
        return find;
    }
}
exports.FindUserAccountUseCase = FindUserAccountUseCase;
