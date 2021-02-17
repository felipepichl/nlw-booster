import { Router } from 'express';

import itemRouter from '@modules/Items/infra/http/routes/items.routes';
import pointRouter from '@modules/Points/infra/http/routes/points.routes';

const routes = Router();

routes.use('/items', itemRouter);
routes.use('/points', pointRouter);

export default routes;
