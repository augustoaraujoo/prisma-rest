import { PrismaClient } from "@prisma/client";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const prisma = new PrismaClient();
const createUserUseCase = new CreateUserUseCase(prisma);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController }