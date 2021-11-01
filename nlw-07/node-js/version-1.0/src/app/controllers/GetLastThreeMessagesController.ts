import { Request, Response } from 'express';

import { GetLastThreeMessagesService } from '../services/GetLastThreeMessagesService';

class GetLastThreeMessagesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetLastThreeMessagesService();

    const messages = await service.execute();

    return response.json(messages);
  }
}

export { GetLastThreeMessagesController };
