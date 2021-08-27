import { Router } from 'express';

import { itemsRouter } from '@modules/items/infra/http/routes/items.routes';
import pointRouter from '@modules/Points/infra/http/routes/points.routes';
import { usersRouter } from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/items', itemsRouter);
routes.use('/points', pointRouter);

export default routes;
