import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';
import { sessionRouter } from '../app/routes/session.routes';
import { createSubjectRouter } from '../app/routes/subject.routes';

const router = Router();

router.use('/users', createUserRouter);

router.use('/session', sessionRouter);

router.use('/subjects', createSubjectRouter);

export default router;
