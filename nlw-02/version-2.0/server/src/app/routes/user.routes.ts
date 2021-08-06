import { Router } from 'express';

// import { UsersController } from '../controllers/UsersControllers';
import { CreateUsersController } from '../controllers/Users/CreateUsersController';

const createUserRouter = Router();

const createUsersController = new CreateUsersController();

createUserRouter.post('', createUsersController.handle);

export { createUserRouter };
