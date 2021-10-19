import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';
import { sessionRouter } from '../app/routes/session.routes';
import { sessionCallbackRouter } from '../app/routes/sessionCallback.routes';

const router = Router();

router.use('/users', createUserRouter);

router.use('/github', sessionRouter);
router.use('/signin/callback', sessionCallbackRouter);

export default router;
