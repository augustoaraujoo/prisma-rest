"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const client_1 = require("@prisma/client");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const CreateUserController_1 = require("./CreateUserController");
const prisma = new client_1.PrismaClient();
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(prisma);
const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;