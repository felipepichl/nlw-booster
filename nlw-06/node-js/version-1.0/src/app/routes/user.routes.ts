import { Router } from 'express';

import { CreateUsersControllers } from '@controller/CreateUsersControllers';

const createUserRouter = Router();

const createUserController = new CreateUsersControllers();

createUserRouter.post('/', createUserController.handle);

export { createUserRouter };
