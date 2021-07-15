import { Router } from 'express';

import { CreateUsersControllers } from '@controller/CreateUsersControllers';
import { ListUserReceiveComplimentsController } from '@controller/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from '@controller/ListUserSendComplimentsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createUserRouter = Router();

const createUserController = new CreateUsersControllers();
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController();
const listUserSendComplimentController = new ListUserSendComplimentsController();

createUserRouter.post('/', createUserController.handle);

createUserRouter.use(ensureAuthenticated);

createUserRouter.get(
  '/compliments/receive',
  listUserReceiveComplimentController.handle,
);
createUserRouter.get(
  '/compliments/sender',
  listUserSendComplimentController.handle,
);

export { createUserRouter };
