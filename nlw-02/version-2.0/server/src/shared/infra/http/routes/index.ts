import { Router } from 'express';

import { usersRouter } from '@modules/users/infra/http/routes/users.routes';
import { sessionRouter } from '@modules/users/infra/http/routes/session.routes';
import { subjectsRouter } from '@modules/subjetcs/infra/http/routes/subject.routes';

// import { createClassesRouter } from '../../../../app/routes/classes.routes';
// import { createClassScheduleRouter } from '../../../../app/routes/classSchedule.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessionRouter);
router.use('/subjects', subjectsRouter);

// router.use('/classes', createClassesRouter);

// router.use('/class_schedule', createClassScheduleRouter);

export default router;
