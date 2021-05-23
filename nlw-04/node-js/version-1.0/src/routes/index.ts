import { Router } from 'express';

import UserController from '../app/controllers/UserController';

const router = Router();

const userController = new UserController();

router.post('/users', userController.store);

export default router;
