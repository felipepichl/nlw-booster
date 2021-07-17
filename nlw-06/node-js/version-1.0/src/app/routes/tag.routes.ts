import { Router } from 'express';

import { CreateTagsController } from '@controller/CreateTagsController';
import { ListTagsController } from '@controller/ListTagsController';

import { ensureAdmin } from 'app/middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createTagRouter = Router();

const createTagsController = new CreateTagsController();
const listTagsController = new ListTagsController();

createTagRouter.use(ensureAuthenticated);

createTagRouter.post('/', ensureAdmin, createTagsController.handle);
createTagRouter.get('/', listTagsController.handle);

export { createTagRouter };
