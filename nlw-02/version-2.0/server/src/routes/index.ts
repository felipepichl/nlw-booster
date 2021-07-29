import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';
import { sessionRouter } from '../app/routes/session.routes';
import { createSubjectRouter } from '../app/routes/subject.routes';
import { createClassesRouter } from '../app/routes/classes.routes';

const router = Router();

router.use('/users', createUserRouter);

router.use('/session', sessionRouter);

router.use('/subjects', createSubjectRouter);

router.use('classes', createClassesRouter);

export default router;
