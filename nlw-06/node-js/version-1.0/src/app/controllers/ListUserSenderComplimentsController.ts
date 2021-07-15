import { Request, Response } from 'express';

import { ListUserSenderComplimentsService } from 'app/services/ListUserSenderComplimentsService';

class ListUserSenderComplimentsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listUserSenderComplimentsService = new ListUserSenderComplimentsService();

    const listUserSenderCompliments = await listUserSenderComplimentsService.execute(
      {
        user_id,
      },
    );

    return response.json(listUserSenderCompliments);
  }
}

export { ListUserSenderComplimentsController };
