import { PrismaClient } from "@prisma/client";

interface IRequest {
    email: string;
    name: string
}

class CreateUserUseCase {
    constructor(private prisma: PrismaClient) {}

    async execute({ email, name }: IRequest) {
        const user = await this.prisma.user.create({
            data: {
                email,
                name
            }
        })
        return user;
    }
}
export { CreateUserUseCase }