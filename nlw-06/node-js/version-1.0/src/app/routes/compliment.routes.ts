import { Router } from 'express';

import { CreateComplimentController } from '../controllers/CreateComplimentController';

const createComplimentRouter = Router();

const createComplimentController = new CreateComplimentController();

createComplimentRouter.use('', createComplimentController.handle);

export { createComplimentRouter };
