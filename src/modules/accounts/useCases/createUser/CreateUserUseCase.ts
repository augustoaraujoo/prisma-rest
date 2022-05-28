import { PrismaClient } from "@prisma/client";

interface IRequest {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

class CreateUserUseCase {
    constructor(private prisma: PrismaClient) { }

    async execute({ email, name, confirmPassword, password }: IRequest) {
        const user = await this.prisma.user.create({
            data: {
                email,
                name,
                password,
                confirmPassword
            }
        })
        return user;
    }
}
export { CreateUserUseCase }