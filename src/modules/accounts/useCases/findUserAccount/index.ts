import { FindUserAccountController } from "./FindUserAccountController";
import { FindUserAccountUseCase } from "./FindUserAccountUseCase";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const findUserAccountUseCase = new FindUserAccountUseCase(prisma);
const findUserAccountController = new FindUserAccountController(findUserAccountUseCase);

export { findUserAccountController }