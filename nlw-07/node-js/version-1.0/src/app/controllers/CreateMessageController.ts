import { Request, Response } from 'express';

import { CreateMessageService } from 'app/services/CreateMessageService';

class CreateMessageController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { text } = request.body;
    const user_id = request.user.id;

    const service = new CreateMessageService();

    const message = await service.execute({
      text,
      user_id,
    });

    return response.json(message);
  }
}

export { CreateMessageController };
