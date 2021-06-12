import { Router } from 'express';

import { UsersController } from '../app/controllers/UsersController';
import { SettingsController } from '../app/controllers/SettingsController';
import { MessagesController } from '../app/controllers/MessagesController';

const router = Router();

const userController = new UsersController();
const settingsController = new SettingsController();
const messagesController = new MessagesController();

router.post('/users', userController.store);

router.post('/settings', settingsController.store);

router.post('/messages', messagesController.store);

export default router;
