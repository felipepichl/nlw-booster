import { Router } from 'express';

import { CreateTagsController } from '@controller/CreateTagsController';
import { ListTagController } from '@controller/ListTagController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createTagRouter = Router();

const createTagsController = new CreateTagsController();
const listTagsController = new ListTagController();

createTagRouter.use(ensureAuthenticated);

createTagRouter.post('/', createTagsController.handle);
createTagRouter.get('/', listTagsController.handle);

export { createTagRouter };
