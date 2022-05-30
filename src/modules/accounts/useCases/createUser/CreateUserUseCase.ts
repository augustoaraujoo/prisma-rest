import { PrismaClient } from "@prisma/client";

interface IRequest {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    avatar?: string;
}

class CreateUserUseCase {
    constructor(private prisma: PrismaClient) { }

    async execute({ email, name, confirmPassword, password, avatar }: IRequest) {
        const user = await this.prisma.user.create({
            data: {
                email,
                name,
                password,
                confirmPassword,
                avatar,
            }
        })
        return user;
    }
}
export { CreateUserUseCase }