import { Router } from 'express';

import { SessionController } from '../controllers/Users/Session/SessionController';

const sessionRouter = Router();

const sessionController = new SessionController();

sessionRouter.post('', sessionController.handle);

export { sessionRouter };
