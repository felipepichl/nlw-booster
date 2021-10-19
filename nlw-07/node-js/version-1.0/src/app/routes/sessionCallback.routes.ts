import { Router } from 'express';

import { SessionCallbackController } from '../controllers/SessionCallbackController';

const sessionCallbackRouter = Router();

const sessionCallbackController = new SessionCallbackController();

sessionCallbackRouter.get('', sessionCallbackController.handle);

export { sessionCallbackRouter };
