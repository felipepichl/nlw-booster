import { Router } from 'express';

import { GetLastThreeMessagesController } from '../controllers/GetLastThreeMessagesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const getLastThreeMessagesRouter = Router();

const getLastThreeMessagesController = new GetLastThreeMessagesController();

getLastThreeMessagesRouter.use(ensureAuthenticated);

getLastThreeMessagesRouter.post('', getLastThreeMessagesController.handle);

export { getLastThreeMessagesRouter };
