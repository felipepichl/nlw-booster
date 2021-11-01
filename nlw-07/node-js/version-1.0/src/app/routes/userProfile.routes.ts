import { Router } from 'express';

import { ProfileUserController } from '../controllers/ProfileUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userProfileRouter = Router();

const userProfileController = new ProfileUserController();

userProfileRouter.use(ensureAuthenticated);

userProfileRouter.get('', userProfileController.handle);

export { userProfileRouter };
