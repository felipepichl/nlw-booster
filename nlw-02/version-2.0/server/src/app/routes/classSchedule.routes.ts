import { Router } from 'express';

import { ListClassScheduleController } from '@controller/ClassesSchedule/ListClassScheduleController';
import { CreateClassScheduleController } from '../controllers/ClassesSchedule/CreateClassScheduleController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createClassScheduleRouter = Router();

const createClassScheduleController = new CreateClassScheduleController();
const listClassScheduleController = new ListClassScheduleController();

createClassScheduleRouter.use(ensureAuthenticated);

createClassScheduleRouter.post('/', createClassScheduleController.handle);
createClassScheduleRouter.get('/', listClassScheduleController.handle);

export { createClassScheduleRouter };
