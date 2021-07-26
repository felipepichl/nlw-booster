import { Router } from 'express';

import { CreateSubjectsController } from '@controller/Subject/CreateSubjectsController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createSubjectRouter = Router();

const createSubjectsController = new CreateSubjectsController();

createSubjectRouter.use(ensureAuthenticated);

createSubjectRouter.post('', createSubjectsController.handle);

export { createSubjectRouter };
