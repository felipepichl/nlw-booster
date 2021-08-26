import { Router } from 'express';

import itemRouter from '@modules/Items/infra/http/routes/items.routes';
import pointRouter from '@modules/Points/infra/http/routes/points.routes';
import { usersRouter } from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/items', itemRouter);
routes.use('/points', pointRouter);

export default routes;
