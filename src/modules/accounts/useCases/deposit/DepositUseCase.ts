import { PrismaClient } from '@prisma/client';
interface IRequest {
    value: number;
    title?: string;
    email: string
}
class DepositUseCase {
    constructor(private prisma: PrismaClient) { }

    async execute({ email, value, title }: IRequest) {
        const create = await this.prisma.card.create({
            data: {
                value,
                title,
                author: {
                    connect: {
                        email
                    }
                }
            }
        })
        return create
    }
}

export { DepositUseCase }