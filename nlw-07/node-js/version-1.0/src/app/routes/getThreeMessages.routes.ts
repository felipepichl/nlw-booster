import { Router } from 'express';

import { GetLastThreeMessagesController } from '../controllers/GetLastThreeMessagesController';

const getLastThreeMessagesRouter = Router();

const getLastThreeMessagesController = new GetLastThreeMessagesController();

getLastThreeMessagesRouter.get('', getLastThreeMessagesController.handle);

export { getLastThreeMessagesRouter };
