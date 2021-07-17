import { Request, Response } from 'express';

import { classToClass } from 'class-transformer';

import { ListUserReceiveComplimentsService } from 'app/services/ListUserReceiveComplimentsService';

class ListUserReceiveComplimentsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

    const listUserReceiceCompliments = await listUserReceiveComplimentsService.execute(
      {
        user_id,
      },
    );

    return response.json(classToClass(listUserReceiceCompliments));
  }
}

export { ListUserReceiveComplimentsController };
