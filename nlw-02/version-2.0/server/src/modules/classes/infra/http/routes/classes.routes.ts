import { Router } from "express";

import { CreateClassesController } from "../controllers/createClasses/CreateClassesController";

const classesRouter = Router();

const createClassesController = new CreateClassesController();

classesRouter.use("", createClassesController.handle);

export { classesRouter };
