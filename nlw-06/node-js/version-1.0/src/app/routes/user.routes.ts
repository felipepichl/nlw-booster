import { Router } from 'express';

import { CreateUsersControllers } from '@controller/CreateUsersControllers';
import { ListUserReceiveComplimentsController } from '@controller/ListUserReceiveComplimentsController';
import { ListUserSenderComplimentsController } from '@controller/ListUserSenderComplimentsController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createUserRouter = Router();

const createUserController = new CreateUsersControllers();
const listUserReceiveComplimentController = new ListUserReceiveComplimentsController();
const listUserSenderComplimentController = new ListUserSenderComplimentsController();

createUserRouter.post('/', createUserController.handle);

createUserRouter.use(ensureAuthenticated);

createUserRouter.get('/receive', listUserReceiveComplimentController.handle);
createUserRouter.get('/sender', listUserSenderComplimentController.handle);

export { createUserRouter };
