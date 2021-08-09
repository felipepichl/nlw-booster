import { Router } from 'express';

import { CreateClassesController } from '../controllers/Classes/CreateClassesController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createClassesRouter = Router();

const createClassesController = new CreateClassesController();

createClassesRouter.use(ensureAuthenticated);

createClassesRouter.post('/', createClassesController.handle);

export { createClassesRouter };
