"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositUseCase = void 0;
class DepositUseCase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute({ value, title, email }) {
        await this.prisma.card.create({
            data: {
                value,
                title,
                User: {
                    connect: {
                        email
                    }
                }
            }
        });
    }
}
exports.DepositUseCase = DepositUseCase;
