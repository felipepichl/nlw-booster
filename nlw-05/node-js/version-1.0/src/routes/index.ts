import { Router } from 'express';

import { UsersController } from '../app/controllers/UsersController';

const router = Router();

const userController = new UsersController();

router.post('/users', userController.store);

export default router;
