import { Router } from 'express';

import UserController from '../app/controllers/UsersController';
import SurveysController from '../app/controllers/SurveysController';

const router = Router();

const usersController = new UserController();
const surveysController = new SurveysController();

router.post('/users', usersController.store);

router.post('/surveys', surveysController.store);
router.get('/surveys', surveysController.show);

export default router;
