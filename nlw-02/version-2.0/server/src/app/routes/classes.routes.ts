import { Router } from 'express';

import { CreateClassesController } from '../controllers/Classes/CreateClassesController';

const createClassesRouter = Router();

const createClassesController = new CreateClassesController();

createClassesRouter.post('/', createClassesController.handle);

export { createClassesRouter };
