import { Request, Response } from 'express';

import { ListUserSendComplimentsService } from 'app/services/ListUserSendComplimentsService';

class ListUserSendComplimentsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const listUserSendCompliments = await listUserSendComplimentsService.execute(
      {
        user_id,
      },
    );

    return response.json(listUserSendCompliments);
  }
}

export { ListUserSendComplimentsController };
