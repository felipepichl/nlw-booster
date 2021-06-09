import { Router } from 'express';

import SendMailController from '../app/controllers/SendMailController';
import UserController from '../app/controllers/UsersController';
import SurveysController from '../app/controllers/SurveysController';
import AnswerController from '../app/controllers/AnswerController';
import NpsController from '../app/controllers/NpsController';

const router = Router();

const usersController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post('/users', usersController.store);

router.post('/surveys', surveysController.store);
router.get('/surveys', surveysController.show);

router.post('/sendMail', sendMailController.execute);

router.get('/answers/:value', answerController.execute);
router.get('/nps/:survey_id', npsController.execute);

export default router;
