import { Router } from "express";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

import { CreateClassesController } from "../controllers/createClasses/CreateClassesController";

const classesRouter = Router();

const createClassesController = new CreateClassesController();

classesRouter.use(ensureAuthenticated);

classesRouter.use("", createClassesController.handle);

export { classesRouter };
