import { Router } from 'express';

import { CreateUsersControllers } from '@controller/CreateUsersControllers';

const router = Router();

const createUsersControllers = new CreateUsersControllers();

router.post('/users', createUsersControllers.handle);

export default router;
