import { Router } from "express";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

import { CreateSubjectsController } from "../controllers/createSubjects/CreateSubjectsController";
import { ListSubjectsController } from "../controllers/ListSubjectsController";

const subjectsRouter = Router();

const createSubjectsController = new CreateSubjectsController();
const listSubjectsController = new ListSubjectsController();

subjectsRouter.use(ensureAuthenticated);

subjectsRouter.post("", createSubjectsController.handle);
subjectsRouter.get("", listSubjectsController.handle);

export { subjectsRouter };
