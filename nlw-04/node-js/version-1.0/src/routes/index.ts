import { Router } from 'express';

import SendMailController from '@controller/SendMailController';
import UserController from '../app/controllers/UsersController';
import SurveysController from '../app/controllers/SurveysController';

const router = Router();

const usersController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

router.post('/users', usersController.store);

router.post('/surveys', surveysController.store);
router.get('/surveys', surveysController.show);

router.post('/sendMail', sendMailController.execute);

export default router;
