import { Router } from 'express';

import { CreateTagsController } from '@controller/CreateTagsController';
import { createUserRouter } from '../app/routes/user.routes';

import { ensureAdmin } from '../app/middlewares/ensureAdmin';

const router = Router();

const createTagsController = new CreateTagsController();

router.use('/users', createUserRouter);

router.post('/tags', ensureAdmin, createTagsController.handle);

export default router;
