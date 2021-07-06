import { Router } from 'express';

import { createUserRouter } from '../app/routes/user.routes';
import { createTagRouter } from '../app/routes/tag.routes';

import { ensureAdmin } from '../app/middlewares/ensureAdmin';

const router = Router();

router.use('/users', createUserRouter);

router.use('/tags', ensureAdmin, createTagRouter);

export default router;
