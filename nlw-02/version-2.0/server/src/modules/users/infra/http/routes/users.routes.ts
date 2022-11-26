import { Router } from 'express';

import { UsersControllerss } from '../controllers/UsersControllers';

const usersRouter = Router();

const usersController = new UsersControllerss();

usersRouter.post('/', usersController.handle);

export { usersRouter };
