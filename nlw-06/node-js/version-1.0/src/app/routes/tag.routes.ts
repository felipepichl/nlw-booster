import { Router } from 'express';

import { CreateTagsController } from '@controller/CreateTagsController';

const createTagRouter = Router();

const createTagsController = new CreateTagsController();

createTagRouter.post('/', createTagsController.handle);

export { createTagRouter };
