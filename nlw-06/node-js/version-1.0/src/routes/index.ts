import { Router } from 'express';

import { authenticateUserRouter } from '../app/routes/authenticate.routes';
import { createUserRouter } from '../app/routes/user.routes';
import { createTagRouter } from '../app/routes/tag.routes';
import { createComplimentRouter } from '../app/routes/compliment.routes';

const router = Router();

router.use('/users', createUserRouter);

router.use('/session', authenticateUserRouter);

router.use('/tags', createTagRouter);

router.use('/compliments', createComplimentRouter);

export default router;
