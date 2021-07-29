import { Router } from 'express';

import { CreateClassesController } from '../controllers/Classes/CreateClassesController';

const createClassesRouter = Router();

const createClassesController = new CreateClassesController();

createClassesRouter.post('/:subject_id', createClassesController.handle);

export { createClassesRouter };
