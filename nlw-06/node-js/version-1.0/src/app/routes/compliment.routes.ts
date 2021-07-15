import { Router } from 'express';

import { CreateComplimentController } from '../controllers/CreateComplimentController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const createComplimentRouter = Router();

const createComplimentController = new CreateComplimentController();

createComplimentRouter.use(
  '',
  ensureAdmin,
  ensureAuthenticated,
  createComplimentController.handle,
);

export { createComplimentRouter };
