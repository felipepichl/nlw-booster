import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';
import { sessionRouter } from '../app/routes/session.routes';
import { sessionCallbackRouter } from '../app/routes/sessionCallback.routes';

import { authenticateUserRouter } from '../app/routes/authenticateUser.routes';
import { createMessageRouter } from '../app/routes/message.routes';
import { getLastThreeMessagesRouter } from '../app/routes/getThreeMessages.routes';

const router = Router();

router.use('/users', createUserRouter);

router.use('/github', sessionRouter);
router.use('/signin/callback', sessionCallbackRouter);

router.use('/authenticate', authenticateUserRouter);
router.use('/messages', createMessageRouter);
router.use('/messages/last3', getLastThreeMessagesRouter);

export default router;
