import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';
import { sessionRouter } from '../app/routes/session.routes';
import { sessionCallbackRouter } from '../app/routes/sessionCallback.routes';

import { authenticateUserRouter } from '../app/routes/authenticateUser.routes';

const router = Router();

router.use('/users', createUserRouter);

router.use('/github', sessionRouter);
router.use('/signin/callback', sessionCallbackRouter);

router.use('/authenticate', authenticateUserRouter);

export default router;
