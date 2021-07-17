import { Router } from 'express';

import { CreateUsersControllers } from '@controller/CreateUsersControllers';
import { ListUsersController } from '@controller/ListUsersController';
import { ListUserReceiveComplimentsController } from '@controller/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from '@controller/ListUserSendComplimentsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createUserRouter = Router();

const createUserController = new CreateUsersControllers();
const listUserController = new ListUsersController();
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

createUserRouter.get('/', listUserController.handle);

export { createUserRouter };
