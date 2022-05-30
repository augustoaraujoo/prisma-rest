import { PrismaClient } from "@prisma/client";
interface IRequest {
    name?: string,
    email: string,
    password?: string,
}
class FindUserAccountUseCase {
    constructor(private prisma: PrismaClient) { }

    async execute({ email }: IRequest) {
        const find = await this.prisma.user.findUnique({
            where: {
                email: email,
            }
        })
        return find;
    }
}

export { FindUserAccountUseCase }