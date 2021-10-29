import { Router } from 'express';

import { AuthenticateUserController } from '../controllers/AuthenticateUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const authenticateUserRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateUserRouter.use(ensureAuthenticated);

authenticateUserRouter.post('', authenticateUserController.handle);

export { authenticateUserRouter };
