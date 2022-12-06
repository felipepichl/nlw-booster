import { Router } from "express";

import { CreateUsersControllers } from "../controllers/createUsers/CreateUsersControllers";

const usersRouter = Router();

const usersController = new CreateUsersControllers();

usersRouter.post("/", usersController.handle);

export { usersRouter };
