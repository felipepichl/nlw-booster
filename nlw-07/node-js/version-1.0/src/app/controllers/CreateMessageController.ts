import { Request, Response } from 'express';

import { CreateMessageService } from 'app/services/CreateMessageService';

class CreateMessageController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { text } = request.body;
    const user_id = request.user.id;

    const createMessageService = new CreateMessageService();

    const message = await createMessageService.execute({
      text,
      user_id,
    });

    return response.json(message);
  }
}

export { CreateMessageController };
