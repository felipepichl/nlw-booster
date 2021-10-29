import { Router } from 'express';

import { CreateMessageController } from '../controllers/CreateMessageController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createMessageRouter = Router();

const createMessageController = new CreateMessageController();

createMessageRouter.use(ensureAuthenticated);

createMessageRouter.post('', createMessageController.handle);

export { createMessageRouter };
