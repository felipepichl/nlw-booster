import { Router } from 'express';

import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const authenticateUserRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateUserRouter.post('/', authenticateUserController.handle);

export { authenticateUserRouter };
