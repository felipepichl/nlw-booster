import { Router } from 'express';

import { CreateUsersControllers } from '@controller/CreateUsersControllers';
import { CreateTagsController } from '@controller/CreateTagsController';

import { ensureAdmin } from '../app/middlewares/ensureAdmin';

const router = Router();

const createUsersControllers = new CreateUsersControllers();
const createTagsController = new CreateTagsController();

router.post('/users', createUsersControllers.handle);
router.post('/tags', ensureAdmin, createTagsController.handle);

export default router;
