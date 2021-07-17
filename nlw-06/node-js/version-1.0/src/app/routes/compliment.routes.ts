import { Router } from 'express';

import { CreateComplimentController } from '../controllers/CreateComplimentController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createComplimentRouter = Router();

const createComplimentController = new CreateComplimentController();

createComplimentRouter.post(
  '/',
  ensureAuthenticated,
  createComplimentController.handle,
);

export { createComplimentRouter };
