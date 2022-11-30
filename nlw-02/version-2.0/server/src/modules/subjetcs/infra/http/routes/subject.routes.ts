import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

import { SubjectsController } from '../controllers/SubjectsController';
import { ListSubjectsController } from '../controllers/ListSubjectsController';

const subjectsRouter = Router();

const subjectsController = new SubjectsController();
const listSubjectsController = new ListSubjectsController();

subjectsRouter.use(ensureAuthenticated);

subjectsRouter.post('', subjectsController.handle);
subjectsRouter.get('', listSubjectsController.handle);

export { subjectsRouter };
