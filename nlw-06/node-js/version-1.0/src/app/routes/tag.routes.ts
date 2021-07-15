import { Router } from 'express';

import { CreateTagsController } from '@controller/CreateTagsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createTagRouter = Router();

const createTagsController = new CreateTagsController();

createTagRouter.post('/', ensureAuthenticated, createTagsController.handle);

export { createTagRouter };
