import { PrismaClient } from "@prisma/client";

interface IRequest {
    email: string;
}

class FindUserAccountUseCase {
    constructor(private prisma: PrismaClient) { }

    async execute({ email }: IRequest) {
        const find = await this.prisma.user.findMany({
            where: {
                email: email
            }
        });
        
        return find;
    }
}

export { FindUserAccountUseCase }