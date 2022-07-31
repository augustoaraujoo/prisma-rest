import { PrismaClient } from '@prisma/client';
interface IRequest {
    title: string;
    value: number;
    email: string;
}
class DepositUseCase {

    constructor(private prisma: PrismaClient) { }
    async execute({ value, title, email }: IRequest) {
        await this.prisma.card.create({
            data: {
                value,
                title,
                User:{
                    connect:{
                        email
                    }
                }
            }
        })
    }

}

export { DepositUseCase }