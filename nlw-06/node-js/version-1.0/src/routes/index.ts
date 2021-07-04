import { Router } from 'express';

import { CreateUsersControllers } from '@controller/CreateUsersControllers';
import { CreateTagsController } from '@controller/CreateTagsController';

const router = Router();

const createUsersControllers = new CreateUsersControllers();
const createTagsController = new CreateTagsController();

router.post('/users', createUsersControllers.handle);
router.post('/tags', createTagsController.handle);

export default router;
