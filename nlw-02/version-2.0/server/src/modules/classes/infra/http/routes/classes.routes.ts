import { Router } from "express";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

import { CreateClassesController } from "../controllers/createClasses/CreateClassesController";
import { ListAllClassesController } from "../controllers/listAllClasses/ListAllClassesController";

const classesRouter = Router();

const createClassesController = new CreateClassesController();
const listAllClassesController = new ListAllClassesController();

classesRouter.use(ensureAuthenticated);

classesRouter.post("", createClassesController.handle);
classesRouter.get("", listAllClassesController.handle);

export { classesRouter };
