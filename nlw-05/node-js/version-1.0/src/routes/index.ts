import { Router } from 'express';

import { UsersController } from '../app/controllers/UsersController';
import { SettingsController } from '../app/controllers/SettingsController';

const router = Router();

const userController = new UsersController();
const settingsController = new SettingsController();

router.post('/users', userController.store);

router.post('/settings', settingsController.store);

export default router;
