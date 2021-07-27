import { Router } from 'express';

import { CreateSubjectsController } from '@controller/Subject/CreateSubjectsController';
import { ListSubjectsController } from '@controller/Subject/ListSubjectsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createSubjectRouter = Router();

const createSubjectsController = new CreateSubjectsController();
const listSubjectsController = new ListSubjectsController();

createSubjectRouter.use(ensureAuthenticated);

createSubjectRouter.post('', createSubjectsController.handle);
createSubjectRouter.get('', listSubjectsController.handle);

export { createSubjectRouter };
