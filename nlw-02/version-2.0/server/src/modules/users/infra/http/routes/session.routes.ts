import { Router } from 'express';

import { CreateSessionsController } from '../controllers/createSession/CreateSessionsController';

const sessionRouter = Router();

const sessionController = new CreateSessionsController();

sessionRouter.post('', sessionController.handle);

export { sessionRouter };
