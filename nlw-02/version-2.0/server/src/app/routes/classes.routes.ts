import { Router } from 'express';

import { CreateClassesController } from '../controllers/Classes/CreateClassesController';
import { ListClassesController } from '../controllers/Classes/ListClassesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createClassesRouter = Router();

const createClassesController = new CreateClassesController();
const listClassesController = new ListClassesController();

createClassesRouter.use(ensureAuthenticated);

createClassesRouter.post('/', createClassesController.handle);
createClassesRouter.get('/', listClassesController.handle);

export { createClassesRouter };
