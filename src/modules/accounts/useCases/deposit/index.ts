import { PrismaClient } from "@prisma/client";
import { DepositController } from "./DepositController";
import { DepositUseCase } from "./DepositUseCase";

const prisma = new PrismaClient();
const depositUseCase = new DepositUseCase(prisma);
const depositController = new DepositController(depositUseCase);

export { depositController }