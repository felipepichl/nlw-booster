import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';
import { sessionRouter } from '../app/routes/session.routes';

const router = Router();

router.use('/users', createUserRouter);

router.use('/github', sessionRouter);

export default router;
